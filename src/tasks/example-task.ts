import { task } from "hardhat/config";
import { TASK_EXAMPLE_TASK } from "../task-names.js";

// Tasks are defined using the task builder API.  The task definition must be registered in
// the HadhatPlugin object, and the task will then be callable from the HRE and the CLI.
// The task action may be declared inline for development purposes, but in production must be
// imported from a separate file for performance reasons.
export default task(TASK_EXAMPLE_TASK)
  .setDescription("Print the examplePlugin config")
  .setAction(import.meta.resolve("../actions/example-task.js"))
  .addFlag({
    name: "quiet",
    description: "Actually, don't print anything after all",
  })
  .build();
