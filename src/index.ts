import { extendEnvironment } from "hardhat/config";
import { lazyObject } from "hardhat/plugins";
import { HardhatConfig, HardhatUserConfig } from "hardhat/types";
import path from "path";

import { ExampleHardhatRuntimeEnvironmentField } from "./ExampleHardhatRuntimeEnvironmentField";
// This import is needed to let the TypeScript compiler know that it should include your type
// extensions in your npm package's types file.
import "./type-extensions";

extendEnvironment((hre) => {
  // We add a field to the Hardhat Runtime Environment here.
  // We use lazyObject to avoid initializing things until they are actually
  // needed.
  hre.example = lazyObject(() => new ExampleHardhatRuntimeEnvironmentField());
});

import type { HardhatPlugin } from "hardhat/types/plugins";
import pkg from "../package.json";

// At minimum, a HardhatPlugin must contain an `id`.
// Here we use the name specified in package.json, removing the NPM namespace if present.

const plugin: HardhatPlugin = {
  id: pkg.name.split("/").pop()!,
  hookHandlers: {
    config: import.meta.resolve("./hooks/config.js"),
  },
};

// The HardhatPlugin must be exported so that users can register it in their config.
export default plugin;
