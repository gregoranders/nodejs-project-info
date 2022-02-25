# Contributing Guide

<!--lint disable write-good-->
Contributing to `nodejs-project-info` is fairly easy. This document shows you how to
get the project, run all provided tests and generate a production-ready build.
<!--lint enable write-good-->

It also covers provided tasks that help you develop with `nodejs-project-info`.

## Dependencies

To make sure that the following instructions work, please install the following dependencies
on you machine:

- Node.js (comes with a bundles npm)
- Git

## Installation

To get the source of `nodejs-project-info`, clone the git repository via:

```sh
git clone https://github.com/gregoranders/nodejs-project-info
```

This will clone the complete source to your local machine. Navigate to the project folder
and install all needed dependencies via **npm**:

```sh
npm install
```

This command installs everything which is required for building and testing the project.

## Testing

### Unit testing using [Jest][jest-url]

`npm test` executes the unit tests.

## Building

`npm run build` executes the build.

## Developing

`npm run watch` executes the build in watch mode.

## Ensure code quality `docker required`

`npm run lint` executes [markdownlint][markdownlint-url] and [remark][remark-url] checks

`npm run codeclimate` executes the [Code Climate](docs/codeclimate.md) checks

## Contributing/Submitting changes

- Check out a new branch based on <code>development</code> and name it to what you intend to do:
  - Example:

    ```sh
    git checkout -b BRANCH_NAME origin/development
    ```

    If you get an error, you may need to fetch <code>development</code> first by using

    ```sh
    git remote update && git fetch
    ```

  - Use one branch per fix/feature
- Make your changes
  - Make sure to provide a [spec for unit tests][jest-url].
  - Run your tests with <code>npm test</code>.
  - Save integration time and run code quality checks locally with `npm run codeclimate`
  - When all tests pass, everything's fine.
- Commit your changes
  - Please provide a git message that explains what you've done
    following the [conventional commits][commit-url] pattern.
  - `nodejs-project-info` uses [conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli).
  - Commit to the forked repository.
  - [Sign][sign-url] your commit.
- Make a pull request
  - Make sure you send the PR to the <code>development</code> branch.
  - CI is watching you!

[jest-url]: https://jestjs.io/
[markdownlint-url]: https://www.npmjs.com/package/markdownlint
[remark-url]: https://remark.js.org/
[commit-url]: https://www.conventionalcommits.org
[sign-url]: https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits
