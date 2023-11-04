import React from "react";
import "./Code.scss";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Code({children}: {children: string}) {
    return (
        <SyntaxHighlighter
            wrapLongLines={true}
            showLineNumbers={true}
            language="python"
            style={atomOneDark}
        >{children}</SyntaxHighlighter>
    );
}

export default Code;