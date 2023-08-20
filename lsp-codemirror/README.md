## ✨ lsp-codemirror

LSP client for CodeMirror, intends to be a more updated and better version of the original 
client --> https://github.com/wylieconlon/lsp-editor-adapter (thanks to Wylie :D )

## Differences
- Autocompletion improvements
- Built-in icons
- Support for custom autocompletion dropmenus

## Usage 
```javascript
import CodeMirror from 'codemirror';
import { LspWsConnection, CodeMirrorAdapter } from 'lsp-codemirror';

const editor = CodeMirror(document.body,{})

const javascriptConnection = new LspWsConnection({
	serverUri: 'ws://localhost:2089/javascript',
	mode: 'javascript',
	rootUri: `file:///users/superman`,
	documentUri: `file:///users/superman/index.js`,
	documentText: () => editor.getValue(),
}).connect(new WebSocket('ws://localhost:2089/javascript'));

const javascriptAdapter = new CodeMirrorAdapter(javascriptConnection, {
	quickSuggestionsDelay: 25,
}, editor);
```

All options for CodeMirrorAdapter in src/types.ts