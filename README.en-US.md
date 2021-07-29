# 🤪 Emoji Helper

[简体中文](./README.md) | English

![](https://img.shields.io/github/workflow/status/actions-cool/emoji-helper/CI?style=flat-square)
[![](https://img.shields.io/badge/marketplace-emoji--helper-blueviolet?style=flat-square)](https://github.com/marketplace/actions/emoji-helper)
[![](https://img.shields.io/github/v/release/actions-cool/emoji-helper?style=flat-square&color=orange)](https://github.com/actions-cool/emoji-helper/releases)

Adds emoji to issues, PRs, releases and comments

## 🚀 How to use?

```yml
name: Emoji Helper

on: release

jobs:
  emoji:
    runs-on: ubuntu-latest
    steps:
      - uses: actions-cool/emoji-helper@v1.0.0
        with:
          type: 'release'
          emoji: '+1, laugh, heart, hooray, rocket, eyes'
```

### Inputs

| Name | Description | Required |
| - | - | - |
| token | GitHub token. If not passed, a default token is used. | ✖ |
| type | Event type, one of: `issue`, `pr`, `release` or `comment`. | ✔ |
| emoji | Emoji to add ([see mapping](#emoji-mapping)). | ✔ |
| comment-id | The ID of the item to add the emoji to. | ✖ | 

- `comment-id`：一 Usually tricky to find, so consider [using the helper](https://github.com/actions-cool/issues-helper#find-comments).

## Emoji Mapping

| content | emoji |
| -- | -- |
| `+1` | 👍 |
| `-1` | 👎 |
| `laugh` | 😄 |
| `confused` | 😕 |
| `heart` | ❤️ |
| `hooray` | 🎉 |
| `rocket` | 🚀 |
| `eyes` | 👀 |

## ⚡ Feedback

Any feedback is much appreciated. If you find a bug or want to add a feature, you can so so in the following ways:

- [Creating an issue](https://github.com/actions-cool/emoji-helper/issues) to report a bug
- [Openign a Pull Request](https://github.com/actions-cool/emoji-helper/pulls) to improve the `emoji-helper` action

There's also a DingTalk exchange group (likely in Chinese). Scan below to join.

![](https://github.com/actions-cool/resources/blob/main/dingding.jpeg?raw=true)

## Changelog

The changelog is kept [in a separate file](./CHANGELOG.md)

## License

[MIT](./LICENSE)
