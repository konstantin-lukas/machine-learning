import React from 'react';
import Chapter from "../Chapter";
import NearestNeighborChart from "./charts/NearestNeighborChart";
import CrossValidation from "./CrossValidation";
function KNearestNeighbor() {
    return (
        <Chapter title="k-Nearest Neighbor" depth={2}>
            <p>
                A major problem with the 1-nearest neighbor approach is that a rogue sample can result in many unexpected
                results. To counteract this effect, we look at more than one neighbor. We call this approach k-nearest neighbor.
                The below chart demonstrates the problem. The red data point is the input to be classified. It should clearly
                be classified as a teal diamond but because of the proximity to the orange outlier it is misclassified
                as an orange circle.
            </p>
            <NearestNeighborChart/>
            <p>
                The k-NN classifier still suffers from pretty much the same problems as the 1-NN classifier. The only
                real benefit is that it allows use to slightly increase our accuracy by finding the best k. This does however
                come at the cost of increasing testing complexity even further. Parameters that aren't directly part of
                our model and have to be set before training are called hyper-parameters. In this case, k is such a hyper-parameter.
                We want to optimize k but you should never use the test data to find the best k. Otherwise, that will lead to over-fitting of
                that parameter. Test data measure how well a model does at generalizing. By using the test data to optimize
                a hyper-parameter, we get overly optimistic test results. So what's the solution here? We divide our data
                into three parts:
            </p>
            <ol>
                <li>Training: used to train the model</li>
                <li>Validation: used to optimize hyper-parameters</li>
                <li>Test: used to measure the generalization performance of the model</li>
            </ol>
            <CrossValidation/>
        </Chapter>
    );
}

export default KNearestNeighbor;
