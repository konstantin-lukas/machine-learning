import React from "react";
import Chapter from "../Chapter";
import OneVsRestChart from "./charts/OneVsRestChart";

function MulticlassClassification() {
    return (
        <Chapter title="Multiclass Classification" depth={1}>
            <p>
                Most linear classifiers only solve the binary classification problem. If we have more than two classes,
                we can train multiple linear classifiers to make a prediction. The first approach we're looking at here is
                called One-vs-Rest. The idea is to pick out one class and train a linear classifier where the two classes
                are the one we picked and all remaining classes combined. We train a model for each class in our dataset.
                Then we make predictions with these multiple models to infer the class of our input. Let's say we have
                classes A, B, and C. We train 3 models each classifying for A / not A, B / not B, or C / not C. If a
                datapoint is in A and not B and not C, we can infer that it is need in class A. Assuming our classifier
                functions return 1 or -1, we pick the class that returns the highest value.
            </p>
            <OneVsRestChart/>
            <p>
                The One-vs-Rest approach changes the way we look at our input data and uses the same linear models as before.
                This results in our model learning a set of k individual linear boundaries.
                Alternatively, we can change the way our model works which is the second approach we're going to cover here.
                Instead of learning k individual functions we can learn the parameters of those functions in one model.
                The downside to that is that we have to adjust our model completely and can't use our binary classifiers
                the way they are, but we do get a more efficient implementation.
            </p>
        </Chapter>
    );
}

export default MulticlassClassification;