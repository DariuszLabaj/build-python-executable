# VS Code Extension - Python Build

This is a simple extension for building Python code using PyInstaller within VS Code. The extension provides a command to build Python code from the active file in the editor or from a specified file path. The extension also allows users to choose whether to build a single executable file or a directory of files, and whether the application should open with or without a console.

## Installation

To install the extension, follow these steps:

1. Open VS Code.
2. Press **Ctrl + Shift + X** (Windows) or **Cmd + Shift + X** (Mac) to open the Extensions view.
3. Type "Python Build" in the search box and press Enter.
4. Click the Install button next to the Python Build extension.

## Usage

To use the extension, follow these steps:

1. Open a Python file in VS Code.
2. Press **Ctrl + Shift + P** (Windows) or **Cmd + Shift + P** (Mac) to open the Command Palette.
3. Type "Build Python Executable" in the search box and press Enter.
4. The extension will build the Python file and show the output in the Output panel.

By default, the extension will use the default Python interpreter on your system. If you have a virtual environment set up for your project, the extension will use that interpreter instead. To specify a different file path to build, set the **python.build.filename** configuration option in VS Code.

## Configuration

The following configuration options are available for this extension:

- **python.build.filename**: Specifies the file path to build. Defaults to the active file in the editor.
- **python.build.onefile**: Specifies whether to build a single executable file (**true**) or a directory of files (**false**). Defaults to **true**.
- **python.build.window**: Specifies whether the application should open without (**true**) or with (**false**) a console. Defaults to **false**.