import React from "react";
import Chapter from "../Chapter";
import Latex from "react-latex-next";
// @ts-ignore
import img from "../../media/GradientDescent.png";
// @ts-ignore
import img2 from "../../media/FeatureScaling.png";
import Image from "../Image";

function GradientDescent() {
    return (
        <Chapter title="Gradient Descent" depth={2}>
            <p>
                Gradient descent is a way for us to find a function's minimum when there is no closed form solution.
                Gradient descent works by taking the (partial) derivative of a function which can be interpreted as a
                slope which you follow until you reach a minimum.
            </p>
            {/*
\documentclass[tikz, border=5mm,convert]{standalone}
\usepackage{tikz,pgfplots}
\usetikzlibrary{arrows.meta}

\begin{document}

	\begin{tikzpicture}[>=Stealth, scale=1.5]
		\begin{axis}[
			domain=-2:2,
			ymin=0
			]

			\addplot[no marks] {x^2};
			\addplot[red, dashed] {-2*x-1};
			\coordinate (c1) at (axis cs:-2,4);
			\coordinate (c2) at (axis cs:-1,1);
			\coordinate (c3) at (axis cs:-0.5,0.25);
			\coordinate (c4) at (axis cs:-0.25,0.125/2);
			\coordinate (c5) at (axis cs:-0.125,0.125/4);

			\filldraw[red] (c1) circle (2pt);
			\filldraw[red] (c2) circle (2pt);
			\filldraw[red] (c3) circle (2pt);
			\filldraw[red] (c4) circle (2pt);
			\filldraw[red] (c5) circle (2pt);

			\draw[->,blue] (c1) to[out=0, in=45] (c2);
			\draw[->,blue] (c2) to[out=0, in=45] (c3);
			\draw[->,blue] (c3) to[out=0, in=45] (c4);
			\draw[->,blue] (c4) to[out=0, in=45] (c5);
		\end{axis}

	\end{tikzpicture}

\end{document}
            */}
            <Image
                src={img}
                addBG={true}
                license=""
                linkToLicense=""
                alt="illustration of gradient descent"
            />
            <p style={{marginTop:"1em"}}>
                In the case of logistic regression, this is what the partial derivative of our loss function looks like:
            </p>
            <Latex>
                {
                    "$$\\frac{dL}{dw_j}=-\\frac{1}{m}\\sum^m_{i=1}\\left(y^{(i)}-h_w(x)\\right)\\cdot x_j^{(i)}$$"
                }
            </Latex>
            <p>
                If this function returns a negative value, we know that we have to increase the respective weight or decrease
                it otherwise. If it is zero we are already at a local minimum. Of course a zero value can also mean that
                we are at a maximum. But because we are always moving away from maximums that is usually on a problem
                if we are already right on top of one. When we take the partial derivatives of all
                weights and put them into a vector, we call that the gradient.
            </p>
            <Latex>
                {
                    "$$\\nabla F(w)=\\begin{pmatrix}\\frac{dF}{dw_1}\\\\\\frac{dF}{dw_2}\\\\\\frac{dF}{dw_3}\\end{pmatrix}$$"
                }
            </Latex>
            <p>
                Here's an example for <Latex>$F(w)=\|w\|^2$</Latex> with <Latex>{"$w\\in\\mathbb{R}^{n+1}$"}</Latex>:
            </p>
            <Latex>
                {
                    "$$\\nabla F(w)=\\begin{pmatrix}2w_0\\\\2w_1\\\\\\vdots \\\\2w_n\\end{pmatrix}=2w$$"
                }
            </Latex>
            <p>
                We can apply this to the partial derivative of our loss function and through the use of magic put it into
                a simpler form using a design matrix:
            </p>
            <Latex>
                {
                    "$$\\nabla L(w)=\\begin{pmatrix}" +
                    "\\frac{1}{m}\\sum^m_{i=1}\\left(y^{(i)}-h_w(x)\\right)\\cdot x_0^{(i)}\\\\" +
                    "\\frac{1}{m}\\sum^m_{i=1}\\left(y^{(i)}-h_w(x)\\right)\\cdot x_1^{(i)}\\\\" +
                    "\\frac{1}{m}\\sum^m_{i=1}\\left(y^{(i)}-h_w(x)\\right)\\cdot x_n^{(i)}" +
                    "\\end{pmatrix}=\\frac{1}{m}X^T(h_w(X)-y)$$"
                }
            </Latex>
            <p>
                The algorithm to learn with the use of gradient descent works as follows. First, we initialize random weights <Latex>$w_j$</Latex>.
                The we adjust each weight by calculating <Latex>{"$w_j=w_j-\\alpha\\frac{dL(w)}{dw_j}$"}</Latex>. We do this
                repeatedly until we reach some sort of break condition like the weights not changing significantly anymore.
                The constant <Latex>$\alpha$</Latex> is what we call the learning rate. If it is too high we often "jump"
                over optimal solutions and never converge and if it is too low, training may take a very long time. By putting
                our weights into a vector and using the gradient of our loss function, we get a very simple update rule:
            </p>
            <Latex>
                {
                    "$$w=w-\\alpha\\cdot\\nabla L(w)$$"
                }
            </Latex>
            <p>
                Before we start our learning algorithm, we have to understand the importance of scaling for the
                process of gradient descent. When our features are similarly scaled our optimum is circular and we move
                directly towards it. However, if our features have vastly different scales, the optimum is elliptic and
                the only gradients pointing towards the center are the gradients of the two axes (lines through short
                or long dimension) of the ellipse. This can lead to a lot of jumping with a high learning rate or when
                the learning rate is low, we will converge to one of the elliptic axes before converging to the center.
                And if we're unlucky and converge towards the longer axis, training will take even longer.
            </p>
            <Image
            src={img2}
            addBG={true}
            license=""
            linkToLicense=""
            alt="illustration of the importance of feature scaling"
            />
            <p>
                So, we can achieve equal scales through either feature scaling or mean normalization. To normalize a feature,
                we need to calculate the mean value <Latex>$\mu$</Latex> and the deviation <Latex>$\sigma$</Latex>. We can
                then normalize the feature by first subtracting <Latex>$\mu$</Latex> and then dividing by <Latex>$\sigma$</Latex>.
            </p>
            <Latex>
                {
                    "$$\\mu=\\frac{1}{m}\\sum^m_{i=1}x_j^{(i)}\\hspace{3em}" +
                    "\\sigma=\\sqrt{\\sum^m_{i=1}\\left(x_j^{(i)}-\\mu\\right)^2}\\hspace{3em}" +
                    "x_{j_\\text{(norm)}}=\\frac{x_j-\\mu}{\\sigma}$$"
                }
            </Latex>
            <p>
                The other method of feature scaling is achieved by finding the min and max values for each feature and
                then seeing where in that range the value for each samples falls.
            </p>
            <Latex>
                {
                    "$$x_{j_\\text{(scaled)}}=\\frac{x_j-\\min(x_j)}{\\max(x_j)-\\min(x_j)}$$"
                }
            </Latex>
        </Chapter>
    );
}

export default GradientDescent;