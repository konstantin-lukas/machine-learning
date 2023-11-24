import React, {useState, useMemo} from 'react';
import './Main.scss';
import Toc, {TocItem} from "./Toc";
import Introduction from "./chapters/Introduction";
import NearestNeighbor from "./chapters/NearestNeighbor";
import LinearRegression from "./chapters/LinearRegression";
import PythonProgramming from "./chapters/PythonProgramming";
import PolynomialRegression from "./chapters/PolynomialRegression";
import LogisticRegression from "./chapters/LogisticRegression";
import NaiveBayes from "./chapters/NaiveBayes";
import ErrorMetrics from "./chapters/ErrorMetrics";
import Perceptron from "./chapters/Perceptron";
function Main() {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const headings = useMemo<TocItem[]>(() => [
        {
            title: "An Introduction to Machine Learning"
        },
        {
            title: "Nearest Neighbor",
            children: [
                {
                    title: "Distance Functions"
                }, {
                    title: "k-Nearest Neighbor",
                    children: [
                        {
                            title: "Cross Validation"
                        }
                    ]
                }
            ]
        },
        {
            title: "Linear Regression",
            children: [
                {
                    title: "Multivariate Regression"
                }
            ]
        },
        {
            title: "Polynomial Regression",
            children: [
                {
                    title: "Regularization"
                }
            ]
        },
        {
            title: "Logistic Regression",
            children: [
                {
                    title: "Gradient Descent"
                }
            ]
        },
        {
            title: "Naive Bayes"
        },
        {
            title: "Error Metrics"
        },
        {
            title: "Perceptron",
            children: [
                {
                    title: "Support Vector Machine"
                }
            ]
        },
        {
            title: "Python Programming",
            children: [
                {
                    title: "NumPy"
                }
            ]
        },
    ], []);
    return (
        <main className={(isTocOpen ? "toc-open" : "")}>
            <Toc
                isTocOpen={isTocOpen}
                setIsTocOpen={setIsTocOpen}
                headings={headings}
            />
            <div className="wrapper">
                <Introduction/>
                <NearestNeighbor/>
                <LinearRegression/>
                <PolynomialRegression/>
                <LogisticRegression/>
                <NaiveBayes/>
                <ErrorMetrics/>
                <Perceptron/>
                <PythonProgramming/>
            </div>
        </main>
    );
}

export default Main;