import { HardhatUserConfig } from "hardhat/types/config";

// We load the plugin here.  It must be registered in the `plugins` array of
// the HardhatUserConfig to have effect.
import HardhatExamplePlugin from "../../../src/index.js";

const config: HardhatUserConfig = {
  plugins: [HardhatExamplePlugin],
  examplePlugin: { value: "asdf" },
};

export default config;
