const core = require("@actions/core");
const github = require("@actions/github");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const githubToken = core.getInput("github_token");

    core.setOutput("result", githubToken);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();