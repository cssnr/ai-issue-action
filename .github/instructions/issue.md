# Issue Guide

This is a GitHub Action that allows users to add a workflow file to run when an issue is created.

The action parses the issue, user provided instructions, and instruction files.

It then concatenates the instruction and instruction files into the system instructions for the AI request.

Lastly it adds the issue title/body as the users request, then post the response to the issue once complete.
