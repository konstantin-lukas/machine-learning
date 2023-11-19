import React from "react";
import Chapter from "../Chapter";
import Latex from "react-latex-next";
// @ts-ignore
import img from "../../media/GradientDescent.png";
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
        </Chapter>
    );
}

export default GradientDescent;