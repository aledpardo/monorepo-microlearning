# Monorepos Micro-learning

## Sample monorepo project

* `@monorepo/node-service`
* `@monorepo/app-services`, application logic

## How to get started

1. `npm install -g lerna`
2. `lerna init`

## Create your project's packages

1. `lerna create <package-name>`

## Install dependencies and inter-dependencies

1. `lerna add <package>[@version] [--dev] [--exact] [--peer]`

## Bootstrap the monorepo

1. `lerna bootstrap`

## Day-by-day dev commands

### Linting

> We'll use [StandardJS](https://standardjs.com/#install) in our monorepo.

```bash
npm install standard --save-dev
```

In `root` package:

* Add `lint` script

```json
  "scripts": {
    "lint": "lerna exec -- standard"
  }
```

* Add `test` script

```json
  "scripts": {
    "test": "lerna run test"
  }
```

> Adding the `--no-bail` option tells `lerna` to continue executing
> even when a package's exits with error.
> This option works for both `lerna exec` and `lerna run` commands.

* Add `build` script

## Importing repositories into the Lerna monorepo

> For this, you need the repo cloned to access it locally.

1. `lerna import ../path/to/existing/repo --flatten --preserve-commit --dest=data-repository`

* `--flatten` helps with merge commits which had conflicts, which could cause errors during the importing, *i.e. with each merge commit as a single change the merge introduced*
* `--preserve-commit` option ensures we keep the original commit author and date
* `--dest=<name>` specifies a different destination directory for the package. The `--dest` value should be in the `packages` property in `lerna.json`
