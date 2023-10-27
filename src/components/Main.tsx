import React, {useEffect, useMemo, useRef, useState} from 'react';
import Tree from "react-d3-tree";
import Chapter from "./Chapter";
import './Main.scss';
import Toc from "./Toc";
function Main() {
    const orgChartData = useMemo(() => {
        return {
            name: 'Machine Learning',
            children: [
                {
                    name: 'Supervised Learning',
                    attributes: {Uses: 'labeled data'},
                    children: [
                        {
                            name: 'Classification',
                            attributes: {Predicts: 'a class'}
                        },
                        {
                            name: 'Regression',
                            attributes: {Predicts: 'a value'}
                        }
                    ]
                },{
                    name: 'Unsupervised Learning',
                    attributes: {Uses: 'unlabeled data'},
                    children: [
                        {
                            name: 'Clustering',
                            attributes: {Predicts: 'a class'}
                        }
                    ]
                },
            ],
        };
    }, []);
    const treeWrapperRef = useRef(null);
    const [treeWrapperSize, setTreeWrapperSize] = useState({x: 0, y: 0});
    useEffect(() => {
        if (treeWrapperRef.current) {
            const ref = treeWrapperRef.current as HTMLDivElement;
            setTreeWrapperSize({
                x: ref.getBoundingClientRect().width / 2,
                y: ref.getBoundingClientRect().height / 5.5
            });
        }
    }, [treeWrapperRef]);

    const [isTocOpen, setIsTocOpen] = useState(true);
    return (
        <main className={(isTocOpen ? "toc-open" : "")}>
            <Toc isTocOpen={isTocOpen} setIsTocOpen={setIsTocOpen}/>
            <div className="wrapper">
                <h1>An Introduction to Machine Learning</h1>
                <Chapter title="IGWHOGWI dwa da ds JFIPOAJW!2ää??ß$">
                    <div ref={treeWrapperRef} style={{
                        width: '100%',
                        height: '30em',
                        border: 'rgba(255,255,255,0.5) 3px solid',
                        boxSizing: "border-box",
                        borderRadius: "20px",
                        overflow: "hidden"
                    }}>
                        <Tree
                            data={orgChartData}
                            orientation="vertical"
                            draggable={true}
                            zoomable={true}
                            collapsible={true}
                            zoom={1}
                            translate={treeWrapperSize}
                            separation={{siblings: 2, nonSiblings: 2}}
                            rootNodeClassName="node__root"
                            branchNodeClassName="node__branch"
                            leafNodeClassName="node__leaf"
                            pathClassFunc={() => 'path'}
                            hasInteractiveNodes={false}
                        />
                    </div>
                </Chapter>
            </div>
        </main>
    );
}

export default Main;
