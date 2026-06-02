# Agent Guide - ai-issue-action

GitHub Action - [action.yml](action.yml)

- `src` is the source directory (single `index.ts` file)
- `dist` is built by rollup, in `.gitignore`, and pushed to the `release` branch on publish

## Commands

| Command                  | Purpose                                            |
| ------------------------ | -------------------------------------------------- |
| `npm run dev`            | Rollup watch mode `src/index.ts` → `dist/index.js` |
| `npm run build`          | Rollup `src/index.ts` → `dist/index.js`            |
| `npm run build:watch`    | Rollup watch mode                                  |
| `npm run lint`           | ESLint on `src/`                                   |
| `npm run tsc`            | TypeScript check (`--noEmit`)                      |
| `npm run prettier:check` | Prettier formatting check                          |
| `npm run prettier:write` | Auto-format all files                              |
| `npm run yamllint`       | `yamllint -c .github/yamllint.yaml .`              |

To validate `.github/workflows` run `actionlint`
