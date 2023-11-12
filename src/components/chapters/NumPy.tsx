import React from "react";
import Chapter from "../Chapter";
import Code from "../Code";

function NumPy() {
    return (
        <Chapter depth={2} title="NumPy">
            <p>
                The most basic building block in NumPy is the array. NumPy arrays are used to represent vectors and allow
                us to do basic vector operations like calculating the dot product or the norm of a vector. The code
                below shows some of the most basic features of arrays in NumPy.
            </p>
            <Code>
                {
                    "import numpy as np\n" +
                    "\n" +
                    "if __name__ == '__main__':\n" +
                    "    x = np.array([0, 2])\n" +
                    "    y = np.array([2, 0])\n" +
                    "\n" +
                    "    # Element wise operations\n" +
                    "    print(x - y)                  # [-2  2]\n" +
                    "    print(x * y)                  # [0 0]\n" +
                    "    print(x ** 3)                 # [0 8]\n" +
                    "\n" +
                    "    # Accumulation\n" +
                    "    print(np.sum(x))              # 2\n" +
                    "    print(x.mean())               # 1.0\n" +
                    "    print(x.max())                # 2\n" +
                    "    print(x.min())                # 0\n" +
                    "    print(np.linalg.norm(x))      # 2\n" +
                    "    print(np.linalg.norm(x + y))  # 2.8284271247461903\n" +
                    "\n" +
                    "    # Dot product\n" +
                    "    print(x @ x)                  # 4\n" +
                    "    print(x @ y)                  # 0"
                }
            </Code>
        </Chapter>
    )
}

export default NumPy;