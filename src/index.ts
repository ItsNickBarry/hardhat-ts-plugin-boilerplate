// This import is needed to let the TypeScript compiler know that it should include your type
// extensions in your npm package's types file.
import "./type-extensions";

import type { HardhatPlugin } from "hardhat/types/plugins";
import pkg from "../package.json";
import taskExampleTask from "./tasks/example-task.js";

// At minimum, a HardhatPlugin must contain an `id`.  Here we use the name specified in package.json.
// We also set the optional `npmPackage` value, which is used for dependency validation in case of error.
// Tasks, hook handlers, global options, and dependent plugins must be registered on the HardhatPlugin
// object in order to have effect.
const plugin: HardhatPlugin = {
  id: pkg.name,
  npmPackage: pkg.name,
  tasks: [taskExampleTask],
  hookHandlers: {
    config: import.meta.resolve("./hooks/config.js"),
  },
};

// The HardhatPlugin must be exported so that users can register it in their config.
export default plugin;
