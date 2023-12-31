import React from 'react';
import Chapter from "../Chapter";
import DistanceFunctions from "./DistanceFunctions";
import Code from "../Code";
import KNearestNeighbor from "./KNearestNeighbor";

function NearestNeighbor() {
    return (
        <Chapter title="Nearest Neighbor" depth={1}>
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
                always have separate test and training sets. Below is a naive implementation of the 1-NN classifier.
            </p>
            <Code>
                {
                    "def nearest_neighbor(train_data, train_labels, test_point):\n" +
                    "   min_distance = float('inf')\n" +
                    "   nearest_neighbor = None\n" +
                    "   for i in range(len(train_data)):\n" +
                    "       distance = euclidean_distance(train_data[i], test_point)\n" +
                    "       if distance < min_distance:\n" +
                    "           min_distance = distance\n" +
                    "           nearest_neighbor = train_labels[i]\n" +
                    "   return nearest_neighbor"
                }
            </Code>
            <DistanceFunctions/>
            <KNearestNeighbor/>
        </Chapter>
    );
}

export default NearestNeighbor;
