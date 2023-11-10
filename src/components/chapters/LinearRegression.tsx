import React from 'react';
import Chapter from "../Chapter";
// @ts-ignore
import img1 from "../../media/LinearRegression.svg";
// @ts-ignore
import img2 from "../../media/3DFunction.png";
import Image from "../Image";
import Latex from "react-latex-next";
function LinearRegression() {
    return (
        <Chapter title={"Linear Regression"} depth={1}>
            <p>
                Linear regression is what we use when we want to predict a continuous value rather than a class. To do this
                we have to learn some type of function to predict values for certain inputs. To find this function we need
                to minimize the average distance of our training data from the function. Below you can find an illustration
                of this. There's different ways we can calculate the error of a point from the line. The below example
                shows the distance of each data point the value of the function at the same index. You could however also
                calculate the direct distance from the line.
            </p>
            <Image
                src={img1}
                alt="An image showing a linear function and the distance from each sample"
                author="Krishnavedala on Wikimedia"
                license="CC BY-SA 3.0 Deed"
                linkToLicense="https://creativecommons.org/licenses/by-sa/3.0/deed.en"
                addBG={true}
            />
            <p>
                Let's first look at how to find a linear function like in the above image. A linear function looks
                like this: <Latex>$h_w(x)=w_1x+w_0$</Latex>. We call <Latex>$w_0$ and $w_1$</Latex> the weights of our
                function. These are the coefficients we are trying to learn. The function from the image above would
                be <Latex>{"$h_w(x)=\\frac{4}{3}x+\\frac{11}{3}$"}</Latex>. To find out if this function is the best
                possible function we need another function <Latex>$L(w_1,w_0)$</Latex> which we will call "loss function"
                or "cost function".
                We need to accumulate the distance of all data points from the function. This gives us a basic idea of
                what the loss function should look like for a set of training data with <Latex>$m$</Latex> samples.
            </p>
            <Latex>
                {"$$L(w_1,w_0)=\\frac{1}{2m}\\sum_{i=1}^m\\left(h_w(x^{(i)})-y^{(i)}\\right)^2$$"}
            </Latex>
            <p>
                <Latex>{"$x^{(i)}$ and $y^{(i)}$"}</Latex> refer to the x and y coordinates of sample number i respectively.
                Note that we are squaring each individual error. This is to avoid negative errors meddling with the result.
                We also divide by the amount of samples because otherwise more samples would necessarily result in a
                higher loss. This type of loss function is called "mean squared error" and we can also write it like this:
            </p>
                <Latex>
                    {"$$L(w_1,w_0)=\\frac{1}{2m}\\sum_{i=1}^m\\left(w_1x^{(i)}+w_0-y^{(i)}\\right)^2$$"}
                </Latex>
            <p>
                We don't have to divide by two but it will make differentiation easier but why would we need to differentiate
                this function? Because we are trying to minimize it! Let's recall some linear algebra: if the first
                derivative of a function is zero at a point x, that means that the original function has a minimum or a
                maximum at position x. If we image our loss function as an upside-down parabola, we can assume a minimum.
                Because we have two weights to optimize, are looking for the the point where both partial derivatives
                approach 0. The below figures shows a plotted loss function with two parameters. We call this a "loss landscape".
            </p>
            <Image
                src={img2}
                alt="An image showing the loss landscape of a function with 2 arguments"
                author="MartinThoma on Wikimedia"
                license="CC BY-SA 3.0 Deed"
                linkToLicense="https://creativecommons.org/licenses/by-sa/3.0/deed.en"
                addBG={true}
            />
            <Latex>
                {
                    "$$\\frac{dL}{dw_0}=\\frac{1}{m}\\sum_{i=1}^m\\left((w_1x^{(i)}+w_0)-y^{(i)}\\right)\\cdot 1\\newline" +

                    "\\frac{dL}{dw_1}=\\frac{1}{m}\\sum_{i=1}^m\\left((w_1x^{(i)}+w_0)-y^{(i)}\\right)\\cdot x^{(i)}$$"
                }
            </Latex>
            <p>
                Our goal is to find <Latex>$w_0$ and $w_1$</Latex> so that <Latex>{"$\\frac{dL}{dw_0}=0$ and $\\frac{dL}{dw_1}=0$"}</Latex>.
                Let's not worry about how to do that in too much details though. We are trying to do machine learning, not linear algebra.
                By use of magic, we can proof the following holds true for <Latex>{"$\\frac{dL}{dw_0}=0$ and $\\frac{dL}{dw_1}=0$"}</Latex>.
            </p>
            <Latex>
                {
                    "$$w_0=\\overline{y}-w_1\\overline{x}\\hspace{3em} " +
                    "w_1=\\frac{\\sum_{i=1}^m(y^{(i)}-\\overline{y})(x^{(i)}-\\overline{x})}{\\sum_{i=1}^m(x^{(i)}-\\overline{x})^2}\\hspace{3em} " +
                    "\\overline{x}=\\frac{1}{m}\\sum_{i=1}^m x^{(i)}\\hspace{3em}" +
                    "\\overline{y}=\\frac{1}{m}\\sum_{i=1}^m y^{(i)}$$"
                }
            </Latex>
            <p>
                Let's go back to our initial example from the first image of this chapter. First we write down the
                coordinates of all samples and then calculate the weights.
            </p>
            <Latex>
                {
                    "$$\\text{Samples: }\\begin{pmatrix}1\\\\ 6 \\end{pmatrix}," +
                    "\\begin{pmatrix}2\\\\ 5 \\end{pmatrix}," +
                    "\\begin{pmatrix}3\\\\ 7 \\end{pmatrix}," +
                    "\\begin{pmatrix}4\\\\ 10 \\end{pmatrix}$$"
                }
            </Latex>
            <Latex>
                {
                    "$$\\overline{x}=\\frac{1+2+3+4}{4}=2.25\\hspace{3em}\\overline{y}=\\frac{6+5+7+10}{4}=7$$"
                }
            </Latex>
            <Latex>
                {
                    "$$w_1=\\frac{(6-7)(1-2.25)+(5-7)(2-2.25)+(7-7)(3-2.25)+(10-7)(4-2.25)}{(1-2.25)^2+(2-2.25)^2+(3-2.25)^2+(4-2.25)^2}=\\frac{4}{3}$$"
                }
            </Latex>
            <Latex>
                {
                    "$$w_0=7-\\frac{4}{3}\\cdot 2.25=4$$"
                }
            </Latex>
            <p>
                This means, the function that is marked in blue in the example which is <Latex>{"$h_w(x)=\\frac{4}{3}x+\\frac{11}{3}$"}</Latex>
                is almost perfect. It just needs to be pushed a tiny bit upwards. The only difference is <Latex>$w_0$</Latex>.
                Let's compare the loss function values:
            </p>
            <Latex>
                {
                    "$$L\\left(\\frac{4}{3},\\frac{11}{3}\\right)=\\frac{" +
                    "\\left(\\frac{4}{3}\\cdot 1+\\frac{11}{3}-6\\right)^2+" +
                    "\\left(\\frac{4}{3}\\cdot 2+\\frac{11}{3}-5\\right)^2" +
                    "\\left(\\frac{4}{3}\\cdot 3+\\frac{11}{3}-7\\right)^2" +
                    "\\left(\\frac{4}{3}\\cdot 4+\\frac{11}{3}-10\\right)^2" +
                    "}{8}=\\frac{19}{36}$$"
                }
            </Latex>
            <Latex>
                {
                    "$$L\\left(\\frac{4}{3},\\frac{12}{3}\\right)=\\frac{" +
                    "\\left(\\frac{4}{3}\\cdot 1+\\frac{12}{3}-6\\right)^2+" +
                    "\\left(\\frac{4}{3}\\cdot 2+\\frac{12}{3}-5\\right)^2" +
                    "\\left(\\frac{4}{3}\\cdot 3+\\frac{12}{3}-7\\right)^2" +
                    "\\left(\\frac{4}{3}\\cdot 4+\\frac{12}{3}-10\\right)^2" +
                    "}{8}=\\frac{7}{12}$$"
                }
            </Latex>
            <p>
                Let me add one last note on the mean squared error loss function. Calculating the MSE for large datasets
                can be costly so I'd like to introduce a more efficient implementation. For this implementation we need
                to define the design matrix which is simply a matrix
                <Latex>{"$X\\in\\mathbb{R}^{m\\times 2}$"}</Latex> that consists of a columns only of ones and a column
                of all x values from our samples. We also define vectors y and w.
            </p>
            <Latex>
                {
                    "$$X=\\begin{pmatrix}1 & x^{(1)}\\\\ 1 & x^{(2)} \\\\ \\vdots&\\vdots \\\\1 & x^{(m)} \\end{pmatrix}," +
                    "y=\\begin{pmatrix}y^{(1)}\\\\ y^{(2)}\\\\ \\vdots \\\\ y^{(m)}\\\\ \\end{pmatrix}," +
                    "w=\\begin{pmatrix}w_0\\\\ w_1 \\end{pmatrix}$$"
                }
            </Latex>
            <p>
                With these matrices we can define a formula that is equivalent to our previous MSE function but runs much faster.
            </p>
            <Latex>
                {"$$L(w_1,w_0)=\\frac{1}{2m}\\sum_{i=1}^m\\left(w_1x^{(i)}+w_0-y^{(i)}\\right)^2=\\frac{1}{2m}\\|Xw-y\\|^2$$"}
            </Latex>
        </Chapter>
    )
}

export default LinearRegression;