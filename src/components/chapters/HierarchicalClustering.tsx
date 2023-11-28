import React from "react";
import Chapter, {titleToId} from "../Chapter";
// @ts-ignore
import img from "../../media/Dendrogram.png";
import Image from "../Image";
import Latex from "react-latex-next";

function HierarchicalClustering() {
    const chapterName = titleToId("Hierarchical Clustering");
    return (
        <Chapter title="Hierarchical Clustering" depth={2}>
            <p>
                Hierarchical clustering creates or merges clusters (top-down vs bottom-up) during the learning process
                unlike k-means which just has a set number of cluster from the beginning. The algorithm is pretty simple:
                we start off with each sample being its own cluster. Then we repetitively merge the closest clusters.
                Hierarchical clustering can be visualized with a dendrogram.
            </p>
            <style>
                {
                    "#" + chapterName + " .image-container img {\n" +
                    "   max-height: 80vh;\n" +
                    "}"
                }
            </style>
            <Image
                src={img}
                alt="Convergence of k-means clustering from an unfavorable starting position"
                author="PLOS ONE PHYLOGENY on Flickr"
                license="CC BY 2.0 Deed "
                addBG={true}
                linkToLicense="https://creativecommons.org/licenses/by/2.0/"
            />
            <p>
                At the end we get one large cluster which is why we need to pick a threshold where we stop merging clusters.
                In the above example a threshold of 3.5 would make sense as we would have three clusters for our three
                types of lilies.
            </p>
            <p>
                Since hierarchical clustering is measuring the distance between clusters and not points, we need to think
                about how to do that. Let's say we have two clusters <Latex>$C$ and $C^\prime$</Latex>. Below are some distance
                functions for clusters:
            </p>
            <ol>
                <li>
                    Single linkage: <Latex>{"$D(C,C^\\prime)=\\displaystyle\\min_{x\\in C, y\\in C^\\prime}\\|x-y\\|^2$"}</Latex>
                </li>
                <li>
                    Complete linkage: <Latex>{"$D(C,C^\\prime)=\\displaystyle\\max_{x\\in C, y\\in C^\\prime}\\|x-y\\|^2$"}</Latex>
                </li>
                <li>
                    Centroids: <Latex>{"$D(C,C^\\prime)=\\|\\mu^{(C)}-\\mu^{(C^\\prime)}\\|^2$"}</Latex>
                </li>
                <li>
                    Average pairwise distance: <Latex>{"$D(C,C^\\prime)=\\frac{1}{|C|\\cdot|C^\\prime|}\\displaystyle" +
                    "\\sum_{x\\in C, y\\in C^\\prime}\\|x-y\\|^2$"}</Latex>
                </li>
            </ol>
        </Chapter>
    );
}

export default HierarchicalClustering;