import React from "react";
import Chapter from "../Chapter";
import Image from "../Image";
// @ts-ignore
import img from "../../media/DecisionTree.png";
// @ts-ignore
import img2 from "../../media/ClassificationTree.png";
import Latex from "react-latex-next";

function DecisionTrees() {
    return (
      <Chapter title="Decision Trees" depth={1}>
          <p>
              A decision tree is basically a binary tree that works like a bunch of if/else statements. The greedy approach to build
              a decision tree is as follows: we start with a single root node which contains all data points. In each
              leaf we look at all the ways to split our data points into two groups and pick the best way. We determine
              the best way through the use of a scoring function which measures purity. There are different types of purity
              we can measure. Note that the boundaries learned by a decision tree are always rectangular and very sensitive
              to outliers.
          </p>
          <Image
              src={img}
              alt="Decision Boundaries on a classification tree"
              author="Dvd8719 on Wikimedia"
              license="CC BY-SA 4.0 Deed"
              addBG={true}
              linkToLicense="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
          />
          <Image
              src={img2}
              alt="Decision Boundaries on a classification tree"
              author="Dvd8719 on Wikimedia"
              license="CC BY-SA 4.0 Deed"
              addBG={true}
              linkToLicense="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
          />
          <p>
              How do we know when to stop during training? With a decision tree we could just go until we get a train error of 0% but
              that will almost always result in over-fitting. A simple approach is to just limit the depth of the tree.
              Alternatively, we could also use the purity of a node as a stopping criterion. This is also a good approach
              because we need a measurement of purity anyways to decide how good our splits are.
          </p>
          <p>
              It is not a good idea to use the accuracy of our splits to measure purity. This is because our splits will
              usually result in imbalanced datasets which would always result in a high accuracy. Instead, a very popular
              way to measure purity is through the entropy for <Latex>$Y$</Latex> classes in a dataset <Latex>$D$</Latex> with
              the probability for each class <Latex>$y\in Y$</Latex> being <Latex>$p_y$</Latex>.
          </p>
          <Latex>
              {
                  "$$\\text{Entropy}(D)=H(D)=-\\sum_{y\\in Y}p_y\\log_2p_y$$"
              }
          </Latex>
          <p>
              If we calculate the entropy for the case that we only have on class in our dataset, we
              get <Latex>$-(1\cdot\log_2 1)=0$</Latex>. Likewise, we get the largest possible entropy (in the case of two
              classes) when both classes are split 50-50: <Latex>{"$ - 2(\\frac{1}{2}\\cdot\\log_2 \\frac{1}{2})=1$"}</Latex>. That
              means low entropy signifies high purity and vice versa.
          </p>
          <p>
              We can further define the information gain <Latex>$IG$</Latex> which is the change in entropy by a split:
          </p>
          <Latex>
              {
                  "$$IG(D)=\\underbrace{H(D)}_\\text{whole tree}-" +
                  "\\underbrace{\\frac{m_l}{m}H(D_l)}_\\text{left tree}-" +
                  "\\underbrace{\\frac{m_r}{m}H(D_r)}_\\text{right tree}$$"
              }
          </Latex>
          <p>
              Instead of entropy we can also use the Gini score and define the GiniIndex analogous to the information gain.
          </p>
          <Latex>
              {
                  "$$\\text{Gini}(D)=1-\\sum_{y\\in Y}p^2_y$$"
              }
          </Latex>
          <Latex>
              {
                  "$$\\text{GiniIndex}(D)=\\underbrace{\\text{Gini}(D)}_\\text{whole tree}-" +
                  "\\underbrace{\\frac{m_l}{m}\\text{Gini}(D_l)}_\\text{left tree}-" +
                  "\\underbrace{\\frac{m_r}{m}\\text{Gini}(D_r)}_\\text{right tree}$$"
              }
          </Latex>
      </Chapter>
    );
}

export default DecisionTrees;