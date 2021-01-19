const core = require("@actions/core");
const { context: github } = require("@actions/github");
const action = require("./src/action");

async function run() {
  try {
    const token = core.getInput("INPUT_GITHUB_TOKEN");
    const { owner, repo } = github.repo;

    await action.run(token, owner, repo);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
