import { HardhatUserConfig } from "hardhat/types/config";

// We load the plugin here.  It must be registered in the `plugins` array of
// the HardhatUserConfig to have effect.
import HardhatExamplePlugin from "../../../src/index.js";
import HardhatNodeTestRunner from "@nomicfoundation/hardhat-node-test-runner";

const config: HardhatUserConfig = {
  plugins: [HardhatNodeTestRunner, HardhatExamplePlugin],
  examplePlugin: { value: "asdf" },
};

export default config;
