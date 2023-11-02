import React, {useState, useMemo} from 'react';
import './Main.scss';
import Toc, {TocItem} from "./Toc";
import Introduction from "./chapters/Introduction";
import NearestNeighbor from "./chapters/NearestNeighbor";
function Main() {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const headings = useMemo<TocItem[]>(() => [
        {
            title: "An Introduction to Machine Learning"
        },
        {
          title: "Python Programming"
        },
        {
            title: "Supervised Learning",
            children: [
                {
                    title: "Classification",
                    children: [
                        {
                            title: "Nearest Neighbor"
                        }
                    ]
                },
                {
                    title: "Regression",
                }
            ]
        },
        {
            title: "Unsupervised Learning",
            children: [
                {
                    title: "Clustering",
                }
            ]
        }
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
            </div>
        </main>
    );
}

export default Main;
