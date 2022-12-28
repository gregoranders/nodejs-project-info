# Node.JS Project Information

## [GitHub Action][github-actions-url] written in [TypeScript][typescript-url]

### Provide package.json - [GitHub Action](https://github.com/features/actions)

This action provides the _name_, _version_ and the content of **package.json**, so your workflow can access it.

[![License][license-image]][license-url]
[![Issues][issues-image]][issues-url]

[![Code maintainability][code-maintainability-image]][code-maintainability-url]
[![Code issues][code-issues-image]][code-issues-url]
[![Code Technical Debt][code-tech-debt-image]][code-tech-debt-url]

[![Main Language][language-image]][code-metric-url]
[![Languages][languages-image]][code-metric-url]
[![Code Size][code-size-image]][code-metric-url]
[![Repository Size][repo-size-image]][code-metric-url]

## Features

- [TypeScript][typescript-url]
- [Jest][jest-url] Unit Tests with Code Coverage
- GitHub CI Integration (feature, development, master, release)
- Code Quality via [Code Climate](./docs/codeclimate.md)

<!-- lint disable maximum-line-length -->
| GitHub                                                           | Coveralls                                                                  |                                                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [![Release Build][release-build-image]][release-url]             |                                                                            | [![Release Version][release-image]][release-url]                             |
| [![Master Build][master-build-image]][master-url]                | [![Master Coverage][master-coveralls-image]][master-coveralls-url]         | [![Master Version][master-version-image]][master-version-url]                |
| [![Development Build][development-build-image]][development-url] | [![Test Coverage][development-coveralls-image]][development-coveralls-url] | [![Development Version][development-version-image]][development-version-url] |
<!-- lint enable maximum-line-length -->
## Usage

```YML
    ...
    - name: nodejs project information
      id: projectinfo
      uses: gregoranders/nodejs-project-info@v0.0.19
    - name: create release action
      id: createrelease
      uses: gregoranders/nodejs-create-release@v0.0.19
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        PACKAGE_JSON: ${{ steps.projectinfo.outputs.context }}
      with:
        tag: v${{ steps.projectinfo.outputs.version }}
        name: ${{ steps.projectinfo.outputs.name }} - ${{ steps.projectinfo.outputs.version }} Release
        target: ${{ github.ref }}
    ...
```

### Inputs/Outputs

```YML
inputs:
  path:
    description: 'Path to package.json'
    required: false
    default: './package.json'
outputs:
  context:
    description: 'Serialized package.json'
  name:
    description: 'Project Name'
  version:
    description: 'Project Version'
```

[release-url]: https://github.com/gregoranders/nodejs-project-info/releases
[master-url]: https://github.com/gregoranders/nodejs-project-info/tree/master
[development-url]: https://github.com/gregoranders/nodejs-project-info/tree/development
[code-metric-url]: https://github.com/gregoranders/nodejs-project-info/search?l=TypeScript
[license-url]: https://github.com/gregoranders/nodejs-project-info/blob/master/LICENSE
[license-image]: https://img.shields.io/github/license/gregoranders/nodejs-project-info.svg
[master-version-url]: https://github.com/gregoranders/nodejs-project-info/blob/master/package.json
[master-version-image]: https://img.shields.io/github/package-json/v/gregoranders/nodejs-project-info/master
[development-version-url]: https://github.com/gregoranders/nodejs-project-info/blob/development/package.json
[development-version-image]: https://img.shields.io/github/package-json/v/gregoranders/nodejs-project-info/development
[issues-url]: https://github.com/gregoranders/nodejs-project-info/issues
[issues-image]: https://img.shields.io/github/issues-raw/gregoranders/nodejs-project-info.svg
[release-image]: https://img.shields.io/github/release/gregoranders/nodejs-project-info
[release-build-image]: https://github.com/gregoranders/nodejs-project-info/workflows/Release%20CI/badge.svg
[master-build-image]: https://github.com/gregoranders/nodejs-project-info/workflows/Master%20CI/badge.svg
[development-build-image]: https://github.com/gregoranders/nodejs-project-info/workflows/Development%20CI/badge.svg
[master-coveralls-url]: https://coveralls.io/github/gregoranders/nodejs-project-info?branch=master
[master-coveralls-image]: https://img.shields.io/coveralls/github/gregoranders/nodejs-project-info/master
[development-coveralls-image]: https://img.shields.io/coveralls/github/gregoranders/nodejs-project-info/development
[development-coveralls-url]: https://coveralls.io/github/gregoranders/nodejs-project-info?branch=development
[code-maintainability-url]: https://codeclimate.com/github/gregoranders/nodejs-project-info/maintainability
[code-maintainability-image]: https://img.shields.io/codeclimate/maintainability/gregoranders/nodejs-project-info
[code-issues-url]: https://codeclimate.com/github/gregoranders/nodejs-project-info/maintainability
[code-issues-image]: https://img.shields.io/codeclimate/issues/gregoranders/nodejs-project-info
[code-tech-debt-url]: https://codeclimate.com/github/gregoranders/nodejs-project-info/maintainability
[code-tech-debt-image]: https://img.shields.io/codeclimate/tech-debt/gregoranders/nodejs-project-info
[language-image]: https://img.shields.io/github/languages/top/gregoranders/nodejs-project-info
[languages-image]: https://img.shields.io/github/languages/count/gregoranders/nodejs-project-info
[code-size-image]: https://img.shields.io/github/languages/code-size/gregoranders/nodejs-project-info
[repo-size-image]: https://img.shields.io/github/repo-size/gregoranders/nodejs-project-info
[typescript-url]: http://www.typescriptlang.org/
[jest-url]: https://jestjs.io/
[github-actions-url]: https://github.com/features/actions
