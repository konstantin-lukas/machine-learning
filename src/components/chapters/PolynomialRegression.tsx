import React from 'react';
import Chapter from "../Chapter";
import Latex from "react-latex-next";
import PolynomialRegressionChart from "./charts/PolynomialRegressionChart";
import Regularization from "./Regularization";
function PolynomialRegression() {
    return (
        <Chapter title={"Polynomial Regression"} depth={1}>
            <p>
                So far we've only used one discussed problems that could be described with a straight line. This is called
                linear regression. But of course sometimes our samples can't be fit unto a straight line. That's when we
                need to do polynomial regression. The data points in the below chart can be described by the following
                function: <Latex>{"$f(x)=\\frac{1}{100000}x^4\\frac{1}{1000}x^3+120$"}</Latex>. However, in the real world
                we don't know this, so how can we find the function through machine learning?
            </p>
            <PolynomialRegressionChart/>
            <p>
                One thing we can try is computed features. This means that we add features to try to make our problem more
                linear. For instance, let's say we want to predict the prices of houses and we have the width and depth
                of the property. Assume for a moment that this data is not linear. So what we can do is calculate another
                feature area by multiplying the width and depth of the property. It is not unreasonable to assume that
                larger properties are generally more expensive. So by adding the area feature, our problem should become
                more linear.
            </p>
            <p>
                Computing features isn't always a practical solution so we need a different approach. There is a different
                way to transform this into a linear problem. We do this by applying a transformation to the input values.
                This transformation is essentially also adding features but in a more general way. This time we create
                new features in a less creative way by just squaring them or cubing them or raising them to whatever
                power we think is necessary. Of course we can apply other transformations too, like taking the square root.
                We just create new features however we deem necessary. Here's an example:
            </p>
            <Latex>
                {
                    "$$h_w(x)=w_1x_1+w_2x_1^2+w_3x_1^3+w_4x_1^4+w_0$$"
                }
            </Latex>
            <p>
                This approach which is called base expansion allows us to do multivariate linear regression. Of course
                we can also combine base expansion with computed features depending on the situation. Either way, we are
                using a higher dimensional space where our problem is linear. We don't know for sure which features to
                add and which are bad features but when we do linear regression the idea is that bad features just naturally
                get a weight for 0 or near 0 so that we effectively end up with only the good features.
            </p>
            <p>
                By working with polynomials, we are introducing a new hyper-parameter which is the degree of the polynomial.
                Of course using a higher degree, yields better results when testing on the training data, but usually
                results in massive overfitting and a higher error on the test data. In the same way, we tend to underfit
                if the degree is too small. We can optimize the polynomial degree in the same way as we did with the
                hyper-parameter of the k-NN classifier, i.e. with cross validation.
            </p>
            <Regularization/>
        </Chapter>
    )
}

export default PolynomialRegression;