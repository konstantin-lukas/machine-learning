import React from "react";
import Chapter from "../Chapter";
import Latex from "react-latex-next";

function NaiveBayes() {
    return (
        <Chapter title="Naive Bayes" depth={1}>
            <p>
                We can differentiate between discriminative and generative models. The former learns features to distinguish
                classes from each other whereas the latter learns probability distributions representing the extent of classes.
                Typical discriminative models include logistic regression, neural networks, perceptron, and
                support vector machines, while typical generative models include naive Bayes, and gaussian discriminant analysis.
                Once we have learned a distribution in the case of a generative model, we can classify data points by
                calculating their probability for each class and picking the class with the highest probability. Since we
                usually don't have equally large classes we also have to take into account the probability of a class
                in the entire dataset: <Latex>{"$\\pi_y=\\frac{\\text{Number of samples in class y}}{\\text{Number of samples in dataset}}$"}</Latex>.
                With this and the learned probability distribution <Latex>$P_y$</Latex> we can calculate the likelihood
                of a datapoint <Latex>$x$</Latex> being in class <Latex>$y$</Latex> as <Latex>$p(x,y)\pi_y\cdot P_y(x)$</Latex>.
            </p>
            <p>
                If we assume a gaussian distribution, we need to learn a mean value <Latex>$\mu$</Latex> and a variance <Latex>$\sigma^2$</Latex> to define our probability
                function. We calculate those for each class with the following formulas:
            </p>
            <Latex>
                {
                    "$$\\mu=\\frac{1}{m}\\sum^m_{i=1}x^{(i,y)}\\hspace{3em}" +
                    "\\sigma^2=\\frac{1}{m}\\sum^m_{i=1}\\left(x^{(i,y)}-\\mu\\right)^2\\hspace{3em}$$"
                }
            </Latex>
            <p>
                This whole approach has been extremely easy so far and is basically just a smart way of using statistics.
                However, we are still missing an important aspect: multi-dimensional data. The easiest way to implement
                multiple features, is by using the Naive Bayes approach. Which assumes that the probabilities of our features
                are independent. That assumption often isn't correct but it allows us to do easier math because for
                independent events we can calculate <Latex>$P(x_1,...,x_n)$</Latex> as <Latex>$P_1(x_1)\cdot...\cdot P_n(x_n)$</Latex>.
                This means the probability for class <Latex>$y$</Latex> given <Latex>$d$</Latex> features is:
            </p>
            <Latex>
                {
                    "$$P_y(x)=\\prod^d_{i=1}P_{i,y}(x_i)$$"
                }
            </Latex>
            <p>
                If our data is not Gaussian distributed, we can preprocess it to be Gaussian distributed. The neat thing
                is that we don't need to do that because the Naive Bayes approach doesn't confine us to using Gaussian
                distributions. We can actually fit our data to any distribution function we want.
            </p>

        </Chapter>
    )
}

export default NaiveBayes;