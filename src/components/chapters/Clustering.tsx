import React from "react";
import Chapter from "../Chapter";
import KMeans from "./KMeans";
import HierarchicalClustering from "./HierarchicalClustering";

function Clustering() {
    return (
        <Chapter title="Clustering" depth={1}>
            <p>
                Unlike with classification or regression, we don't need labeled data because the labels are actually
                what we are trying to learn. That is the essence of clustering and more broadly speak unsupervised learning.
                We are not learning a decision boundary but the clusters in our data. This can help us find meaningful
                structure in our data.
            </p>
            <KMeans/>
            <HierarchicalClustering/>
        </Chapter>
    );
}

export default Clustering;