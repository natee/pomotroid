<div align="center">
  <img alt="Pomotroid" src="github/images/pomotroid-title.png" width="800px">
</div>
<div align="center">
  <img alt="Pomotroid in action" src="github/images/pomotroid-screens.png" width="800px">
</div>

<p align="center">简洁美观的番茄计时器。</p>

---


- [概述](#概述)
- [功能](#功能)
  - [主题](#主题)
  - [背景图](#背景图)
- [安装](#安装)
  - [下载](#下载)
- [开发](#开发)
  - [构建方法](#构建方法)
- [许可证](#许可证)

## 概述

一款简单且可配置的🍅番茄计时器。它的目的是提供一种视觉上令人愉悦和可靠的方式来跟踪使用番茄工作法。

## 功能

- 自定义时间和轮次（持久性）
- 迷人的定时器提示音（可选）
- 桌面通知（可选）
- 最小化到托盘（可选）
- 包含多个主题，并可创建自定义主题
- 给 APP 添加皮肤，支持自定义上传背景图
- 计时器活动记录

### 主题

🍅番茄计时器提供了许多主题。它也是可主题化的，允许你自定义它的外观。

![主题图片](./github/images/pomotroid_themes-preview--914x219.png)

在[主题文档](./docs/themes/themes.md)处查看所有官方主题和创建自定义主题的方法。

### 背景图

🍅番茄计时器默认提供了 3 张背景图片，你也可以上传自己喜欢的图片作为背景皮肤。

![背景图图片](./github/images/pomotroid_images-preview--914x219.png)


## 安装

### 下载

在 [发行](https://github.com/natee/pomotroid/releases) 页下载最新版本。

支持 Windows、Mac OSX 和 Linux。


## 开发

番茄计时器基于 [Pomotroid](https://github.com/Splode/pomotroid) 进行的二次开发。

_注意：根据您的操作系统设置，您可能会在安装时收到一个安全警告。这与番茄计时器是一个未签名的应用程序有关。你可以通过研究苹果和微软的代码签名来了解更多。_

### 构建方法

```bash
# install dependencies
npm i

# serve with hot reload at localhost:9080
npm run dev

# build Pomotroid for production
npm run build
```

## 许可证

MIT &copy; [natee](https://github.com/natee)
