import React from "react";
import Chapter from "../Chapter";
// @ts-ignore
import img from "../../media/ConfusionTable.png";
import Image from "../Image";
import Latex from "react-latex-next";

function ErrorMetrics() {
    return (
      <Chapter title="Error Metrics" depth={1}>
          <p>
              When evaluating a model, it makes sense to look at things other than just the accuracy. An example would be
              a situation where we have "skewed" classes meaning that we have many samples in class A and only a couple in
              class B. If we just look at how many predictions were correct during testing, we will often get a very
              high accuracy because most of our data is from class A and we don't get a good feeling for how well our
              models performs when classifying things from class B.
          </p>
          <Image
              src={img}
              addBG={true}
              license=""
              linkToLicense=""
              alt="a confusion table"
          />
          <p style={{marginTop:"1em"}}>
              The above is called a confusion table. It gives us some terms we need to define performance evaluation
              metrics for our models.
          </p>
          <ol>
              <li><Latex>{"Accuracy = $\\frac{TP+TN}{TP+TN+FP+FN}$"}</Latex></li>
              <li><Latex>{"Precision = $\\frac{TP}{TP+FP}$"}</Latex></li>
              <li><Latex>{"Recall = $\\frac{TP}{TP+FN}$"}</Latex></li>
              <li><Latex>{"F1-Score = $\\frac{2\\cdot\\text{Precision}\\cdot\\text{Recall}}{\\text{Precision}+\\text{Recall}}$"}</Latex></li>
          </ol>
          <p>
              Keep in mind that theses metrics are per-feature meaning that the positives in the confusion table refer
              to a specific label and the negatives to all other labels. So, we can construct one confusion matrix for each
              feature. There are two ways to get the average over all classes. Let's say we want the average precision
              for our model. We can just calculate the precision for each label and then take the mean value of that.
              This is called macro-average. The alternative would be to accumulate the values of the confusion tables of
              all features and then calculate the precision from that. This is called micro-average. These two averages
              can of course not only be used with the precision, but with the other metrics as well.
          </p>
      </Chapter>
    );
}

export default ErrorMetrics;