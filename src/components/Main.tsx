import React, {useState, useMemo} from 'react';
import './Main.scss';
import Toc, {TocItem} from "./Toc";
import Chapter0 from "./chapters/Chapter0";
function Main() {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const headings = useMemo<TocItem[]>(() => [
        {
            title: "An Introduction to Machine Learning",
            children: [
                {
                    title: "Supervised Learning",
                    children: [
                        {
                            title: "Classification",
                        },
                        {
                            title: "Regression",
                        }
                    ]
                },
                {
                    title: "Unsupervised Learning",
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
                <Chapter0/>
            </div>
        </main>
    );
}

export default Main;
