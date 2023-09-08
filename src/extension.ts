// src/extension.ts
import * as vscode from 'vscode';

/**
 * Interface defining the comment syntax for different programming languages.
 */
interface CommentSyntax {
    single: string;
    multiStart: string;
    multiEnd: string;
}

// Mapping of programming languages to their respective comment syntax.
const languageCommentMapping: { [key: string]: CommentSyntax } = {
    "javascript": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "python": { "single": "#", "multiStart": "'''", "multiEnd": "'''" },
    "java": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "c": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "cpp": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "csharp": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "go": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "rust": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "ruby": { "single": "#", "multiStart": "=begin", "multiEnd": "=end" },
    "php": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "vbnet": { "single": "'", "multiStart": "", "multiEnd": "" },
    "kotlin": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "swift": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "typescript": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "r": { "single": "#", "multiStart": "", "multiEnd": "" },
    "perl": { "single": "#", "multiStart": "=pod", "multiEnd": "=cut" },
    "erlang": { "single": "%", "multiStart": "", "multiEnd": "" },
    "elixir": { "single": "#", "multiStart": "", "multiEnd": "" },
    "haskell": { "single": "--", "multiStart": "{-", "multiEnd": "-}" },
    "scala": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "lua": { "single": "--", "multiStart": "--[[", "multiEnd": "]]" },
    "bash": { "single": "#", "multiStart": ": <<'END'", "multiEnd": "END" },
    "assembly": { "single": ";", "multiStart": "", "multiEnd": "" },
    "matlab": { "single": "%", "multiStart": "%{", "multiEnd": "%}" },
    "fortran": { "single": "!", "multiStart": "", "multiEnd": "" },
    "groovy": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "pascal": { "single": "//", "multiStart": "{", "multiEnd": "}" },
    "prolog": { "single": "%", "multiStart": "/*", "multiEnd": "*/" },
    "shell": { "single": "#", "multiStart": "", "multiEnd": "" },
    "html": { "single": "<!--", "multiStart": "<!--", "multiEnd": "-->" },
    "css": { "single": "/*", "multiStart": "/*", "multiEnd": "*/" },
    "xml": { "single": "<!--", "multiStart": "<!--", "multiEnd": "-->" },
    "yaml": { "single": "#", "multiStart": "", "multiEnd": "" },
    "lisp": { "single": ";", "multiStart": "", "multiEnd": "" },
    "fsharp": { "single": "//", "multiStart": "(*", "multiEnd": "*)" },
    "clojure": { "single": ";", "multiStart": "", "multiEnd": "" },
    "dart": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "coffeescript": { "single": "#", "multiStart": "###", "multiEnd": "###" },
    "graphql": { "single": "#", "multiStart": "", "multiEnd": "" },
    "markdown": { "single": "<!--", "multiStart": "<!--", "multiEnd": "-->" },
    "objectivec": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "objectivecpp": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "powershell": { "single": "#", "multiStart": "<#", "multiEnd": "#>" },
    "pug": { "single": "//-", "multiStart": "", "multiEnd": "" },
    "rmarkdown": { "single": "<!--", "multiStart": "<!--", "multiEnd": "-->" },
    "sass": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "scss": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "sql": { "single": "--", "multiStart": "/*", "multiEnd": "*/" },
    "stylus": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "tex": { "single": "%", "multiStart": "", "multiEnd": "" },
    "toml": { "single": "#", "multiStart": "", "multiEnd": "" },
    "vue": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "xaml": { "single": "<!--", "multiStart": "<!--", "multiEnd": "-->" },
    "zig": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "apex": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "azurescript": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "batchfile": { "single": "REM", "multiStart": "", "multiEnd": "" },
    "dockerfile": { "single": "#", "multiStart": "", "multiEnd": "" },
    "graphqls": { "single": "#", "multiStart": "", "multiEnd": "" },
    "handlebars": { "single": "{{!--", "multiStart": "{{!--", "multiEnd": "--}}" },
    "ini": { "single": ";", "multiStart": "", "multiEnd": "" },
    "latex": { "single": "%", "multiStart": "", "multiEnd": "" },
    "makefile": { "single": "#", "multiStart": "", "multiEnd": "" },
    "nginx": { "single": "#", "multiStart": "", "multiEnd": "" },
    "properties": { "single": "#", "multiStart": "", "multiEnd": "" },
    "twig": { "single": "{#", "multiStart": "{#", "multiEnd": "#}" },
    "typescriptreact": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "verilog": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
    "vhdl": { "single": "--", "multiStart": "", "multiEnd": "" },
    "visualforce": { "single": "<!--", "multiStart": "<!--", "multiEnd": "-->" },
    "wolfram": { "single": "(*", "multiStart": "(*", "multiEnd": "*)" },
    "xsl": { "single": "<!--", "multiStart": "<!--", "multiEnd": "-->" },
    "yamlpipeline": { "single": "#", "multiStart": "", "multiEnd": "" },
	"abap": { "single": "*", "multiStart": "“", "multiEnd": "”" },
	"cobol": { "single": "*>", "multiStart": "", "multiEnd": "" },
	"delphi": { "single": "//", "multiStart": "{", "multiEnd": "}" },
	"julia": { "single": "#", "multiStart": "#=", "multiEnd": "=#" },
	"ocaml": { "single": "(*", "multiStart": "(*", "multiEnd": "*)" },
	"racket": { "single": ";", "multiStart": "#|", "multiEnd": "|#" },
	"scheme": { "single": ";", "multiStart": "#|", "multiEnd": "|#" },
	"spss": { "single": "*.", "multiStart": "/*", "multiEnd": "*/" },
	"vbscript": { "single": "'", "multiStart": "", "multiEnd": "" },
	"jcl": { "single": "//*", "multiStart": "", "multiEnd": "" },
	"plsql": { "single": "--", "multiStart": "/*", "multiEnd": "*/" },
	"algol": { "single": "COMMENT", "multiStart": "", "multiEnd": ";" },
	"applescript": { "single": "--", "multiStart": "(*", "multiEnd": "*)" },
	"awk": { "single": "#", "multiStart": "", "multiEnd": "" },
	"glsl": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
	"jsonc": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
	"less": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
	"logos": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
	"postscript": { "single": "%", "multiStart": "", "multiEnd": "" },
	"restructuredtext": { "single": "..", "multiStart": "", "multiEnd": "" },
	"sas": { "single": "*", "multiStart": "/*", "multiEnd": "*/" },
	"sml": { "single": "", "multiStart": "(*", "multiEnd": "*)" },
	"solidity": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
	"systemverilog": { "single": "//", "multiStart": "/*", "multiEnd": "*/" },
	"terraform": { "single": "#", "multiStart": "/*", "multiEnd": "*/" },
	"vala": { "single": "//", "multiStart": "/*", "multiEnd": "*/" }
};

