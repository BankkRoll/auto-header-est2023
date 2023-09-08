<div align="center">
<h1 align="center">
<br>auto-header-est2023
</h1>
<h3>◦ Easily name your files with custom header text, you have the freedom to choose between single-line or multi-line comment styles to suit your preference. Use the built-in command or the auto-tagging feature for effortless header generation or just use autotag we will figure out the langue and do it for you on each new file you make</h3>
</div>

---

<div align="center">
<img src="https://img.shields.io/badge/license-MIT-blue.svg?style" alt="License" /> <img src="https://img.shields.io/badge/JavaScript-JavaScript-F7DF1E?style&logo=JavaScript&logoColor=F7DF1E" alt="JavaScript" /> <img src="https://img.shields.io/badge/TypeScript-TypeScript-3178C6?style&logo=TypeScript&logoColor=3178C6" alt="TypeScript" /> <img src="https://img.shields.io/github/stars/BankkRoll/auto-header-est2023.svg?style=social" alt="GitHub Stars" /> <img src="https://img.shields.io/github/last-commit/BankkRoll/auto-header-est2023.svg?style" alt="GitHub Last Commit" /> <img src="https://img.shields.io/github/repo-size/BankkRoll/auto-header-est2023.svg?style" alt="GitHub Repo Size" /> </div>

</div>

---

## 🗂️ Table of Contents

- [Features](#️-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Scripts](#-scripts)
- [Configuration](#-configuration)
- [Directory Tree](#-directory-tree)
- [Language Usage](#-language-usage)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---



## ⚙️ Features

| Feature | Description |
| ------- | ----------- |
| **Multiple Language Support** | Supports over **100 programming languages** and counting! The extension automatically detects the language's comment syntax for precise header insertion. |
| **Auto Header Insertion (Beta)** | Allows for headers to be automatically inserted into new files of recognized languages. |
| **File Naming Feature** | Directly place headers in files or entire folders, ensuring a consistent and organized codebase. |
| **Extendable** | For those niche languages or specific use cases, easily define custom comment syntax that may not be covered by default. |
| **Customization** | Personalize your headers with dynamic placeholders such as: <br> - `{author}`: Designate the file's author. <br> - `{date}`: Timestamp your work with the creation or last modified date. <br> - `{company}`: Attribute the work to a particular organization or entity. |


---

## 📦 Installation

1. Launch Visual Studio Code.
2. Navigate to Extensions or press `Ctrl+Shift+X`.
3. In the search bar, type "Header Naming" and select the corresponding result to install.

---

## 🚀 Usage

To seamlessly insert headers into your code, follow the steps below:

1. **Auto-Tagging Configuration:**  
   - Navigate to your VSCode settings.
   - Enable `auto-header-est2023.autoHeader`.
   - This sets the extension to automatically append headers to new files of supported languages.

2. **Quick Header Generation:**  
   - Use the `Ctrl+Shift+SpaceBar` shortcut for immediate header generation.

3. **Command Palette:**  
   - Activate the command palette with `Ctrl+Shift+P`.
   - Search for and select "Add Header".

## 🛠️ Scripts

Here are some common scripts you can run:

#### vscode:prepublish

Prepares the extension for publishing.

You can run this script using npm or yarn:

```shell
npm run vscode:prepublish
```

Or with yarn:

```shell
yarn vscode:prepublish
```

#### compile

Uses webpack to compile the TypeScript source code.

You can run this script using npm or yarn:

```shell
npm run compile
```

Or with yarn:

```shell
yarn compile
```

#### watch

Uses webpack in watch mode to automatically recompile when files change.

You can run this script using npm or yarn:

```shell
npm run watch
```

Or with yarn:

```shell
yarn watch
```

#### package

Packages the extension in production mode.

You can run this script using npm or yarn:

```shell
npm run package
```

Or with yarn:

```shell
yarn package
```

---

## Configuration

Harness the full potential of "Auto Header EST.2023" by tailoring it to your preferences using the VSCode settings:

- `auto-header-est2023.autoHeader`: Enable this option to automatically insert headers into new files of supported languages.
  
- `auto-header-est2023.autoGenerateFilePath`: If enabled, the extension will automatically generate and insert the relative path of the file as a comment, providing a clearer context within larger projects.

- `auto-header-est2023.commentType`: Choose your preferred comment style. Options include:
  - "singleline": All header content is condensed into a single line.
  - "multiline": The header content spans across multiple lines.

- `auto-header-est2023.author`: Specify the author's name which replaces the `{author}` placeholder in the header.

- `auto-header-est2023.company`: Register your company's name, which will replace the `{company}` placeholder.

- `auto-header-est2023.date`: By default, set to `{timestamp}` which inputs the current timestamp. This replaces the `{date}` placeholder in the header. If you wish to have a custom date format, this can be defined here.

- `auto-header-est2023.line1`, `line2`, `line3`: Fine-tune each line of the header with dynamic placeholders. Available placeholders include `{author}`, `{date}`, and `{company}`. If you prefer to exclude any of these lines from the header, simply leave the corresponding setting blank.

- `auto-header-est2023.customCommentSyntax`: Define custom comment syntax for specific or niche languages that might not be covered by default. This allows you to extend the utility of the extension to virtually any language.

---

## 🌳 Directory Tree

```graphql
├── 📄 .eslintrc.json
├── 📦 .vscode/
    ├── 📄 extensions.json
    ├── 📄 launch.json
    ├── 📄 settings.json
    └── 📄 tasks.json
├── 📄 .vscodeignore
├── 📄 README.md
├── 📄 CHANGELOG.md
├── 📦 dist/
    ├── 📄 extension.js
    └── 📄 extension.js.map
├── 📄 package-lock.json
├── 📄 package.json
├── 📦 src/
    ├── 📄 extension.ts
    └── 📂 test/
        ├── 📄 runTest.ts
        └── 📂 suite/
            ├── 📄 extension.test.ts
            └── 📄 index.ts
├── 📄 tsconfig.json
├── 📄 vsc-extension-quickstart.md
└── 📄 webpack.config.js
```

---

## 💻 Language Usage

```
JSON: ██████ 52.42%
TypeScript: ██ 35%
Other: █ 11.58%
```

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request
6. Code review
7. Merge the changes
8. Update the documentation

---

## 📝 License

This project is licensed under [MIT](./LICENSE).

## 👤 Author

**[BankkRoll](https://github.com/BankkRoll)**

- Twitter: [@bankkroll_eth](https://twitter.com/bankkroll_eth)
- GitHub: [@BankkRoll](https://github.com/BankkRoll)


---

<p align="center"><i><font color="grey">This README.md has been generated with ❤️ using <a href="https://github.com/BankkRoll/quick-readme">quick-readme</a></font></i></p>
