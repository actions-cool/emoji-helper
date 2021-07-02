# 🤪 Emoji 助手

简体中文 | [English](./README.en-US.md)

![](https://img.shields.io/github/workflow/status/actions-cool/emoji-helper/CI?style=flat-square)
[![](https://img.shields.io/badge/marketplace-emoji--helper-blueviolet?style=flat-square)](https://github.com/marketplace/actions/emoji-helper)
[![](https://img.shields.io/github/v/release/actions-cool/emoji-helper?style=flat-square&color=orange)](https://github.com/actions-cool/emoji-helper/releases)

给 Issue、PR、Release、Comment 增加 Emoji

## 🚀 How to use?

```yml
name: Emoji Helper

on:
  release:
    types: [published]

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

| 名称 | 描述 | 必填 |
| -- | -- | -- |
| token | GitHub token。如果不传，即为默认 token。 | ✖ |
| type | 事件类型。可选：`issue` `pr` `release` `comment`。 | ✔ |
| emoji | 增加 [emoji](#emoji-类型)。 | ✔ |
| comment-id | 评论类型的 ID 。 | ✖ |

- `comment-id`：一般可能不太好找，[参照](https://github.com/actions-cool/issues-helper#find-comments)。

## Emoji 类型

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

## ⚡ 反馈

欢迎你来尝试使用，并提出意见，你可以通过以下方式：

- 通过 [Issue](https://github.com/actions-cool/emoji-helper/issues) 报告 bug 或进行咨询
- 提交 [Pull Request](https://github.com/actions-cool/emoji-helper/pulls) 改进 `emoji-helper` 的代码

也欢迎加入 钉钉交流群

![](https://github.com/actions-cool/resources/blob/main/dingding.jpeg?raw=true)

## 更新日志

[CHANGELOG](./CHANGELOG.md)

## LICENSE

[MIT](./LICENSE)
