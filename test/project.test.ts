import { describe, it } from "node:test";
import assert from "node:assert";

import { createHardhatRuntimeEnvironment } from "hardhat/hre";
import { HardhatUserConfig } from "hardhat/config";

import HardhatExamplePlugin from "../src/index.js";
import { TASK_EXAMPLE_TASK } from "./task-names.js";

describe("config", () => {
  it("resolves default value", async () => {
    const config: HardhatUserConfig = { plugins: [HardhatExamplePlugin] };
    const hre = await createHardhatRuntimeEnvironment(config);

    assert.equal(hre.config.examplePlugin.value, "DEFAULT_VALUE");
  });

  it("resolves user-supplied value", async () => {
    const value = "asdf";
    const config: HardhatUserConfig = {
      plugins: [HardhatExamplePlugin],
      examplePlugin: { value },
    };
    const hre = await createHardhatRuntimeEnvironment(config);

    assert.equal(hre.config.examplePlugin.value, value);
  });

  it("throws on invalid user-supplied value", async () => {
    const config: HardhatUserConfig = {
      plugins: [HardhatExamplePlugin],
      examplePlugin: { value: "" },
    };

    assert.rejects(async () => {
      await createHardhatRuntimeEnvironment(config);
    });
  });
});

describe("example task", () => {
  it("returns resolved plugin config", async () => {
    const config: HardhatUserConfig = { plugins: [HardhatExamplePlugin] };
    const hre = await createHardhatRuntimeEnvironment(config);

    const result = await hre.tasks
      .getTask(TASK_EXAMPLE_TASK)
      .run({ quiet: true });

    assert.deepEqual(result, { value: "DEFAULT_VALUE" });
  });
});
