import React from "react";
import Chapter from "../Chapter";

function TimeSeriesClassification() {
    return (
        <Chapter title="Time Series Classification" depth={2}>
            <p>
                Let's say we have a training set which consists of m time series and labels. This could be audio recordings
                and strings representing what the recordings are of. We can do a very basic (k-)nearest neighbor approach
                because we have already defined distance functions for our time series. So we just look for the time
                series that is closest to our input and return its label.
            </p>
            <p>
                Something we can also do is called landmark classification where we add a feature for every time series
                in our training data. These new features contain the distances to all other time series.
            </p>
            <p>
                Shapelets are a different approach where we extract sub-sequences that are representative of a class.
                The questions is how do we compare shapelets? This is actually pretty easy. We just move a sliding window
                over our time series data and look for the minimal distance between our sliding window and our shapelet.
                The more difficult question is how do we discover shapelets? The algorithm to find new shapelets is actually
                very complex in its runtime but easy to understand: we perform an exhaustive search of all subsequences
                between a predefined min and max. And then we look at all these subsequences and measure how good they
                are at splitting our data. So we are looking at the purity of our data after splitting by a subsequence.
                This is similar to decision trees and we actually use the information gain to measure purity here.
                We measure the distance of our time series from our shapelet candidate and put these distances on a timeline.
                We then try to find a point on this timeline that best splits our time series into two groups.
            </p>
            <p>
                Besides shapelets, the bag-of-patterns approach is also really popular. This approach is basic on SAX where
                we create symbolic representations of our time series data. We once again use a sliding window with which
                we pass over the entire time series. During every step that we take with the sliding window we convert
                the current window into a word using SAX or SFA. Then we can display how often words appeared in a histogram.
                We can then use this histogram to train a machine learner.
            </p>
            <p>
                Lastly, let's talk about motifs. A motif is a reoccurring pattern within a single time series unlike
                with shapelets where we are looking for a pattern across different time series. Another difference is
                that motif discovery is unsupervised whereas shapelet discovery is supervised. There are two overarching
                types of motifs.
            </p>
            <ol>
                <li>
                    Pair motifs: two (non-overlapping) subsequences with minimal distance
                </li>
                <li>
                    Motif sets: set of similar (non-overlapping) subsequences with highest number of repetitions
                </li>
            </ol>
        </Chapter>
    );
}

export default TimeSeriesClassification;