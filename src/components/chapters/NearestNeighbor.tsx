import React from 'react';
import Chapter from "../Chapter";
import NearestNeighborChart from "./charts/NearestNeighborChart";

function NearestNeighbor() {
    return (
        <Chapter title="Nearest Neighbor">
            <p>
                Nearest neighbor classification in its simplest form is a bit hacky because we aren't doing any actual
                training. The training data is instead used directly in the classification algorithm. We call that kind
                of machine learning "lazy learning". The idea is pretty simple: we classify inputs by calculating their
                distance to every single data point in our training data. The resulting label is the label of the nearest
                neighbor. This approach is super simple but comes with the added downside of having to go over every
                point in the training data resulting in a pretty slow algorithm. There is however an important lesson
                to be learned from this approach. What happens to the error rate of our model when we test it with data
                from our training set? It becomes 0%. This is because each point in the test data exists the training data
                result in a distance of 0 for that data point resulting in correct classification all of the time. This
                is however not an accurate representation how our models performs with real data which is why we should
                always have separate test and training sets.
            </p>
            <p>
                A major problem with the 1-nearest neighbor approach is that a rogue sample can result in many unexpected
                results. To counteract this effect, we look at more than one neighbor. We call this approach k-nearest neighbor.
                The below chart demonstrates the problem. The red data point is the input to be classified. It should cleary
                be classified as a teal diamond but because of the proximity to the orange outlier it is misclassified
                as an orange circle.
            </p>
            <NearestNeighborChart/>
        </Chapter>
    );
}

export default NearestNeighbor;
