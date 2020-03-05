# Yarn 2 Bug test

This is a repository to show a bug currently existing in Yarn 2

On Windows, you cannot run yarn commands from package.json in a workspace

Tested on:
* Windows 10 cmd
* Windows 10 PowerShell

```bash
yarn install # set up workspaces
yarn test-direct #works
yarn test-proxy #works
yarn test-ws-direct #works
yarn test-ws-proxy #does not work: "command not found: yarn"
```