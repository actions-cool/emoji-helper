const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require('@octokit/rest');
// ***************************************************

const token = core.getInput('token');
const octokit = new Octokit({ auth: `token ${token}` });
const context = github.context;
const { owner, repo } = context.repo;

async function addIssueOrPR(type, emoji) {
  const number = type === 'PR' ? context.payload.pull_request.number : context.payload.issue.number;
  if (number) {
    await octokit.reactions.createForIssue({
      owner,
      repo,
      issue_number: number,
      content: emoji,
    });
    core.info(`[${type}: ${number}][Add-Emoji][${emoji}] success!`);
  } else {
    core.setFailed('Please check event that trigger workflow!');
  }
}

async function addRelease(emoji) {
  const { id: releaseId, tag_name: tagName } = context.payload.release;
  if (releaseId) {
    await octokit.reactions.createForRelease({
      owner,
      repo,
      release_id: releaseId,
      content: emoji,
    });
    core.info(`[Release: ${tagName}][Add-Emoji][${emoji}] success!`);
  } else {
    core.setFailed('Please check event that trigger workflow!');
  }
}

async function addComment(emoji) {
  const commentId = core.getInput('comment-id');
  if (commentId) {
    await octokit.reactions.createForIssueComment({
      owner,
      repo,
      comment_id: commentId,
      content: emoji,
    });
    core.info(`[Comment][Add-Emoji][${emoji}] success!`);
  } else {
    core.setFailed('Please input "comment-id"!');
  }
}

module.exports = {
  addIssueOrPR,
  addRelease,
  addComment,
};
