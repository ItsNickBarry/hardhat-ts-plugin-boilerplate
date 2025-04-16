import { NewTaskActionFunction } from "hardhat/types/tasks";
import { ExamplePluginConfig } from "../types.js";

export interface ExampleTaskActionArguments {
  quiet: boolean;
}

const action: NewTaskActionFunction<ExampleTaskActionArguments> = async (
  args,
  hre,
): Promise<ExamplePluginConfig> => {
  const config = hre.config.examplePlugin;

  if (!args.quiet) {
    console.log("Example Plugin Config:");
    console.log(config);
  }

  return config;
};

export default action;
