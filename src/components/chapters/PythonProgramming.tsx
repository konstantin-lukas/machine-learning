import React from "react";
import Chapter from "../Chapter";
import Code from "../Code";

function PythonProgramming() {
    return (
        <Chapter title="Python Programming">
            <Code>
                {
                    "def test():\n" +
                    "   x = 2"
                }
            </Code>
        </Chapter>
    )
}

export default PythonProgramming;