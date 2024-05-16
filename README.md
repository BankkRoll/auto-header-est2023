<div align="center">
<h1 align="center">
<img src="https://github.com/BankkRoll/auto-header-est2023/assets/106103625/d5ccd12d-336f-4574-a2a6-2c012ddeea9c" />
<br>auto-header-est2023
</h1>
<h3>◦ Enhance your coding experience in Visual Studio Code with the "Header Naming" extension. Seamlessly name your files with custom headers tailored to your preferences. Choose between concise single-line comments or comprehensive multi-line block comments. Use the built-in command, opt for the auto-tagging feature, or simply enable auto-tag, and we'll discern the language and automatically insert appropriate headers for every new file you create.</h3>
</div>

<h4>Our extension boasts compatibility with an extensive array of programming languages, including but not limited to:</h4>
<ul>
    <li>JavaScript</li>
    <li>Python</li>
    <li>Java</li>
    <li>C/C++/C#</li>
    <li>Ruby</li>
    <li>PHP</li>
    <li>... and dozens more!</li>
</ul>

<p>For a comprehensive list of supported languages and their respective comment syntax, delve into the <a href="src/extension.ts">source code</a>.</p>

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
| **Auto Header Insertion (Beta)** | Automatically inserts headers into new files of supported languages. |
| **File Path Comment** | Automatically generates and inserts the file's relative path as a comment. |
| **Custom Comment Syntax** | Define custom comment syntax for specific languages that may not be covered by default. |
| **Customization** | Personalize your headers with dynamic placeholders such as:<br> - `{author}`: Designate the file's author.<br> - `{date}`: Timestamp your work with the creation or last modified date.<br> - `{company}`: Attribute the work to a particular organization or entity.<br> - `{license}`: Specify the license type.<br> - `{githubLink}`: Include a link to your GitHub repository.<br> - `{filePath}`: Include the file's relative path.<br> - `{line1}`: Custom header line 1.<br> - `{line2}`: Custom header line 2.<br> - `{line3}`: Custom header line 3. |
| **Header Layout** | Customize the order and layout of the header sections. |
| **Ignored Paths** | Specify file paths or directories to ignore when adding headers. |

---

## 📦 Installation

1. Launch Visual Studio Code.
2. Navigate to Extensions or press `Ctrl+Shift+X`.
3. In the search bar, type "Auto Header EST.2023" and select the corresponding result to install.

---

## 🚀 Usage

### Auto-Tagging Configuration

1. **Enable Auto Header:**
   - Navigate to your VS Code settings.
   - Enable `auto-header-est2023.autoHeader` to automatically append headers to new files of supported languages.
   - Enable `auto-header-est2023.autoGenerateFilePath` to automatically generate and insert the relative path of the file.

2. **Customize Your Header:**
   - Configure the following settings in your VS Code settings:
     - `auto-header-est2023.author`: Set the author's name.
     - `auto-header-est2023.date`: Set the date format (use `{timestamp}` for the current date).
     - `auto-header-est2023.company`: Set the company's name.
     - `auto-header-est2023.license`: Choose the license type from predefined options (e.g., MIT, GPL-3.0).
     - `auto-header-est2023.githubLink`: Set the GitHub repository link.
     - `auto-header-est2023.line1`, `auto-header-est2023.line2`, `auto-header-est2023.line3`: Customize additional header lines.

3. **Comment Style:**
   - Set the preferred comment style:
     - `auto-header-est2023.commentType`: Choose between `singleline` and `multiline`.

4. **Custom Comment Syntax:**
   - Define custom comment syntax for specific languages:
     - `auto-header-est2023.customCommentSyntax`: Example: `{"mylang": {"single": "##", "multiStart": "/**", "multiEnd": "**/"}}`.

5. **Ignored Paths:**
   - Specify file paths or directories to ignore when adding headers:
     - `auto-header-est2023.ignoredPaths`: Example: `[".next", "node_modules"]`.

6. **Custom Header Template:**
   - Use a custom header template:
     - `auto-header-est2023.customHeaderTemplate`: Example: `{single} {author}\n{single} {date}\n{single} {company}\n{single} {license}\n{single} {githubLink}\n{single} {line1}\n{single} {line2}\n{single} {line3}\n`.

7. **Header Layout:**
   - Customize the order and layout of the header sections:
     - `auto-header-est2023.headerLayout`: Example: `["author", "date", "company", "license", "githubLink"]`.

### Quick Header Generation

- Use the `Ctrl+Shift+SpaceBar` shortcut for immediate header generation.

### Command Palette

- Activate the command palette with `Ctrl+Shift+P`.
- Search for and select "Add Header".

---

## 🔧 Configuration Options

Here are all the available settings you can configure for the Auto Header EST.2023 extension:

| Setting | Type | Default | Description |
| ------- | ---- | ------- | ----------- |
| `auto-header-est2023.enabled` | boolean | `true` | Enable or disable the Auto Header extension. |
| `auto-header-est2023.autoHeader` | boolean | `false` | Automatically insert headers into new files of supported languages. |
| `auto-header-est2023.autoGenerateFilePath` | boolean | `false` | Automatically generate and insert the file's relative path as a comment. |
| `auto-header-est2023.commentType` | string | `multiline` | Preferred comment style (`singleline` or `multiline`). |
| `auto-header-est2023.author` | string | `""` | Author's name. Replaces the `{author}` placeholder. |
| `auto-header-est2023.company` | string | `""` | Company's name. Replaces the `{company}` placeholder. |
| `auto-header-est2023.date` | string | `{timestamp}` | Set to `timestamp` for the current date. Replaces the `{date}` placeholder. |
| `auto-header-est2023.line1` | string | `Author: {author}` | First header line. Placeholders: `{author}`, `{date}`, `{company}`. Leave blank to skip. |
| `auto-header-est2023.line2` | string | `Created: {date}` | Second header line. Placeholders: `{author}`, `{date}`, `{company}`. Leave blank to skip. |
| `auto-header-est2023.line3` | string | `(c) Copyright by {company}` | Third header line. Placeholders: `{author}`, `{date}`, `{company}`. Leave blank to skip. |
| `auto-header-est2023.customCommentSyntax` | object | `{}` | Custom comment syntax for specific languages. Example: `{"mylang": {"single": "##", "multiStart": "/**", "multiEnd": "**/"}}`. |
| `auto-header-est2023.ignoredPaths` | array | `[".next", "node_modules"]` | List of file paths or directories to ignore when adding headers. Example: `[".next", "node_modules"]`. |
| `auto-header-est2023.license` | string | `MIT` | Select the license for the file. Options: `MIT`, `GPL-3.0`, `Apache-2.0`, `BSD-2-Clause`, `BSD-3-Clause`, `ISC`, `MPL-2.0`, `LGPL-3.0`, `Unlicense`, `EPL-2.0`. |
| `auto-header-est2023.githubLink` | string | `""` | GitHub repository link. |
| `auto-header-est2023.customHeaderTemplate` | string | `{single} {author}\n{single} {date}\n{single} {company}\n{single} {license}\n{single} {githubLink}\n{single} {line1}\n{single} {line2}\n{single} {line3}\n` | Template for the custom header. Use placeholders: `{single}`, `{multiStart}`, `{multiEnd}`, `{author}`, `{date}`, `{company}`, `{license}`, `{githubLink}`, `{line1}`, `{line2}`, `{line3}`. |
| `auto-header-est2023.headerLayout` | array | `["author", "date", "company", "license", "githubLink"]` | Customize the order and layout of the header sections. Example: `["author", "date", "company", "license", "githubLink"]`. |

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
