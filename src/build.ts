import * as cp from 'child_process';
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function build() {
    const workspace = vscode.workspace.workspaceFolders;
    if (workspace){
        const workspacePath = workspace[0].uri.path.substring(1);
        const activateEditor = vscode.window.activeTextEditor;
        var filename = 'main.py';
        if (activateEditor) {
            filename = activateEditor.document.uri.fsPath;
        }
        var filePath = vscode.workspace.getConfiguration('python.build').get<string>('filename');
        if (filePath) {
            filename = path.join(workspacePath, filename);
        }
        const pythonPath = vscode.workspace.getConfiguration('python').get<string>('defaultInterpreterPath') || 'python';
        const vEnvPath = path.join(workspacePath, '.venv');
        const specPath = filename.replace('.py', '.spec');
        const oneFile = vscode.workspace.getConfiguration('python.build').get<boolean>('onefile');
        const window = vscode.workspace.getConfiguration('python.build').get<boolean>('window');
        var pyInstallerCommand = "";
        var attributes = " -y --noconfirm";
        if (fs.existsSync(vEnvPath)){
            pyInstallerCommand = `"${vEnvPath}\\Scripts\\python.exe" -m PyInstaller`;
        } else {
            pyInstallerCommand = `"${pythonPath}" -m PyInstaller`;
        }
        if (window) {
            attributes += ' --noconsole';
        } else {
            attributes += ' --console';
        }
        if (oneFile) {
            attributes += ' --onefile';
        } else {
            attributes += ' --onedir';
        }
        if (fs.existsSync(specPath)){
            pyInstallerCommand += ` -y "${specPath}"`;
        } else {
            pyInstallerCommand += `${attributes} "${filename}"`;
        }
        vscode.window.showInformationMessage(`Running: "${pyInstallerCommand}"`);
        try {
            var proc = cp.execSync(pyInstallerCommand, {cwd:workspacePath});
            vscode.window.showInformationMessage(`Process Finished without error: ${proc}`);
        } catch (error) {
            vscode.window.showInformationMessage(`Process Finished with error: ${error}`);
        }

    } else {
        vscode.window.showErrorMessage('No workspace found.');
    }
}