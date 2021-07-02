const core = require('@actions/core');
const { dealStringToArr } = require('actions-util');
const { ALL_EMOJI } = require('./emoji');
const { addIssueOrPR, addRelease, addComment } = require('./public');

async function run() {
  try {
    const emojis = dealStringToArr(core.getInput('emoji'));
    if (emojis.length) {
      for await (let emoji of emojis) {
        if (ALL_EMOJI.includes(emoji)) {
          const type = core.getInput('type');
          switch (type) {
            case 'issue': {
              await addIssueOrPR('Issue', emoji);
              break;
            }
            case 'pr': {
              await addIssueOrPR('PR', emoji);
              break;
            }
            case 'release': {
              await addRelease(emoji);
              break;
            }
            case 'comment': {
              await addComment(emoji);
              break;
            }
            default: {
              core.setFailed('Please input right [type]!');
            }
          }
        } else {
          core.setFailed(`The [${emoji}] is not support!`);
          return false;
        }
      }
    } else {
      core.setFailed('Please input [type]!');
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
