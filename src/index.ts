import * as core from '@actions/core'
import * as github from '@actions/github'
import * as glob from '@actions/glob'
import { anthropic } from '@ai-sdk/anthropic'
import { google } from '@ai-sdk/google'
import { openai } from '@ai-sdk/openai'
import { createOpenAICompatible } from '@ai-sdk/openai-compatible'
import { generateText } from 'ai'
import { readFileSync } from 'node:fs'
import { relative } from 'node:path'
import type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods'

type IssueData = RestEndpointMethodTypes['issues']['get']['response']['data']

// Inputs
const inputs = {
  model: core.getInput('model', { required: true }),
  instructions: core.getInput('instructions'),
  url: core.getInput('url'),
  path: core.getInput('path'),
  maxTokens: core.getInput('max_tokens'),
  head: core.getInput('head'),
  tail: core.getInput('tail'),
  baseURL: core.getInput('base_url'),
  number: core.getInput('number'),
  token: core.getInput('token', { required: true }),
} as const

type Inputs = typeof inputs

async function main() /* NOSONAR */ {
  const version: string = process.env.GITHUB_ACTION_REF
    ? `\u001b[35;1m${process.env.GITHUB_ACTION_REF}`
    : '\u001b[33;1mSource'
  core.info(`🏳️ Starting AI Issue Action - ${version}`)

  // console.log('inputs:', inputs)
  console.log('github.context.repo:', { ...github.context.repo })

  const octokit = github.getOctokit(inputs.token)

  let issue: IssueData

  if (inputs.number) {
    console.log('Fetching inputs.number:', inputs.number)
    const response = await octokit.rest.issues.get({
      ...github.context.repo,
      issue_number: Number.parseInt(inputs.number),
    })
    issue = response.data
  } else if (github.context.payload.issue) {
    issue = github.context.payload.issue as IssueData
    console.log('Using issue.number:', issue.number)
  } else {
    return core.setFailed('No Issue Number')
  }

  core.startGroup(`Issue #${issue.number}`)
  console.log(issue)
  core.endGroup() // issue

  const title = issue.title
  console.log('Issue Title:', title)
  if (!title) return core.setFailed('No Issue Title')

  const body = issue.body
  core.startGroup('Issue Body')
  console.log(body)
  core.endGroup() // body
  if (!body) return core.setFailed('No Issue Body')

  const instructions = await getInstructions(inputs)
  core.startGroup('Instructions')
  console.log(JSON.stringify(instructions, null, 2)) // NOSONAR
  core.endGroup() // instructions
  if (!instructions.length) return core.setFailed('No Instructions Provided')
  console.log('Instructions Length', instructions.length)

  const model = getModel(inputs)
  console.log('Model:', model.modelId)
  if (!model.modelId) return core.setFailed('No Model Found')

  const maxTokens = Number.parseInt(inputs.maxTokens, 10) || undefined
  console.log('Max Tokens:', maxTokens) // NOSONAR

  const response = await generateText({
    prompt: body,
    system: instructions.join('\n\n'),
    model: model,
    maxOutputTokens: maxTokens,
    // providerOptions: { openai: { serviceTier: 'flex', reasoningEffort: 'none' } },
  })

  // console.log(inspect(response, { depth: null }))
  core.startGroup('text')
  console.log(response.text) // NOSONAR
  core.endGroup() // text
  core.startGroup('reasoningText')
  console.log(response.reasoningText)
  core.endGroup()
  core.startGroup('usage')
  console.log(JSON.stringify(response.usage, null, 2))
  core.endGroup() // usage
  console.log('finishReason:', response.finishReason)

  if (!response.text) return core.setFailed('No Response Text')

  const result = [inputs.head, response.text, inputs.tail].filter(Boolean).join('\n\n')
  core.startGroup('result')
  console.log(result)
  core.endGroup() // result

  const comment = await octokit.rest.issues.createComment({
    ...github.context.repo,
    issue_number: issue.number,
    body: result,
  })
  core.startGroup('comment')
  console.log(comment)
  core.endGroup() // comment

  // Set Outputs
  core.info('📩 Setting Outputs')
  core.setOutput('text', response.text)
  core.setOutput('reasoningText', response.reasoningText)
  core.setOutput('usage', response.usage)
  core.setOutput('finishReason', response.finishReason)
  // core.setOutput('body', response.response.body)
  core.setOutput('comment', comment.data)
  core.setOutput('commentId', comment.data.id)
  core.setOutput('commentUrl', comment.data.html_url)

  core.info(`✅ \u001b[32;1mFinished Success`)
}

function getModel(inputs: Inputs) {
  if (inputs.model.startsWith('gemini')) {
    return google(inputs.model)
  } else if (inputs.model.startsWith('gpt')) {
    return openai(inputs.model)
  } else if (inputs.model.startsWith('claude')) {
    return anthropic(inputs.model)
  } else {
    const provider = createOpenAICompatible({
      name: 'zen',
      baseURL: inputs.baseURL,
      apiKey: process.env.PROVIDER_API_KEY,
      includeUsage: true,
    })
    return provider(inputs.model)
  }
}

async function getInstructions(inputs: Inputs): Promise<string[]> {
  const results: string[] = []
  // const metaText = `You are a helpful assistant responding to a GitHub Issue created by user @${process.env.GITHUB_ACTOR} in repository ${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}`
  if (inputs.instructions) results.push(inputs.instructions)
  if (inputs.url) {
    core.info(`Fetching URL: ${inputs.url}`)
    const response = await fetch(inputs.url)
    if (!response.ok) throw new Error(`Failed to fetch URL: ${response.statusText}`)
    const text = await response.text()
    results.push(`--- URL Content: ${inputs.url} ---\n\n${text.trim()}\n\n`)
  }
  if (inputs.path) {
    const globber = await glob.create(inputs.path)
    for await (const file of globber.globGenerator()) {
      // console.log('file:', file)
      const text = readFileSync(file, 'utf8').trim()
      const path = relative(process.env.GITHUB_WORKSPACE || '', file)
      core.startGroup(file)
      console.log(text)
      core.endGroup() // body
      if (text) results.push(`--- Knowledge File: ${path} ---\n\n${text}\n\n`)
    }
  }
  return results
}

try {
  await main()
} catch (e) {
  const message = e instanceof Error ? e.message : 'Unknown Error'
  core.setFailed(message)
}
