import type {
  ConfigHooks,
  HardhatUserConfigValidationError,
} from "hardhat/types/hooks";

const DEFAULT_CONFIG = {
  value: "DEFAULT_VALUE",
};

export default async (): Promise<Partial<ConfigHooks>> => ({
  validateUserConfig: async (userConfig) => {
    const errors: HardhatUserConfigValidationError[] = [];

    // In this example, we return an error if the user set examplePlugin.value to an empty string.

    if (userConfig.examplePlugin?.value?.length === 0) {
      errors.push({
        path: ["examplePlugin", "value"],
        message: "config value must not be empty string",
      });
    }

    return errors;
  },

  resolveUserConfig: async (userConfig, resolveConfigurationVariable, next) => {
    // To use this hook, plugins are encouraged to call `next(config)` first, and
    // construct a resolved config based on its result. Note that while that
    // result is typed as `HardhatConfig`, it may actually be incomplete, as other
    // plugins may not have resolved their parts of the config yet.
    //
    // We apply our default config here. Any other kind of config resolution
    // or normalization should be placed here.
    //
    // The return value is the resolved config, which will be used during runtime.
    // `userConfig` is the config as provided by the user. You should not modify
    // it.
    //
    // If you extended the `HardhatConfig` type, you need to make sure that
    // executing this function ensures that the `config` object is in a valid
    // state for its type, including its extensions. For example, you may
    // need to apply a default value, like in this example.

    return {
      ...(await next(userConfig, resolveConfigurationVariable)),
      examplePlugin: {
        ...DEFAULT_CONFIG,
        ...userConfig.examplePlugin,
      },
    };
  },
});
