import React from 'react';
import Chapter from "../Chapter";
import Latex from "react-latex-next";
function Regularization() {
    return (
        <Chapter title={"Regularization"} depth={2}>
            <p>
                There are other ways, besides cross validation, to optimize a polynomial degree when doing regression.
                We can reduce the number of features we have or we can keep them and reduce their weight. In this chapter,
                we will take a look at the latter. We do this my introducing a term the penalizes high weights to our MSE function.
                Notice that this term doesn't include <Latex>$w_0$</Latex> because that's not the weight of any parameter.
            </p>
            <Latex>
                {
                    "$$L(w)=\\frac{\\sum_{i=1}^m\\left((w\\cdot x^{(i)})-y^{(i)}\\right)^2+\\lambda\\sum^n_{j=1}w^2_j}{2m}" +
                    "=\\frac{\\|Xw-y\\|^2+\\lambda\\|w\\|^2}{2m}$$"
                }
            </Latex>
            <p>
                This approach introduces a new hyper-parameter <Latex>$\lambda$</Latex>. When we set <Latex>$\lambda$</Latex> to
                a small number end up with our regular MSE function and potentially overfit our model if we have too many parameters.
                On the other hand, if we set <Latex>$\lambda$</Latex> to something very large, we underfit out our model because all
                weights except <Latex>$w_0$</Latex> (our bias) would approach 0. So, it makes sense to assume that somewhere in between
                there is a <Latex>$\lambda$</Latex> that actually helps us find a good fit. We can learn <Latex>$\lambda$</Latex>
                by performing cross validation once again. This is the formula we would use for that:
            </p>
            <Latex>
                {
                    "$$w=(X^TX+\\lambda I_{n+1})^{-1}(X^Ty)$$"
                }
            </Latex>
            <p>
                Depending on how we calculate the length of our weight weight, we use different names for this type of
                regression.
            </p>
            <ul style={{
                textAlign: "left",
                marginBottom: "1em"
            }}>
                <li>Ridge Regression <Latex>{"$L_2: L(w)=\\frac{\\sum_{i=1}^m\\left((w\\cdot x^{(i)})-y^{(i)}\\right)^2+\\lambda\\sum^n_{j=1}w^2_j}{2m}$"}</Latex></li>
                <li>Lasso Regression <Latex>{"$L_1: L(w)=\\frac{\\sum_{i=1}^m\\left((w\\cdot x^{(i)})-y^{(i)}\\right)^2+\\lambda\\sum^n_{j=1}|w_j|}{2m}$"}</Latex></li>
            </ul>
            <p>
                Lasso regression of leads to many null weights.
            </p>
        </Chapter>
    )
}

export default Regularization;