import React from "react";
import Chapter from "../Chapter";
import Latex from "react-latex-next";

function KernelMethod() {
    return (
        <Chapter title="Kernel Method" depth={2}>
            <p>
                Before, we were discussing that we can create new features to make our data linearly (more) separable by
                raising existing features to some power or combining them. To do this, we define a mapping function <Latex>$\Phi$</Latex> to
                transform our data to a higher dimensional space. We use this function to preprocess our existing data
                as well as use it on new input data when making predictions. The downside to this function <Latex>$\Phi$</Latex> is
                that it can be computationally very expensive.
            </p>
            <p>
                To avoid complex calculations we use the kernel trick. The basic idea is to use simpler math (with fewer
                operations) and arrive at the same solution. This way we stay the dimensionality of the space we are
                moving doesn't change. This trick can only be used when all feature vectors only
                appear as part of the dot product with another feature vector. We are looking for a kernel <Latex>$K$</Latex> such
                that:
            </p>
            <Latex>
                {
                    "$$K(x^{(i)},x^{(j)})=\\Phi(x^{(i)})\\cdot\\Phi(x^{(j)})$$"
                }
            </Latex>
            <p>
                Here are some popular kernels:
            </p>
            <ol>
                <li>Linear Kernel: <Latex>$K(x,z)=x\cdot z$</Latex></li>
                <li>Polynomial Kernel: <Latex>$K(x,z)=(1+x\cdot z)^d$</Latex></li>
                <li>Radial Basis Function (RBF) / Gaussian Kernel: <Latex>{"$K(x, z) = e^{\\left(-\\frac{\\|x-z\\|^2}{2\\sigma^2}\\right)}$"}</Latex></li>
            </ol>
        </Chapter>
    )
}

export default KernelMethod;