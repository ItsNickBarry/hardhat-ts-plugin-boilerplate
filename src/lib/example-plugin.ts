import { ExamplePluginConfig } from "../types.js";

// The core plugin logic is defined here.  This is a simplistic example, but it is
// recommended to keep such logic separate from the Hardhat plugin components.
export const printConfig = (config: ExamplePluginConfig) => {
    console.log("Example Plugin Config:");
    console.log(config);
}