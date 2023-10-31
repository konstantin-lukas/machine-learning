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
                I have written this introduction to machine learning as a way for me to recall these concepts quickly.
                However, I believe it can serve as a learning resource for anyone. You can find the source code of this
                website on <a href="https://github.com/konstantin-lukas/machine-learning" target="_blank" rel="noreferrer">Github</a>.
                Feel free to do with it whatever you want. There might be errors or incomplete bits in this text so if
                you see anything funny, reporting these errors is much appreciated. This introduction covers basic machine
                learning concepts, simple algorithms, and python programming.
            </p>
            <p>
                There are various types of machine learning. We will start with 3 basic types: classification, regression,
                and clustering. Classification and regression are a type of machine learning called supervised learning.
                Supervised means that our training data has labels. An example would be a bunch of images of animals
                that have tags like 'cat' or 'dog' depending on what's shown in the image. When we do classification, we
                are trying to learn an algorithm to classify things. To keep with the animal photo example for a moment,
                we could teach our AI to take a photo of an animal as an input and return the name of the animal in that
                picture.
            </p>
            <p>
                Regression is another type of supervised learning where we try to predict a continuous value rather than
                a class. An example of this would be trying to predict salaries based on job descriptions. This often works
                similarly to classification, except that classification uses an activation function at the end to produce
                a discrete value (a class).
            </p>
            <p>
                Finally, there is clustering, which is a type of unsupervised learning. In unsupervised learning, we have
                training data without labels. If we go back to our animal pictures, we would only have the pictures and
                no tags that say the type of animal. With clustering, our AI would learn the classes to make predictions
                from as opposed to just learn to classify things into categories specified by us. The classes learned
                from clustering don't have to be simple categories like 'cat' or 'dog' and are often not as
                obvious to humans. Depending on the parameters we use, we could end up just classifying cats and dogs but
                animal photos could also be categorized by if they were taken inside or outside, or whether the animal
                is looking at the camera, or any combination of the above. The point is, we can learn categories without
                even caring about what they are.
            </p>
            <div className="figure-frame" ref={treeWrapperRef} style={{
                width: '100%',
                height: '30em'
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
