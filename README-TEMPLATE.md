# hardhat-example-plugin

_A one line description of the plugin_

[Hardhat](https://hardhat.org) plugin example. 

## What

<_A longer, one paragraph, description of the plugin_>

This plugin will help you with world domination by implementing a simple tic-tac-toe in the terminal.

## Installation

<_A step-by-step guide on how to install the plugin_>

```bash
npm install <your npm package name> [list of peer dependencies]
```

Import the plugin in your `hardhat.config.ts` and register it in your `HardhatUserConfig`:

```typescript
import HardhatExamplePlugin from "<your plugin npm package name>";

const config: HardhatUserConfig = {
  plugins: [
    HardhatExamplePlugin,
  ],
};
```

## Required plugins

<_The list of all the required Hardhat plugins if there are any_>

- [@nomicfoundation/hardhat-ethers](https://github.com/NomicFoundation/hardhat/tree/main/packages/hardhat-ethers)

## Tasks

<_A description of each task added by this plugin. If it just overrides internal 
tasks, this may not be needed_>

This plugin creates no additional tasks.

<_or_>

This plugin adds the _example_ task to Hardhat:
```
output of `npx hardhat help example`
```

## Configuration

<_A description of each extension to the HardhatConfig or to its fields_>

This plugin extends the `HardhatUserConfig`'s `ProjectPathsUserConfig` object with an optional
`newPath` field.

This is an example of how to set it:

```typescript
const config: HardhatUserConfig = {
  examplePlugin: {
    value: 'asdf',
  },
  ...
};
```

## Usage

<_A description of how to use this plugin. How to use the tasks if there are any, etc._>

There are no additional steps you need to take for this plugin to work.

Install it and access ethers through the Hardhat Runtime Environment anywhere
you need it (tasks, scripts, tests, etc).
