import React from "react";
import Chapter from "./Chapter";
import Latex from "react-latex-next";
// @ts-ignore
import img from "../media/SAX.png";
import Image from "./Image";
import TimeSeriesClassification from "./chapters/TimeSeriesClassification";

function TimeSeries() {
    return (
        <Chapter title="Time Series" depth={1}>
            <p>
                In this chapter we will talk about how we can process data that was captured over some amount of time.
                Generally, we think of time series data as n-dimensional vectors where keep all the measured values
                but drop the time. So we just end up with a vector that contains an ordered collection of values. This
                of course only covers the case where we have only one feature. In these of multiple features each entry
                in our vector is itself a tuple of values each representing a feature.
            </p>
            <p>
                First, we will look at normalization because our data might be on different scales like Fahrenheit vs
                Celsius. We can normalize a time series by subtracting the mean value and dividing by the standard deviation
                from each entry in the series. This results in a mean of 0 and a standard deviation of 1.
            </p>
            <Latex>
                {
                    "$$x_j=\\frac{x_j-\\mu}{\\sigma}\\hspace{3em}" +
                    "\\mu=\\frac{1}{m}\\sum^m_{j=1}x_j\\hspace{3em}" +
                    "\\sqrt{\\frac{1}{m}\\sum^m_{j=1}(x_j-\\mu)^2}$$"
                }
            </Latex>
            <p>
                Alternatively, we can scale our time series by computing the min and max over all time series we have
                and calculating the following:
            </p>
            <Latex>
                {
                    "$$x_j=\\frac{x_j-\\min}{\\max-\\min}$$"
                }
            </Latex>
            <p>
                Keep in mind that max/min are across all time series not just one. This is a big difference to normalizing
                our vectors by calculating the mean and deviation for each series individually.
            </p>
            <p>
                When working with time series data, we can quickly end up with extremely high-dimensional vectors. To
                reduce dimensionality for noise filtering and faster process, one thing we can do is piecewise aggregate
                approximation. This just means that we divide our data into equally sized intervals and take the average
                for each. This gives us a staircase like effect on the data. A more complicated approach would be using
                Fourier Transforms. Something simpler is symbolic aggregate approximation (SAX) which transforms our data into
                a discrete sequence over an alphabet. Just like before, we take the average of certain intervals and
                then clip these to a value in our alphabet. We try to clip our values based on a normal distribution
                to get equal probabilities for each symbol.
            </p>
            <Image
                src={img}
                addBG={true}
                author="InterstitialSpace on Wikimedia"
                license="CC BY-SA 4.0 Deed"
                linkToLicense="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
                alt="Time Series conversion to SAX "
            />
            <p>
                So far, our machine learners have not taken into account the order of our data. This is something we
                need to fundamentally change to work with time series data. We differentiate two main types of representations:
            </p>
            <ol>
                <li>Global: consider series as a whole</li>
                <li>
                    Local: look at phase-independent sub-sequences
                    <ul style={{marginLeft: "2em"}}>
                        <li>Shapelets: absence/presence of characteristic substructures</li>
                        <li>Bag-of-patterns: frequency of characteristic substructures</li>
                    </ul>
                </li>
            </ol>
            <p>
                To be able to tell if two time series are similar we need to able to measure some sort of distance between
                them. The basic approach is just the euclidean distance for two time
                series <Latex>$Q=(q_1,\dots,q_n)$</Latex> and <Latex>$T=(t_1,\dots,t_n)$</Latex>.
            </p>
            <Latex>
                {
                    "$$D_{ED}(Q,T)=\\sqrt{\\sum_i(q_i-t_i)^2}$$"
                }
            </Latex>
            <p>
                This approach is very limited to having time series with the same length. It also deals with shifted
                phases very badly. This is why we need elastic distance measures which are invariant to translations and
                skews in time. What we do is dynamic time warping. This applies a transformation to the time axis to detect
                similar shapes with different phases. We need to do a peak-to-peak and valley-to-valley alignment by finding
                indices <Latex>$i$ and $j$</Latex> such that:
            </p>
            <Latex>
                {
                    "$$D_{DTW}(Q,T)=\\sqrt{\\sum_{(i,j)}(q_i-t_j)^2}$$"
                }
            </Latex>
            <p>
                We start off by computing a cost matrix with the distances between all value pairs of our time series.
                This matrix is essential <Latex>{"$M_{i,j}=(q_i-c_j)^2$"}</Latex>. A warping path in this matrix is
                defined as a set of index tuples that define a traversal of this matrix. This means each index pair can
                increase each of its indices by one at most during each step. The start index is (1,1) and the end index is (n,n).
                Valid steps after (1,1) are (1,2), (2,1), and (2,2).

            </p>
            <TimeSeriesClassification/>
        </Chapter>
    );
}

export default TimeSeries;