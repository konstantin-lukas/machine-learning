import React, {useEffect, useMemo, useRef, useState} from 'react';
import Tree from "react-d3-tree";
import Chapter from "../Chapter";

function Chapter0() {
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
    return (
        <Chapter title="An Introduction to Machine Learning">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aut beatae distinctio eligendi eos id in iure laboriosam minima, modi molestiae nihil pariatur porro possimus quos recusandae tenetur voluptas.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aut beatae distinctio eligendi eos id in iure laboriosam minima, modi molestiae nihil pariatur porro possimus quos recusandae tenetur voluptas.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aut beatae distinctio eligendi eos id in iure laboriosam minima, modi molestiae nihil pariatur porro possimus quos recusandae tenetur voluptas.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aut beatae distinctio eligendi eos id in iure laboriosam minima, modi molestiae nihil pariatur porro possimus quos recusandae tenetur voluptas.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aut beatae distinctio eligendi eos id in iure laboriosam minima, modi molestiae nihil pariatur porro possimus quos recusandae tenetur voluptas.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aut beatae distinctio eligendi eos id in iure laboriosam minima, modi molestiae nihil pariatur porro possimus quos recusandae tenetur voluptas.
            </p>
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
    );
}

export default Chapter0;
