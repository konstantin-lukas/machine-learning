import React from "react";
import Chapter from "../Chapter";
import Latex from "react-latex-next";
// @ts-ignore
import img from "../../media/Perceptron.png";
import Image from "../Image";
import Code from "../Code";
import SupportVectorMachine from "./SupportVectorMachine";

function Perceptron() {
    return (
        <Chapter title="Perceptron" depth={1}>
            <p>
                The perceptron which is named after the neuron is the building block of neural networks. A single
                perceptron can also be considered a one-layer neural network. A perceptron takes a number of binary inputs
                and produces a single binary output. A single perceptron can only solve linear problems. The perceptron
                algorithm is really simple. You multiply all inputs with their weights, sum the results, and add some bias.
                Then, you just run an activation function on the resulting value. This can simply be expressed
                as <Latex>$\sigma(x\cdot w+b)$</Latex>.
            </p>
            <Image
                src={img}
                addBG={true}
                author="Mayranna on Wikimedia"
                license="CC BY-SA 3.0 Deed"
                linkToLicense="https://creativecommons.org/licenses/by-sa/3.0/deed.en"
                alt="illustration of a perceptron"
            />
            <p>
                The activation function we want to use is the sign activation function which just returns -1 or 1 depending
                on the sign of its input value. If <Latex>{"$y^{(i)}(w\\cdot x^{(i)})>0$"}</Latex> we can assume that we
                are predicting the correct label. With this we can define a loss function.
            </p>
            <Latex>
                {
                    "$$L(w,x)=\\left\\{\\begin{matrix}0,&y(w\\cdot x)>0\\\\ -y(w\\cdot x), & else\\end{matrix}\\right." +
                    "\\hspace{3em}\\frac{dL}{dw_j}=-yx_j$$"
                }
            </Latex>
            <p>
                The nice thing about this loss function is that it is convex, so there's on global optimum. The partial derivative
                is also really nice and simple. We use our loss function to perform a stochastic gradient descent. So we iterate
                over all points one by one and adjust our weights with every iteration. To move in the opposite direction of the
                gradient, what we do is <Latex>{"$w=w+\\alpha y^{(i)}x^{(i)}$"}</Latex> with <Latex>$\alpha$</Latex> as our
                learning rate. Here's some pseudo-code of a slightly different version of this algorithm which uses our
                actual predictions:
            </p>
            <Code>
                {
                    "w = random()\n" +
                    "while (error):\n" +
                    "   for (inputs, label) in data:\n" +
                    "       pred = sign(w * inputs)\n" +
                    "       w += learning_rate * (label - pred) * inputs"
                }
            </Code>
            <p>
                The perceptron algorithm will always find a decision boundary with zero training error if the training
                data is linearly separable. This also means that it will never converge if the data is not linearly separable.
                Linearly separable just means that the two classes can be perfectly separated by a straight line.
            </p>
            <SupportVectorMachine/>
        </Chapter>
    );
}

export default Perceptron;