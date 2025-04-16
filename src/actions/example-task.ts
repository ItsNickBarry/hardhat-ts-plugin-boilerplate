import { NewTaskActionFunction } from 'hardhat/types/tasks';

export interface ExampleTaskActionArguments {
  quiet: boolean;
}

const action: NewTaskActionFunction<ExampleTaskActionArguments> = async (
  args,
  hre,
) => {
    if (!args.quiet) {
        const config = hre.config.examplePlugin;

        console.log('Example Plugin Config:');
        console.log(config);
    }
};

export default action;
