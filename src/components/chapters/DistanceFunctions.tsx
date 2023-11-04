import React from 'react';
import Chapter from "../Chapter";
import Image from "../Image";
import Latex from "react-latex-next";

function DistanceFunctions() {
    return (
        <Chapter title="Distance Functions">
            <p>
                In the above example we were looking at the direct distance between points. This is called euclidean distance.
                There are however other ways we measure distance/similarity. We can generalize the euclidean distance to
                get a function with a variable parameter <Latex>p</Latex>. Below you can find the generalized distance function
                for two vectors <Latex>{"$x,y\\in\\mathbb{R}^n$"}</Latex>,
                called the Minkowski distance. <Latex>$L_2$</Latex> specifically is called euclidean distance.
                <Latex>
                    {"$$L_p=\\|x-y\\|_p=\\left(\\sum^n_{i=1}(x_i-y_i)^2\\right)^{\\frac{1}{p}}$$"}
                </Latex>
                An implementation detail to mention: we often disregard the outer root (square root in the case of the
                euclidean distance) when we just want to compare the distance of vectors. This is because taking the root
                is a costly operation that does not change the relative size of numbers to each other. You should also know
                that <Latex>{"$L_\\infty$"}</Latex> exists:
                <Latex>
                    {"$$L_\\infty=\\|x-y\\|_\\infty=\\max_i\\|x-y\\|$$"}
                </Latex>
            </p>
            <p>
                Below you can see what the unit circle looks like for each distance function, that is each shape drawn
                from all points with a distance of one from the center.
            </p>
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/00/2D_unit_balls.svg"
                alt="An image showing unit circles for different Minkowski distances"
                author="Waldyrious on Wikipedia"
            />
            <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Aliquam aut corporis debitis deserunt ducimus, et impedit inventore iure magni quo quod sint unde. Dolor eveniet ipsam officia rerum sequi voluptates?
            </p>
        </Chapter>
    );
}

export default DistanceFunctions;