import React from "react";
import Chapter from "../Chapter";
// @ts-ignore
import img from "../../media/BiasVarianceTradeoff.png";
import Image from "../Image";

function Ensembles() {
    return (
        <Chapter title="Ensembles" depth={1}>
            <p>
                Ensembles refer to a combination of different classification or regression models. There are different
                approach for this which are called bagging and boosting. Bagging reduces variance while boosting reduces bias.
                Recall the bias-variance tradeoff that we generally have to deal with. The goal is always to find a good
                middle point between the two because high bias can cause under-fitting while high variance can cause over-fitting.
            </p>
            <Image
                src={img}
                alt="Image showing how bias and variance change with the model complexity"
                author="Bigbossfarin on Wikimedia"
                license="CC0 1.0 Deed"
                addBG={true}
                linkToLicense="https://creativecommons.org/publicdomain/zero/1.0/deed.en"
            />
            <p>
                A term to be familiar with when talking about ensembles is "weak learner". A weak learner is a learning
                algorithm that consistently generates models that are marginally better than random guessing. Weak learners
                usually have either high variance and low bias (like deep decision trees) or low variance and high bias
                (like linear models). Let's look at some ensemble methods now.
            </p>
            <ol>
                <li>
                    Stacking:<br/>We learn predictors in parallel and combine predictions with meta model. This reduces bias
                    (good for linear models or shallow decision trees). In practice the meta model has a weight for
                    each model to prefer the more accurate models when combining the decisions. We use cross validation
                    during training to avoid giving high weights to models that over-fit.
                </li>
                <li>
                    Boosting:<br/>We learn predictors sequentially in an adaptive way (like a pipeline) and combine them with averaging or majority voting.
                    This reduces bias (good for linear models or shallow decision trees).
                </li>
                <li>
                    Bagging:<br/>We learn predictors separately and combine them by averaging or by majority vote. This reduces variance
                    (good for deep decision trees or RBF SVM). Bagging happens in two steps: bootstrapping and aggregation.
                    During bootstrapping we divide our full dataset into many bootstrap samples which are created through
                    sampling with replacement, meaning a bootstrap sample can contain the same sample more than once.
                    During aggregation we just take our predictions and combine them by majority for classifiers or by
                    averaging for regressors.
                </li>
            </ol>
            <p>
                When we use bagging, a common problem is we learn very similar classifiers when we have a lot of data.
                Random forest offer a solution by deciding node splits based on a subset of available features. A random
                forest is a bunch of bagged decision trees that each use random subsets of our features. So instead of just using
                a random subset of samples, we are also using a random subset of features.
            </p>
        </Chapter>
    );
}

export default Ensembles;