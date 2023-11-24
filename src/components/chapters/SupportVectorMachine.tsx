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
                Our decision boundary is defined by <Latex>$h_w(x)=0$</Latex>. So we'll start off by putting our margins
                at <Latex>$h_w(x)=1$</Latex> and <Latex>$h_w(x)=-1$</Latex>. We can define our loss convex function as:
            </p>
            <Latex>
                {
                    "$$L(w,x)=\\left\\{ \\begin{matrix}0,& y(w\\cdot x)>1\\\\ \\max(0,1-y(w\\cdot x),& y(w\\cdot x)\\le 1)\\end{matrix} \\right.$$"
                }
            </Latex>
            <p>
                To maximize our margin <Latex>$M$</Latex>, we need to minimize the length of our weight vector <Latex>$\|w\|$</Latex>.
                Why is that you ask? Recall that our decision boundary is defined as <Latex>$w\cdot x=0$</Latex>. Linear
                algebra tells us that when the dot product of two vectors is zero, they are orthogonal (perpendicular to each other).
                This means <Latex>$w$</Latex> points in the direction of our outer margin. If we normalize <Latex>$w$</Latex> by
                dividing it by its length <Latex>$\|w\|$</Latex> and multiplying the width of our margin <Latex>$M$</Latex>.
                We get a vector that perfectly spans across our margin <Latex>{"$M\\frac{w}{\\|w\\|}$"}</Latex>. Now let's imagine
                a point <Latex>$x$</Latex> with <Latex>$w\cdot x=-1$</Latex>. This means <Latex>$x$</Latex> is on our
                outer margin. Now let's try to project this point to the other outer margin where <Latex>$w\cdot x=1$</Latex> by
                adding <Latex>{"$M\\frac{w}{\\|w\\|}$"}</Latex>.
            </p>
            <Latex>
                {
                    "$$w\\cdot\\left(x+M\\frac{w}{\\|w\\|}\\right)=1\\\\" +
                    "\\Rightarrow M\\frac{w\\cdot w}{\\|w\\|}+\\underbrace{w\\cdot x}_{-1\\text{ per definition}}=1\\\\" +
                    "\\Rightarrow M\\|w\\|-1=1\\\\" +
                    "\\Rightarrow M=\\frac{2}{\\|w\\|}$$"
                }
            </Latex>
            <p>
                Now you understand how to calculate the margin and why we need to minimize <Latex>$\|w\|$</Latex> to
                maximize <Latex>$M$</Latex>. We will not look into how to minimize this term. Just know that it has a
                time complexity of <Latex>{"$\\mathcal{O}(n^3)$"}</Latex>. If we maximize our margin that naturally means that we have no test data
                points inside our margin but at least one right on top of each outer margin. These are called support vectors.
            </p>
            <p>
                The great thing about SVMs is that we can even use them when our data isn't linearly separable. In that case
                we use what's called a Soft Margin SVM (as opposed to the Hard Margin SVM we were using so far). This type
                of SVM uses something called slack which is a measurement of how far into the margin data points are.
                We calculate the slack for each data point and define a max tolerance for the slack in our model.
            </p>
        </Chapter>
    );
}

export default SupportVectorMachine;