/**
 * Adds a header comment to the provided document based on its language.
 * @param {vscode.TextDocument} document - The VS Code document to which the header should be added.
 */
function addHeaderToDocument(document: vscode.TextDocument) {
    const langId = document.languageId;
    const commentSyntax = languageCommentMapping[langId];
    if (!commentSyntax) {
        return;
    }

    const config = vscode.workspace.getConfiguration('auto-header-est2023');

    const autoGenerateFilePath = config.get<boolean>('autoGenerateFilePath');
    let filePathComment = '';
    if (autoGenerateFilePath) {
        const filePath = document.fileName;
        const relativePath = vscode.workspace.asRelativePath(filePath);
        filePathComment = `${commentSyntax.single} ${relativePath}\n`;
    }

    const author = config.get<string>('author') || 'Unknown Author';
    let date = config.get<string>('date');
    if (!date || date === '{timestamp}') {
        date = new Date().toLocaleDateString();
    } else {
        date = date;
    }
    
    const company = config.get<string>('company') || 'Unknown Company';

    let line1 = config.get<string>('line1') || '';
    let line2 = config.get<string>('line2') || '';
    let line3 = config.get<string>('line3') || '';

    const commentType = config.get<string>('commentType') || 'multiline';

    const formatLine = (line: string) => {
        return line.replace('{author}', author ?? '')
                   .replace('{date}', date ?? '')
                   .replace('{company}', company ?? '');
    };

    line1 = formatLine(line1);
    line2 = formatLine(line2);
    line3 = formatLine(line3);

    let headerLines: string[] = [];
    if (line1) {
        headerLines.push(line1);
    }
    if (line2) {
        headerLines.push(line2);
    }
    if (line3) {
        headerLines.push(line3);
    }

    let headerComment: string;
    if (commentType === 'singleline') {
        headerComment = filePathComment + headerLines.map(line => `${commentSyntax.single} ${line}`).join('\n');
    } else {
        headerLines = headerLines.map(line => `* ${line}`);
        headerComment = filePathComment + `${commentSyntax.multiStart}\n${headerLines.join('\n')}\n${commentSyntax.multiEnd}`;
    }

    const editor = vscode.window.activeTextEditor;
    if (editor) {
        editor.edit((editBuilder) => {
            const startPosition = new vscode.Position(0, 0);
            const endPosition = new vscode.Position(0, 0);
            editBuilder.replace(new vscode.Range(startPosition, endPosition), headerComment);
        });
    }
}


function isSupportedLanguage(langId: string): boolean {
    return !!languageCommentMapping[langId];
}

export function activate(context: vscode.ExtensionContext) {
    console.log('Your extension "Auto Header EST.2023" is now active!');

    let disposable = vscode.commands.registerCommand('auto-header-est2023.addHeader', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            addHeaderToDocument(editor.document);
        }
    });

    const watcher = vscode.workspace.createFileSystemWatcher('**/*.*');
    watcher.onDidCreate(async (e) => {
        const config = vscode.workspace.getConfiguration('auto-header-est2023');
        const autoHeader = config.get<boolean>('autoHeader');
        
        if (autoHeader) {
            const doc = await vscode.workspace.openTextDocument(e.fsPath);
            if (doc.getText() === '' && isSupportedLanguage(doc.languageId)) {
                const editor = await vscode.window.showTextDocument(doc, { preview: false });
                addHeaderToDocument(doc);
            }
        }
    });

    context.subscriptions.push(disposable, watcher);
}

export function deactivate() {}
