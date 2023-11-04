import React from 'react';
import Chapter from "../Chapter";
import NearestNeighborChart from "./charts/NearestNeighborChart";
import DistanceFunctions from "./DistanceFunctions";
import Code from "../Code";

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
                always have separate test and training sets. Below is a naive implementation of the 1-NN classifier.
            </p>
            <Code>
                {
                    "import math\n" +
                    "\n" +
                    "# Sample training data\n" +
                    "X_train = [[1, 2], [2, 3], [3, 4], [4, 5]]\n" +
                    "y_train = [0, 1, 1, 0]\n" +
                    "\n" +
                    "# Sample test data\n" +
                    "X_test = [[2.5, 3.5], [3.5, 4.5]]\n" +
                    "\n" +
                    "def euclidean_distance(point1, point2):\n" +
                    "    distance = 0\n" +
                    "    for i in range(len(point1)):\n" +
                    "        distance += (point1[i] - point2[i]) ** 2\n" +
                    "    return math.sqrt(distance)\n" +
                    "\n" +
                    "def nearest_neighbor(train_data, train_labels, test_point):\n" +
                    "    min_distance = float('inf')\n" +
                    "    nearest_neighbor = None\n" +
                    "    for i in range(len(train_data)):\n" +
                    "        distance = euclidean_distance(train_data[i], test_point)\n" +
                    "        if distance < min_distance:\n" +
                    "            min_distance = distance\n" +
                    "            nearest_neighbor = train_labels[i]\n" +
                    "    return nearest_neighbor\n" +
                    "\n" +
                    "# Perform classification for each test point\n" +
                    "y_pred = [nearest_neighbor(X_train, y_train, test_point) for test_point in X_test]\n" +
                    "\n" +
                    "# Print the predicted classes\n" +
                    "print(\"Predicted Classes:\", y_pred)"
                }
            </Code>
            <p>
                A major problem with the 1-nearest neighbor approach is that a rogue sample can result in many unexpected
                results. To counteract this effect, we look at more than one neighbor. We call this approach k-nearest neighbor.
                The below chart demonstrates the problem. The red data point is the input to be classified. It should cleary
                be classified as a teal diamond but because of the proximity to the orange outlier it is misclassified
                as an orange circle.
            </p>
            <NearestNeighborChart/>
            <DistanceFunctions/>
        </Chapter>
    );
}

export default NearestNeighbor;
