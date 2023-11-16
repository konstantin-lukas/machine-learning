import React from 'react';
import Chapter from "../Chapter";
import Latex from "react-latex-next";
function MultivariateRegression() {
    return (
        <Chapter title={"Multivariate Regression"} depth={2}>
            <p>
                So far we've only used one feature but of course in real life we often have multiple. While using a
                single parameter we were trying to find <Latex>$h_w(x)=w_1x+w_0$</Latex>. This time we are looking
                for <Latex>$h_w(x)=w_1x_1+w_2x_2+\dots+w_nx_n+w_0$</Latex>. We can rewrite this function as the dot
                product of our feature and weight vectors.
            </p>
            <Latex>
                {
                    "$$h_w(x)=\\begin{pmatrix}w_0\\\\w_1\\\\w_2\\\\w_3\\\\\\vdots\\\\w_n\\end{pmatrix}" +
                    "\\cdot\\begin{pmatrix}1\\\\x_1\\\\x_2\\\\x_3\\\\\\vdots\\\\x_n\\end{pmatrix}$$"
                }
            </Latex>
            <Latex>
                {
                    "$$\\text{Just a quick reminder of what the dot product is: }a\\cdot b=\\sum_{i=1}^n a_ib_i$$"
                }
            </Latex>
            <p>
                We can actually use the same loss function as before. The only difference is in the dimensionality of
                the vectors. Calculating the errors works very much in the same way except that you have to accumulate
                the error of all dimensions per sample.
            </p>
            <ul style={{
                textAlign: "left"
            }}>
                <li><Latex>$n$</Latex>: amount of features</li>
                <li><Latex>$m$</Latex>: amount of samples</li>
                <li><Latex>{"$x^{(i)}\\in\\mathbb{R}^{n+1}$"}</Latex>: i-th sample / feature vector</li>
                <li><Latex>{"$y^{(i)}\\in\\mathbb{R}$"}</Latex>: value/label associated with i-th sample</li>
            </ul>
            <Latex>
                {
                    "$$L_w(x)=\\frac{1}{2m}\\sum^m_{i=1}\\left(\\underbrace{(w\\cdot x^{(i)})}_{\\sum_{j=0}^nw_jx_j^{(i)}}" +
                    "-y^{(i)}\\right)^2$$"
                }
            </Latex>
            <p>
                Just like before we can construct a design matrix and improve our loss function by using matrix operations.
            </p>
            <Latex>
                {
                    "$$X=\\begin{pmatrix}1 & x^{(1)}_1&\\dots & x^{(1)}_n\\\\ 1 & x^{(2)}_1&\\dots & x^{(2)}_n \\\\ \\vdots&\\vdots&\\ddots &\\vdots \\\\1 & x^{(m)}_1&\\dots & x^{(m)}_n \\end{pmatrix}," +
                    "y=\\begin{pmatrix}y^{(1)}\\\\ y^{(2)}\\\\ \\vdots \\\\ y^{(m)}\\\\ \\end{pmatrix}," +
                    "w=\\begin{pmatrix}w_0\\\\ w_1\\\\\\vdots\\\\w_n \\end{pmatrix}$$"
                }
            </Latex>
            <Latex>
                {"$$L(w)=\\frac{1}{2m}\\sum_{i=1}^m\\left((w\\cdot x^{(i)})-y^{(i)}\\right)^2=\\frac{1}{2m}\\|Xw-y\\|^2$$"}
            </Latex>
            <p>
                If you remember from before, we had formulas to calculate the weights. For multivariate linear regression the same
                things exists, it just looks a lot nice in notation and it gives us the entire weight vector.
            </p>
            <Latex>
                {
                    "$$w=(X^TX)^{-1}(X^Ty)$$"
                }
            </Latex>
            <p>
                The problem with this formula is that albeit short, it has a major flaw: we need to calculate an
                inverse matrix. From linear algebra we know that there are so called singular matrices which have
                no inverse. This can happen in our case when we have too many features. Many implementations calculate
                a pseudo-inverse matrix instead.
            </p>
        </Chapter>
    )
}

export default MultivariateRegression;