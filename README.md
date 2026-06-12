[![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/ai-issue-action?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/ai-issue-action/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/ai-issue-action?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/ai-issue-action/releases)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/ai-issue-action?logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/ai-issue-action/releases/latest)
[![GitHub Dist Size](https://img.shields.io/github/size/cssnr/ai-issue-action/dist%2Findex.js?branch=release&logo=bookstack&logoColor=white&label=dist)](https://github.com/cssnr/ai-issue-action/tree/release)
[![Action Run Using](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fcssnr%2Fai-issue-action%2Frefs%2Fheads%2Fmaster%2Faction.yml&query=%24.runs.using&logo=githubactions&logoColor=white&label=runs)](https://github.com/cssnr/actionlint-action/blob/master/action.yml)
[![Workflow Release](https://img.shields.io/github/actions/workflow/status/cssnr/ai-issue-action/release.yaml?logo=norton&logoColor=white&label=release)](https://github.com/cssnr/ai-issue-action/actions/workflows/release.yaml)
[![Workflow Lint](https://img.shields.io/github/actions/workflow/status/cssnr/ai-issue-action/lint.yaml?logo=norton&logoColor=white&label=lint)](https://github.com/cssnr/ai-issue-action/actions/workflows/lint.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cssnr_ai-issue-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cssnr_ai-issue-action)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/ai-issue-action?logo=github&label=updated)](https://github.com/cssnr/ai-issue-action)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/ai-issue-action?logo=buffer&label=repo%20size)](https://github.com/cssnr/ai-issue-action?tab=readme-ov-file#readme)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/ai-issue-action?logo=devbox)](https://github.com/cssnr/ai-issue-action?tab=readme-ov-file#readme)
[![GitHub Contributors](https://img.shields.io/github/contributors-anon/cssnr/ai-issue-action?logo=southwestairlines)](https://github.com/cssnr/ai-issue-action/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues/cssnr/ai-issue-action?logo=codeforces&logoColor=white)](https://github.com/cssnr/ai-issue-action/issues)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/ai-issue-action?logo=livechat&logoColor=white)](https://github.com/cssnr/ai-issue-action/discussions)
[![GitHub Forks](https://img.shields.io/github/forks/cssnr/ai-issue-action?style=flat&logo=forgejo&logoColor=white)](https://github.com/cssnr/ai-issue-action/forks)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/ai-issue-action?style=flat&logo=gleam&logoColor=white)](https://github.com/cssnr/ai-issue-action/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=apachespark&logoColor=white&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# AI Issue Action

<a title="AI Issue Action" href="https://actions.cssnr.com/" target="_blank">
<img alt="AI Issue Action" align="right" width="128" height="auto" src="https://raw.githubusercontent.com/cssnr/ai-issue-action/refs/heads/master/.github/assets/logo.svg"></a>

- [Inputs](#Inputs)
- [Outputs](#Outputs)
- [Examples](#Examples)
- [Tags](#Tags)
- [Support](#Support)
- [Contributing](#Contributing)

🤖 Automatically triage issues with AI trained on your existing documentation.

💯 **100% free** to use with [OpenCode Zen](https://opencode.ai/zen) or [Gemini Free Tier](https://aistudio.google.com/app/api-keys) models.

✅ Works with Claude, Gemini, OpenAI, and any [OpenAI Compatible Provider](https://ai-sdk.dev/providers/openai-compatible-providers).

```yaml
- name: 'AI Issue'
  uses: cssnr/ai-issue-action@v1
  with:
    model: big-pickle
    instructions: 'You are a helpful assistant responding to a GitHub Issue'
```

💡 You can copy the [issue.yaml](issue.yaml) to your workflows or see more [Examples](#examples).

### Features

- Works with Claude, Gemini, OpenAI, and OpenAI Compatible Provider
- Provide Instructions via Text, Path Globs or URL
- Add Custom Head or Tail Message to the Issue Reply
- Outputs Results, Reasoning, Usage, and Comment Details
- Built with the [AI SDK](https://ai-sdk.dev/)

> [!TIP]  
> TO see more features, please [submit a feature request](https://github.com/cssnr/ai-issue-action/issues/new?template=1-feature.yaml).

## Inputs

The **only** required input is the [model](#model) name.  
You **must** provide at least one of [instructions](#instructions), [url](#url) or [path](#path).

| Input                         | Default                    | Input&nbsp;Description    |
| :---------------------------- | :------------------------- | :------------------------ |
| [model](#model)               | -                          | Model to Use              |
| [instructions](#instructions) | -                          | Text Instructions         |
| [url](#url)                   | -                          | Remote URL Instructions   |
| [path](#path)                 | -                          | Path(s) Glob Instructions |
| `max_tokens`                  | -                          | Max Output Tokens         |
| `head`                        | -                          | Head Text for Reply       |
| `tail`                        | -                          | Tail Text for Reply       |
| `base_url`                    | https://opencode.ai/zen/v1 | URL for OpenAI Compatible |
| `number`                      | _Workflow Issue Number_    | Issue Number              |
| `token`                       | `${{ github.token }}`      | Optional GitHub Token     |

To authenticate provide your API key in the applicable environment variable:

- Claude: `ANTHROPIC_API_KEY`
- Gemini: `GOOGLE_GENERATIVE_AI_API_KEY`
- OpenAI: `OPENAI_API_KEY`
- OpenAI Compatible: `PROVIDER_API_KEY`

```yaml
- name: 'AI Issue'
  uses: cssnr/ai-issue-action@v1
  env:
    ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
    GOOGLE_GENERATIVE_AI_API_KEY: ${{ secrets.GOOGLE_GENERATIVE_AI_API_KEY }}
    OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
    PROVIDER_API_KEY: ${{ secrets.PROVIDER_API_KEY }} # optional for free models
  with:
    model: gemini-2.5-flash # or any Claude, Gemini, OpenAI, or OpenAI Compatible Provider
```

💡 Start for free with model `big-pickle` (no API key required).

Make sure your workflow has the required permissions.

```yaml
permissions:
  contents: write
  issues: write
```

#### model

- Claude: https://platform.claude.com/docs/en/about-claude/models/overview
- Gemini: https://ai.google.dev/gemini-api/docs/models
- OpenAI: https://developers.openai.com/api/docs/models/compare
- OpenAI Compatible Provider: https://opencode.ai/zen

Provider routing is based on model name.

| Pattern   | Provider SDK              |
| :-------- | :------------------------ |
| `gemini*` | @ai-sdk/google            |
| `gpt*`    | @ai-sdk/openai            |
| `claude*` | @ai-sdk/anthropic         |
| `*`       | @ai-sdk/openai-compatible |

Examples: `claude-haiku-4-5`, `gemini-2.5-flash`, `gpt-5.4-nano`, `big-pickle`

#### instructions

Text instruction.

Example: `You are a helpful assistant responding to a GitHub Issue on training data:`

#### url

URL to fetch remote instructions.

Example: `https://smashedr.github.io/vitepress-chat/llms.txt`

#### path

File glob(s) to read for instructions.

Example: `.github/instructions/*.md`

## Examples

💡 To get started 100% free, copy the [issue.yaml](issue.yaml) to your `.github/workflows`.

Basic example using the free Zen Big Pickle model.

```yaml
- name: 'AI Issue'
  uses: cssnr/ai-issue-action@v1
  with:
    model: big-pickle
    instructions: 'You are an assistant responding to a GitHub Issue'
```

Use remote llms.txt and Gemini [Free Tier](https://aistudio.google.com/app/api-keys).

```yaml
- name: 'AI Issue'
  uses: cssnr/ai-issue-action@v1
  env:
    GOOGLE_GENERATIVE_AI_API_KEY: ${{ secrets.GOOGLE_GENERATIVE_AI_API_KEY }}
  with:
    model: gemini-2.5-flash
    instructions: 'You are an assistant responding to a GitHub Issue with knowledge:'
    url: https://smashedr.github.io/vitepress-chat/llms.txt
```

Full example using an app token and file path globs.

```yaml
name: 'Issue'

on:
  issues:
    types: [opened]

jobs:
  issue:
    name: 'Issue'
    runs-on: ubuntu-latest
    timeout-minutes: 15

    permissions:
      contents: write
      issues: write

    steps:
      - name: 'Checkout'
        uses: actions/checkout@v6
        with:
          sparse-checkout-cone-mode: false
          sparse-checkout: |
            docs/**

      - name: 'Create App Token'
        if: ${{ !github.event.release.prerelease }}
        id: app
        uses: actions/create-github-app-token@v3
        with:
          client-id: ${{ vars.APP_CLIENT_ID }}
          private-key: ${{ secrets.APP_PRIVATE_KEY }}

      - name: 'AI Issue'
        id: issue
        uses: cssnr/ai-issue-action@v1
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        with:
          token: ${{ steps.app.outputs.token }}
          model: gpt-5.4-nano
          instructions: 'You are an assistant responding to a GitHub Issue with Training Data:'
          path: |
            docs/**/*.md
          tail: |
            _Response generated by the [AI Issue Action](https://github.com/cssnr/ai-issue-action)._
```

Only run for issues **with** the label `bug`.

```yaml
if: ${{ contains(github.event.issue.labels.*.name, 'bug') }}
```

Only run for issues **without** the label `enhancement`.

```yaml
if: ${{ !contains(github.event.issue.labels.*.name, 'enhancement') }}
```

Only run for issues **without** a label or with label `bug`.

```yaml
if: ${{ !github.event.issue.labels[0] || contains(github.event.issue.labels.*.name, 'bug') }}
```

Only run for issues **without** a type or the type `bug` (Organizations).

```yaml
if: ${{ !github.event.issue.type || github.event.issue.type.name == 'Bug' }}
```

For more examples, you can check out other projects using this action:  
https://github.com/cssnr/ai-issue-action/network/dependents

## Outputs

| Output          | Description    |
| :-------------- | :------------- |
| `text`          | Response Text  |
| `reasoningText` | Reasoning Text |
| `usage`         | Usage JSON     |
| `finishReason`  | Finish Reason  |
| `comment`       | Comment JSON   |
| `commentId`     | Comment ID     |
| `commentUrl`    | Comment URL    |

```yaml
- name: 'AI Issue'
  id: issue
  uses: cssnr/ai-issue-action@v1
  env:
    GOOGLE_GENERATIVE_AI_API_KEY: ${{ secrets.GOOGLE_GENERATIVE_AI_API_KEY }}
  with:
    model: gemini-2.5-flash
    instructions: 'You are an assistant responding to a GitHub Issue with Training Data:'
    path: .github/instructions/*.md

- name: 'Echo Outputs'
  env:
    text: ${{ steps.issue.outputs.text }}
    reasoningText: ${{ steps.issue.outputs.reasoningText }}
    usage: ${{ steps.issue.outputs.usage }}
    comment: ${{ steps.issue.outputs.comment }}
  run: |
    echo "text: ${text}"
    echo "reasoningText: ${reasoningText}"
    echo "usage: ${usage}"
    echo "finishReason: ${{ steps.issue.outputs.finishReason }}"
    echo "comment: ${comment}"
    echo "commentId: ${{ steps.issue.outputs.commentId }}"
    echo "commentUrl: ${{ steps.issue.outputs.commentUrl }}"
```

Note: Multi-line outputs get evaluated using `${{ }}` in a `run` block.

## Tags

The following rolling [tags](https://github.com/cssnr/ai-issue-action/tags) are maintained.

| Version&nbsp;Tag                                                                                                                                                                                               | Rolling | Bugs | Feat. |   Name    |  Target  | Example  |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :--: | :---: | :-------: | :------: | :------- |
| [![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/ai-issue-action?sort=semver&filter=!v*.*&style=for-the-badge&label=%20&color=44cc10)](https://github.com/cssnr/ai-issue-action/releases/latest) |   ✅    |  ✅  |  ✅   | **Major** | `vN.x.x` | `vN`     |
| [![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/ai-issue-action?sort=semver&filter=!v*.*.*&style=for-the-badge&label=%20&color=blue)](https://github.com/cssnr/ai-issue-action/releases/latest) |   ✅    |  ✅  |  ❌   | **Minor** | `vN.N.x` | `vN.N`   |
| [![GitHub Release](https://img.shields.io/github/v/release/cssnr/ai-issue-action?style=for-the-badge&label=%20&color=red)](https://github.com/cssnr/ai-issue-action/releases/latest)                           |   ❌    |  ❌  |  ❌   | **Micro** | `vN.N.N` | `vN.N.N` |

You can view the release notes for each version on the [releases](https://github.com/cssnr/ai-issue-action/releases) page.

The **Major** tag is recommended. It is the most up-to-date and always backwards compatible.
Breaking changes would result in a **Major** version bump. At a minimum you should use a **Minor** tag.

# Support

If you run into any issues or need help getting started, please do one of the following:

- [Report an Issue](https://github.com/cssnr/ai-issue-action/issues)
- [Q&A Discussion](https://github.com/cssnr/ai-issue-action/discussions/categories/q-a)
- [Request a Feature](https://github.com/cssnr/ai-issue-action/issues/new?template=1-feature.yaml)
- [Chat with us on Discord](https://discord.gg/wXy6m2X8wY)

[![Features](https://img.shields.io/badge/features-brightgreen?style=for-the-badge&logo=rocket&logoColor=white)](https://github.com/cssnr/ai-issue-action/issues/new?template=1-feature.yaml)
[![Issues](https://img.shields.io/badge/issues-red?style=for-the-badge&logo=southwestairlines&logoColor=white)](https://github.com/cssnr/ai-issue-action/issues)
[![Discussions](https://img.shields.io/badge/discussions-blue?style=for-the-badge&logo=livechat&logoColor=white)](https://github.com/cssnr/ai-issue-action/discussions)
[![Discord](https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/wXy6m2X8wY)

# Contributing

If you would like to submit a PR, please review the [CONTRIBUTING.md](#contributing-ov-file).

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

[![Actions Tools](https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/actions/actions-tools.png)](https://actions-tools.cssnr.com/)

Additionally, you can support other [GitHub Actions](https://actions.cssnr.com/) I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy Action](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [Docker Context Action](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme)
- [AI Issue Action](https://github.com/cssnr/ai-issue-action?tab=readme-ov-file#readme)
- [Actions Up Action](https://github.com/cssnr/actions-up-action?tab=readme-ov-file#readme)
- [Webstore Publish Action](https://github.com/cssnr/webstore-publish-action?tab=readme-ov-file#readme)
- [Rhysd Actionlint Action](https://github.com/cssnr/actionlint-action?tab=readme-ov-file#readme)
- [Zensical Action](https://github.com/cssnr/zensical-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Homebrew Action](https://github.com/cssnr/homebrew-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)
- [TOML Action](https://github.com/cssnr/toml-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [JSON Key Value Check Action](https://github.com/cssnr/json-key-value-check-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Package Changelog Action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)
- [NPM Outdated Check Action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)
- [Label Creator Action](https://github.com/cssnr/label-creator-action?tab=readme-ov-file#readme)
- [Algolia Crawler Action](https://github.com/cssnr/algolia-crawler-action?tab=readme-ov-file#readme)
- [Create Pull Action](https://github.com/cssnr/create-pull-action?tab=readme-ov-file#readme)
- [Upload Release Action](https://github.com/cssnr/upload-release-action?tab=readme-ov-file#readme)
- [Check Build Action](https://github.com/cssnr/check-build-action?tab=readme-ov-file#readme)
- [Web Request Action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
- [Get Commit Action](https://github.com/cssnr/get-commit-action?tab=readme-ov-file#readme)

<details><summary>❔ Unpublished Actions</summary>

These actions are not published on the Marketplace, but may be useful.

- [cssnr/create-files-action](https://github.com/cssnr/create-files-action?tab=readme-ov-file#readme) - Create various files from templates.
- [cssnr/draft-release-action](https://github.com/cssnr/draft-release-action?tab=readme-ov-file#readme) - Keep a draft release ready to publish.
- [cssnr/env-json-action](https://github.com/cssnr/env-json-action?tab=readme-ov-file#readme) - Convert env file to json or vice versa.
- [cssnr/push-artifacts-action](https://github.com/cssnr/push-artifacts-action?tab=readme-ov-file#readme) - Sync files to a remote host with rsync.
- [smashedr/update-release-notes-action](https://github.com/smashedr/update-release-notes-action?tab=readme-ov-file#readme) - Update release notes.
- [smashedr/combine-release-notes-action](https://github.com/smashedr/combine-release-notes-action?tab=readme-ov-file#readme) - Combine release notes.
- [smashedr/openai-translate-action](https://github.com/smashedr/openai-translate-action?tab=readme-ov-file#readme) - OpenAI translate action.

---

</details>

<details><summary>📝 Template Actions</summary>

These are basic action templates that I use for creating new actions.

- [javascript-action](https://github.com/smashedr/javascript-action?tab=readme-ov-file#readme) - JavaScript
- [typescript-action](https://github.com/smashedr/typescript-action?tab=readme-ov-file#readme) - TypeScript
- [py-test-action](https://github.com/smashedr/py-test-action?tab=readme-ov-file#readme) - Dockerfile Python
- [test-action-uv](https://github.com/smashedr/test-action-uv?tab=readme-ov-file#readme) - Dockerfile Python UV
- [docker-test-action](https://github.com/smashedr/docker-test-action?tab=readme-ov-file#readme) - Docker Image Python

Note: The `docker-test-action` builds, runs and pushes images to [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

---

</details>

For a full list of current projects visit: [https://cssnr.github.io/](https://cssnr.github.io/)

<a href="https://github.com/cssnr/ai-issue-action">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=cssnr/ai-issue-action&type=date&legend=bottom-right&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=cssnr/ai-issue-action&type=date&legend=bottom-right" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=cssnr/ai-issue-action&type=date&legend=bottom-right" />
 </picture>
</a>
