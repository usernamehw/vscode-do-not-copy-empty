'use strict';
import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerTextEditorCommand('extension.doNotCopyEmpty', (editor) => {
		if (editor.selections.length === 1) {
			const activeLine = editor.document.lineAt(editor.selections[0].active);
			if (activeLine.isEmptyOrWhitespace) return;
		}
		vscode.commands.executeCommand('editor.action.clipboardCopyAction');
	});
	context.subscriptions.push(disposable);
}
export function deactivate() { }
