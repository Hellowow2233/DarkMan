[English](README.md)

# DarkMan

DarkMan 是一个基于知名开源项目 [Dark Reader](https://github.com/darkreader/darkreader) 的精简无广告分支 (Fork)。

## 🌟 项目介绍

本项目专注于提供纯净的 Manifest V3 (MV3) 体验。彻底移除了原版中的所有广告、捐赠提示、新闻推送以及冗余的旧版构建目标。目前，DarkMan 仅保留并专门优化了对 Chrome 和 Firefox 的支持。

## 🛠️ 构建说明

如果你想从源码自行构建 DarkMan，请确保你的系统中已安装 [Node.js](https://nodejs.org/)。

1. **安装依赖:**
   ```bash
   npm install
   ```

2. **打包发布版:**
   ```bash
   npm run build --release
   ```

构建成功后，生成的插件文件将位于 `build/release/chrome-mv3/` 和 `build/release/firefox-mv3/` 目录中。你可以在浏览器的扩展管理页面加载这些已解压的程序包来使用。

## 🙏 致谢

本项目的诞生离不开原版 Dark Reader 团队的出色工作。在此向他们表示最诚挚的感谢。

- **原项目:** [Dark Reader](https://github.com/darkreader/darkreader)

## 📄 开源协议

本项目遵循 MIT 开源协议。详情请参阅 [LICENSE](LICENSE) 文件。
