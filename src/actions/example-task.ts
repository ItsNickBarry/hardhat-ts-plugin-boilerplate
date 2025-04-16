import { NewTaskActionFunction } from "hardhat/types/tasks";
import { ExamplePluginConfig } from "../types.js";
import { printConfig } from "../lib/example-plugin.js";

export interface ExampleTaskActionArguments {
  quiet: boolean;
}

const action: NewTaskActionFunction<ExampleTaskActionArguments> = async (
  args,
  hre,
): Promise<ExamplePluginConfig> => {
  const config = hre.config.examplePlugin;

  if (!args.quiet) {
    // After retriving the config from the HRE and processing the task args,
    // we call the core plugin logic.
    printConfig(config);
  }

  return config;
};

export default action;
