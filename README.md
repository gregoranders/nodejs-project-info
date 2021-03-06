# NodeJS Project Information

## [GitHub Action](https://github.com/features/actions) written in [TypeScript](http://www.typescriptlang.org/)

### Provide package.json - [GitHub Action](https://github.com/features/actions)

This action provides the _name_ and _version_ and the content of **package.json**, so your workflow can access it.

[![Dependency Status][daviddm-image]][daviddm-url]
[![License][license-image]][license-url]
[![Issues][issues-image]][issues-url]

[![Codacy Badge][codacy-imge]][codacy-url][![Code maintainability][code-maintainability-image]][code-maintainability-url] [![Code issues][code-issues-image]][code-issues-url] [![Code Technical Debt][code-tech-debt-image]][code-tech-debt-url]

[![Main Language][language-image]][code-metric-url] [![Languages][languages-image]][code-metric-url] [![Code Size][code-size-image]][code-metric-url] [![Repo-Size][repo-size-image]][code-metric-url]

|                                                                  |                                                                            | [![Release][release-image]][release-url]                                     |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [![Master Build][master-build-image]][master-url]                | [![Master Coverage][master-coveralls-image]][master-coveralls-url]         | [![Master Version][master-version-image]][master-version-url]                |
| [![Development Build][development-build-image]][development-url] | [![Test Coverage][development-coveralls-image]][development-coveralls-url] | [![Development Version][development-version-image]][development-version-url] |

## Usage

```YML
    ...
    - name: nodejs project information
      id: projectinfo
      uses: gregoranders/nodejs-project-info@v0.0.12
    - name: create release action
      id: createrelease
      uses: gregoranders/nodejs-create-release@v0.0.12
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        PACKAGE_JSON: ${{ steps.projectinfo.outputs.context }}
      with:
        tag: v${{ steps.projectinfo.outputs.version }}
        name: ${{ steps.projectinfo.outputs.name }} - ${{ steps.projectinfo.outputs.version }} Release
        target: ${{ github.ref }}
    ...
```

#### Inputs/Outputs

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
[repository-url]: https://github.com/gregoranders/nodejs-project-info
[code-metric-url]: https://github.com/gregoranders/nodejs-project-info/search?l=TypeScript
[travis-url]: https://travis-ci.org/gregoranders/nodejs-project-info
[travis-image]: https://travis-ci.org/gregoranders/nodejs-project-info.svg?branch=master
[daviddm-url]: https://david-dm.org/gregoranders/nodejs-project-info
[daviddm-image]: https://david-dm.org/gregoranders/nodejs-project-info.svg?branch=master
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
[codacy-imge]: https://app.codacy.com/project/badge/Grade/ade2dc1495e942019cda4408f84ef8db
[codacy-url]: https://www.codacy.com/manual/gregoranders/nodejs-project-info
