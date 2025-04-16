// Here we declare the typing of the resolved configuration object.
// Generally these values are required.
// Any values not specified in the HardhatUserConfig are added in the config hooks.
export type ExamplePluginConfig = {
  value: string;
};

// Here we declare the typing of the user configuration object.
// These are the values that the user can set in their `hardhat.config.ts`.
// Generally these should be declared as optional; a full config object is resolved in the config hooks.
export type ExamplePluginUserConfig = Partial<ExamplePluginConfig>;
