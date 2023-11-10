import React from 'react';
import Chapter from "../Chapter";
import Image from "../Image";
// @ts-ignore
import img from "../../media/CrossValidation.gif";
function CrossValidation() {
    return (
        <Chapter title="Cross Validation" depth={3}>
            <p>
                Instead of partitioning our data into training, validation, and test data, we can use r-fold cross
                validation. First our data is partitioned into r equally sized sets, called folds. For each fold we
                train our model on the remaining r-1 folds and validate our model on the fold we didn't use for training.
                We then take the average error of all of these training units. We repeat this process for multiple values
                of our hyper-parameter k to find an optimum. Best practice is to choose r=5 or r=10.
            </p>
            <Image
                src={img}
                author="MBanuelos22 on Wikimedia"
                alt="Illustration showing how data is split into folds for cross validation"
                addBG={true}
                license="CC BY-SA 4.0 Deed"
                linkToLicense="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
            />
            <p>
                R-fold cross validation is not exhaustive, meaning that while every data point is contained in the test
                data at least once, not every combination of data points is.
            </p>
        </Chapter>
    )
}

export default CrossValidation;