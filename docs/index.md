# Code Climate on localhost

[Home](../README.md)

## Docker image sizes

```sh
codeclimate/codeclimate              102MB
codeclimate/codeclimate-eslint       495MB
codeclimate/codeclimate-structure    5.63GB
codeclimate/codeclimate-duplication  5.63GB
codeclimate/codeclimate-editorconfig 74.1MB
codeclimate/codeclimate-fixme        58.8MB
codeclimate/codeclimate-git-legal    373MB
```

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
  --interactive --tty --rm \
  --env CODECLIMATE_CODE="${CODE_DIRECTORY}" \
  --volume "${CODE_DIRECTORY}":/code \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --volume /tmp/cc:/tmp/cc \
  codeclimate/codeclimate $@

# vim: tw=78 ft=sh ts=2 sw=2 sts=2 nu:
```

### CLI for code climate

```sh
docker run --interactive --tty --rm --env CODECLIMATE_CODE=\"./\" --volume \"./\":/code --volume /var/run/docker.sock:/var/run/docker.sock --volume /tmp/cc:/tmp/cc codeclimate/codeclimate analyze
```

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
