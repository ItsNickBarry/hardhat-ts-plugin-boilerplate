// If your plugin extends types from another plugin, you should import the plugin here.

// To extend one of Hardhat's types, you need to import the module where it has been defined, and redeclare it.
import "hardhat/types/config";
// import "hardhat/types/runtime";

// import { ExampleHardhatRuntimeEnvironmentField } from "./ExampleHardhatRuntimeEnvironmentField";

import type { ExamplePluginUserConfig, ExamplePluginConfig } from "./types.js";

declare module "hardhat/types/config" {
  // This is an example of an extension of the Hardhat config.

  // We extend the HardhatConfig type to include an object which represents our
  // plugin's configuration after it has been resolved.  This is the type used
  // during the execution of tasks, tests, and scripts.
  // This is part of the HardhatConfig type; normally, you don't want things to be
  // optional here, as you can apply default values using the `resolveUserConfig`
  // hook.
  export interface HardhatConfig {
    examplePlugin: ExamplePluginConfig;
  }

  // We extend the HardhatUserConfig type to allow the user to configure their
  // installation of our plugin.
  // Extensions to HardhatUserConfig are normally optional.
  export interface HardhatUserConfig {
    examplePlugin?: ExamplePluginUserConfig;
  }
}

// declare module "hardhat/types/runtime" {
//   // This is an example of an extension to the Hardhat Runtime Environment.
//   // This new field will be available in tasks' actions, scripts, and tests.
//   export interface HardhatRuntimeEnvironment {
//     example: ExampleHardhatRuntimeEnvironmentField;
//   }
// }
