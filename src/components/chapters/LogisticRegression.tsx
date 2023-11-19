import React from 'react';
import Chapter from "../Chapter";
import DecisionBoundaryChart from "./charts/DecisionBoundaryChart";
import Image from "../Image";
// @ts-ignore
import img from "../../media/Sigmoid.png";
// @ts-ignore
import img2 from "../../media/Convex.png";
import Latex from "react-latex-next";
import GradientDescent from "./GradientDescent";

function LogisticRegression() {
    return (
        <Chapter title={"Logistic Regression"} depth={1}>
            <p>
                When we're talking about logistic regression, we are trying to predict the probability of something.
                That means we are predicting a number between 0 and 1. This kind of like regular regression because we
                are predicting a continuous value but also kind of like classification because we are looking at only
                two possible outcomes. A logistic regression problem would be any yes/no question for which we need the
                likelihood of the answer. An example of this would be how likely a student is to pass an exam based on
                how many hours they studied.
            </p>
            <p>
                The first thing that is different in logistic regression, is that we are not learning a function that minimizes the MSE and
                instead are looking for a decision boundary. We have labeled training data with two possible labels.
                So, we could just draw a line somewhere and make decisions based on that.
            </p>
            <DecisionBoundaryChart/>
            <p>
                To first, describe a decision boundary we need a way to express that boundary mathematically. If we have
                <Latex>$n$</Latex> features, we use the following equation to describe our decision boundary:
            </p>
            <Latex>
                {
                    "$$w_0+w_1x_1+w_2x_2+\\dots+w_nx_n=0$$"
                }
            </Latex>
            <p>
                This means that all points for which this equation holds true are on our decision boundary. How is this
                useful? Well, we can use the left hand side of the equation as a formula to determine which side of
                the boundary a sample is on. If the left hand side is negative we know a sample is on one side of the
                boundary whereas a sample that results in a positive value is on the other side. The edge case is 0 which
                means a sample is on the boundary. We can of course also express this as a vector
                function using the dot product <Latex>$h_w(x)=w\cdot x$</Latex> just like we did when we were doing
                multivariate linear regression.
            </p>
            <p>
                This approach has some flaws because we don't
                really have a way of expressing how certain our prediction is. We could try to use the distance from
                our decision boundary as a measurement of how sure we are, but the problem with that is that our data
                could be arbitrarily far away from the decision boundary. However, what we need is a way to get a value
                between 0 and 1.
            </p>
            <p>
                This is where the sigmoid (or logistic) function comes in which projects our result unto the interval between
                0 and 1. So, we need a function <Latex>{"$\\sigma:\\mathbb{R}\\rightarrow[0,1]$"}</Latex> which we can
                wrap around our linear function to get us a value from 0 to 1 which looks like this: <Latex>$h_w(x)=\sigma(w\cdot x)$</Latex>.
            </p>
            <Image
                src={img}
                author="Canley on Wikimedia"
                license="CC BY-SA 4.0 Deed"
                linkToLicense="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
                alt="A sigmoid function"
                addBG={true}
            />
            <p>
                This is the definition of the sigmoid function:
            </p>
            <Latex>
                {
                    "$$\\sigma(z)=\\frac{1}{1+e^{-z}}\\in [0,1]$$"
                }
            </Latex>
            <p>
                Now that we know how logistic regression works, let's talk about how to actually do the training.
                The sigmoid function is static but we need to learn the weight vector in w from <Latex>$h_w(x)=\sigma(w\cdot x)$</Latex>.
                What we're trying to maximize during training is the confidence of our predictions. This means that for
                each sample with label 1, we are trying to maximize <Latex>$h_w(x)$</Latex> but for each sample with label 0
                we are trying to maximize <Latex>$1-h_w(x)$</Latex>. This is because for samples labeled with 0 a certain
                prediction is a prediction with a low value for <Latex>$h_w(x)$</Latex>. So our cost function could look like this:
            </p>
            <Latex>
                {
                    "$$\\text{cost}_w(x,y)=\\left\\{\\begin{matrix}h_w(x),&y=1\\\\ 1-h_w(x),& y=0\\end{matrix}\\right.$$"
                }
            </Latex>
            <p>
                And the resulting loss function would be:
            </p>
            <Latex>
                {
                    "$$L(w)=\\prod^m_{i=1}\\text{cost}_w(x^{(i)},y^{(i)})$$"
                }
            </Latex>
            <p>
                This loss function is nice because it results in a value between 0 and 1 but it is not so nice because we
                have to do a lot of complicated multiplication. Luckily there's a trick we can use. We can turn our product
                into a sum using this logarithm rule: <Latex>$\ln(AB)=\ln(A)+\ln(B)$</Latex>. We call this maximum likelihood method.
                Here's what that looks like:
            </p>
            <Latex>
                {
                    "$$L(w)=\\frac{1}{m}\\ln\\left(\\prod^m_{i=1}\\text{cost}_w(x^{(i)},y^{(i)})\\right)=" +
                    "\\frac{1}{m}\\sum^m_{i=1}\\ln\\left(\\text{cost}_w(x^{(i)},y^{(i)})\\right)$$"
                }
            </Latex>
            <p>
                Because of the logarithm we introduced, our loss function gives us values in <Latex>$(-\infty,0]$</Latex>.
                This is why we need to do one more thing, which is multiplying our result with negative one. What we get is
                a convex parabola with one optimum which we can minimize. Our final loss function looks like this:
            </p>
            <Latex>
                {
                    "$$L(W)=-\\frac{1}{m}\\sum^m_{i=1}\\ln\\left(\\text{cost}_w(x^{(i)},y^{(i)})\\right)=" +
                    "\\underbrace{-\\frac{1}{m}\\sum^m_{i=1}y^{(i)}\\cdot\\ln(h_w(x))+(1-y^{(i)})\\cdot\\ln(1-h_w(x))}" +
                    "_\\text{Combined form used for gradient descent}$$"
                }
            </Latex>
            <p>
                Here's a quick image illustrating what it means for a function to be convex:
            </p>
            <Image
                src={img2}
                author="Sam Lau, Joey Gonzalez, and Deb Nolan"
                license="CC BY-NC-ND 4.0 Deed"
                linkToLicense="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en"
                alt="a convex and a non-convex function"
                addBG={true}
            />
            <p>
                Unfortunately, there's still bad news because unlike before there is no closed form solution for this loss
                function. We can however find the minimum in a different way which is called gradient descent.
            </p>
            <GradientDescent/>
        </Chapter>
    )
}

export default LogisticRegression;