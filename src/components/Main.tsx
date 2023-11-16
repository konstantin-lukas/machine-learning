import React, {useState, useMemo} from 'react';
import './Main.scss';
import Toc, {TocItem} from "./Toc";
import Introduction from "./chapters/Introduction";
import NearestNeighbor from "./chapters/NearestNeighbor";
import LinearRegression from "./chapters/LinearRegression";
import PythonProgramming from "./chapters/PythonProgramming";
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
                <PythonProgramming/>
            </div>
        </main>
    );
}

export default Main;
