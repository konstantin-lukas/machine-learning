import React from "react";
import Chapter from "../Chapter";
import Latex from "react-latex-next";
import Code from "../Code";
// @ts-ignore
import img from "../../media/KMeans.gif";
import Image from "../Image";

function KMeans() {
    return (
        <Chapter title="K-Means" depth={2}>
            <p>
                The k-means optimization problem gives us a training set and a number of clusters <Latex>$k$</Latex>.
                We are trying to learn <Latex>$k$</Latex> clusters or in other words some representative like the center
                of that cluster. We are trying to achieve this by minimizing the average squared distance between data
                points and their nearest cluster center. Unfortunately, this problem is NP-hard but we can still do this
                trough machine learning with Lloyd's k-means algorithm.
            </p>
            <Code>
                {
                    "centroids = [random()] * k\n" +
                    "while (not converged):\n" +
                    "   for samples in samples:\n" +
                    "       sample.cluster = closestCentroid(sample)\n" +
                    "   for centroid in centroids:\n" +
                    "       centroid = mean(samplesBelongingTo(centroid)))"
                }
            </Code>
            <Image
                src={img}
                alt="Convergence of k-means clustering from an unfavorable starting position"
                author="Chire on Wikimedia"
                license="CC BY-SA 4.0 Deed"
                addBG={true}
                linkToLicense="https://creativecommons.org/licenses/by-sa/4.0/"
            />
            <p>
                The above image shows k-means from an unfavorable starting position. The algorithm converges to local
                optima meaning that the initialization has a big impact on the convergence. This is why you typically
                run the algorithm multiple times with different starting positions and pick one. A common way to initialize
                k-means is with k-means++. In this approach we start with a single random centroid. Then we choose the next
                centroid also at random but with some minimum distance from the first centroid. Our cost function is:
            </p>
            <Latex>
                {
                    "$$C=\\sum^m_{i=1}\\min_j\\|x^{(i)}-\\mu^{(i)}\\|^2$$"
                }
            </Latex>
            <p>
                The problem is our hyper-parameter k because a higher k necessarily results in lower costs. A way to
                counteract this is to add a term that penalizes complexity just like with regularization. Unfortunately,
                k-means remains dependent on the structure of that data and fails to find good solution of data shaped in
                certain ways.
            </p>
        </Chapter>
    );
}

export default KMeans;