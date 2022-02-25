# Code Climate on localhost

[Home](../README.md)

## Docker images

| Image                                | Size   |
| :----------------------------------- | -----: |
| codeclimate/codeclimate              |  102MB |
| codeclimate/codeclimate-duplication  | 5.63GB |
| codeclimate/codeclimate-editorconfig | 74.1MB |
| codeclimate/codeclimate-eslint       |  1.4GB |
| codeclimate/codeclimate-fixme        | 58.8MB |
| codeclimate/codeclimate-git-legal    |  373MB |
| codeclimate/codeclimate-markdownlint |  392MB |
| codeclimate/codeclimate-structure    | 5.63GB |

### Initial docker images

```sh
#!/usr/bin/env sh

docker pull codeclimate/codeclimate-structure
docker pull codeclimate/codeclimate-duplication
docker pull codeclimate/codeclimate

# vim: tw=78 ft=sh ts=2 sw=2 sts=2 nu:
```

### Script for code climate

```sh
#!/usr/bin/env sh

CODE_DIRECTORY=$(pwd)

docker run \
  --interactive \
  --tty \
  --rm \
  --env CODECLIMATE_CODE="${CODE_DIRECTORY}" \
  --volume "${CODE_DIRECTORY}":/code \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --volume /tmp/cc:/tmp/cc \
  codeclimate/codeclimate $@

# vim: tw=78 ft=sh ts=2 sw=2 sts=2 nu:
```

### CLI for code climate

<!-- markdownlint-disable MD013 -->
```sh
docker run --interactive --tty --rm --env CODECLIMATE_CODE=\"./\" --volume \"./\":/code --volume /var/run/docker.sock:/var/run/docker.sock --volume /tmp/cc:/tmp/cc codeclimate/codeclimate analyze
```
<!-- markdownlint-enable MD013 -->

### Install engines

```sh
[script above] engines:install duplication structure eslint nodesecurity requiresafe
```

### Analyze code

```sh
[script above] analyze
```

or

```sh
npm run codeclimate
```
