[简体中文](README_zh-CN.md)

# DarkMan

DarkMan is a streamlined, ad-free fork of the popular open-source project [Dark Reader](https://github.com/darkreader/darkreader). 

## 🌟 Introduction

This project focuses on providing a pure, distraction-free Manifest V3 (MV3) experience. We have completely removed all advertisements, donation prompts, news push notifications, and redundant build targets. Currently, DarkMan exclusively supports Google Chrome and Mozilla Firefox.

## 🛠️ Build Instructions

To build DarkMan from the source code, you need [Node.js](https://nodejs.org/) installed on your system.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build for release:**
   ```bash
   npm run build --release
   ```

After a successful build, the compiled extension files can be found in the `build/release/chrome-mv3/` and `build/release/firefox-mv3/` directories. You can load these unpacked extensions directly into your browser for use.

## 🙏 Acknowledgements

This project is built upon the incredible work of the original Dark Reader team. We express our deepest gratitude to them.

- **Original Project:** [Dark Reader](https://github.com/darkreader/darkreader)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
