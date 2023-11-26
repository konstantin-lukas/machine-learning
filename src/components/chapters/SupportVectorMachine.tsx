import React from "react";
import Chapter from "../Chapter";
// @ts-ignore
import img from "../../media/SVM.png";
import Image from "../Image";
import Latex from "react-latex-next";

function SupportVectorMachine() {
    return (
        <Chapter title="Support Vector Machine" depth={2}>
            <p>
                The perceptron implementation we introduced finds any separator on a linearly separable dataset. To get
                a better decision boundary, we introduce a margin around our linear separator. The goal is to then
                maximize this margin to push our boundary as far away from our samples as possible.
            </p>
            <Image
                src={img}
                addBG={true}
                author="Ennepetaler86 on Wikimedia"
                license="CC BY 3.0 Deed "
                linkToLicense="https://creativecommons.org/licenses/by/3.0/deed.de"
                alt="illustration of a perceptron"
            />
            <p>
                Our decision boundary is defined by <Latex>$h_w(x)=0$</Latex>. To get the largest possible margin, we will
                and up with at least one data point on each side of the margin touching it directly. These data points
                are called support vectors. We will call the distance between our decision boundary and these support
                vectors <Latex>$\gamma$</Latex>. To be able to tell where a data points sits relative to our margin,
                we define the outer limits of our margin as <Latex>$h_w(x)=1$</Latex> and <Latex>$h_w(x)=-1$</Latex>. This
                does NOT mean that <Latex>$\gamma=1$</Latex>. If <Latex>$h_w(x)=w\cdot x$</Latex>, then that means
                that the points for which <Latex>$h_w(x)=1$</Latex> and <Latex>$h_w(x)=-1$</Latex> hold true are defined
                by the weight vector we are learning. In other words the width of our margin is defined by our weights
                which is intuitive because we are learning the weights anyways so it makes sense to defines the margins
                with them as well. Knowing this, we can define our convex loss function as:
            </p>
            <Latex>
                {
                    "$$L(w,x)=\\left\\{ \\begin{matrix}0,& y(w\\cdot x)>1\\\\ \\max(0,1-y(w\\cdot x),& y(w\\cdot x)\\le 1)\\end{matrix} \\right.$$"
                }
            </Latex>
            <p>
                Let's think about what the above function means. When is there no loss? There is no loss when the predicted
                label matches the actual label but only if the data point is not within our margin. Let's say the actual
                label is 1. Then, our prediction is only lossless if the point is on <Latex>$h_w(x)=1$</Latex> or beyond.
                In that case <Latex>$w\cdot x\ge 1$</Latex> holds true, meaning that <Latex>$y(w\cdot x)\ge 1$</Latex>.
                We're using the stricter <Latex>{"$y(w\\cdot x)> 1$"}</Latex> but it doesn't matter as the loss for <Latex>$y(w\cdot x)= 1$</Latex> results
                in 0 either way.
            </p>
            <p>
                The other situation where there is no loss is when both the predicted and the actual label are negative.
                If the actual label <Latex>$y$</Latex> is -1, then <Latex>{"$y(w\\cdot x)>1$"}</Latex> can only hold true
                when <Latex>$w\cdot x$</Latex> is lesser than -1. This corresponds to the case where we are beyond our
                margin on the negative side.
            </p>
            <p>
                Having covered all lossless cases, naturally any other case would result in a loss, but how much? <Latex>$w\cdot x$</Latex> tells
                us how far we are from our decision boundary in either direction and multiplying that with the actual label
                gives us our error.
            </p>
            <p>
                So, how do we maximize our margin <Latex>$M$</Latex>? We know that our margin depends on our weight vector but
                we do no need maximize this vector and instead minimize it. Recall that our decision boundary is defined as <Latex>$w\cdot x=0$</Latex>. Linear
                algebra tells us that when the dot product of two vectors is zero, they are orthogonal (perpendicular to each other).
                This means <Latex>$w$</Latex> points in the direction of our outer margin. If we normalize <Latex>$w$</Latex> by
                dividing it by its length <Latex>$\|w\|$</Latex> and multiplying the width of our margin <Latex>$M$</Latex>.
                We get a vector that perfectly spans across our margin <Latex>{"$M\\frac{w}{\\|w\\|}$"}</Latex>. Now let's imagine
                a point <Latex>$x_1$</Latex> with <Latex>$w\cdot x_1=-1$</Latex>. This means <Latex>$x_1$</Latex> is on our
                outer margin. Now let's try to project this point to the other outer margin where we will
                call it <Latex>$x_2$</Latex> with <Latex>$w\cdot x_2=1$</Latex>. We achive this by
                adding <Latex>{"$M\\frac{w}{\\|w\\|}$"}</Latex> to <Latex>$x_1$</Latex>.
            </p>
            <Latex>
                {
                    "$$w\\cdot x_2 = 1\\\\" +
                    "\\Rightarrow w\\cdot\\left(x_1+M\\frac{w}{\\|w\\|}\\right)=1\\\\" +
                    "\\Rightarrow M\\frac{w\\cdot w}{\\|w\\|}+\\underbrace{w\\cdot x_1}_{-1\\text{ per definition}}=1\\\\" +
                    "\\Rightarrow M\\|w\\|-1=1\\\\" +
                    "\\Rightarrow M=\\frac{2}{\\|w\\|}$$"
                }
            </Latex>
            <p>
                Now you understand why we need to minimize <Latex>$\|w\|$</Latex> to
                maximize <Latex>$M$</Latex>. In practical implementations we actually modify this term even further,
                because we have algorithms for minimizing quadratic terms but not for maximizing linear terms.
            </p>
            <Latex>
                {
                    "$$\\max_w\\left(\\frac{2}{\\|w\\|}\\right)=\\min_w\\left(\\frac{1}{2}\\|w\\|^2\\right)$$"
                }
            </Latex>
            <p>
                The great thing about SVMs is that we can even use them when our data isn't linearly separable. In that case
                we use what's called a Soft Margin SVM (as opposed to the Hard Margin SVM we were using so far). This type
                of SVM uses something called slack which is a measurement of how far into the margin data points are.
                We calculate the slack <Latex>$\xi_i$</Latex> for each data point <Latex>{"$x^{(i)}$"}</Latex> and
                add that to the term we are trying to minimize.
            </p>
            <Latex>
                {
                    "$$\\min_w\\left(\\frac{1}{2}\\|w\\|^2+C\\sum^m_{i=1}\\xi_i \\right)$$"
                }
            </Latex>
            <p>
                <Latex>$C$</Latex> is a hyper-parameter which controls how soft our margin is. If <Latex>$C$</Latex> is
                large we get a harder margin and if it is small we get a softer margin.
            </p>
        </Chapter>
    );
}

export default SupportVectorMachine;