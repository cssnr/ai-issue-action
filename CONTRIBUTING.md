# Contributing

- [Workflow](#Workflow)
- [Testing](#Testing)

To run actions locally you need to install act: https://nektosact.com/installation/index.html

## Workflow

1. Fork the repository.
2. Create a branch in your fork.
3. Run `npm install`.
4. Make your changes.
5. Build or watch `npm run build:watch`.
6. [Test](#Testing) your changes.
7. Create a PR to this repository.
8. Verify the tests pass, otherwise resolve.

## Testing

First install and optionally watch for changes.

```shell
npm install
npm run build:watch
```

Then create a `.secrets` file with your GitHub (to post issue comments).

```text
GITHUB_TOKEN="ghp_xxx"
```

Create an Issue in your fork and set the number in [event.json](event.json).

```shell
act issue -j test -e event.json
```
