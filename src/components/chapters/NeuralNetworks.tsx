import React from "react";
import Chapter from "../Chapter";
// @ts-ignore
import img from "../../media/Perceptron.png";
// @ts-ignore
import img2 from "../../media/NeuralNetwork.png";
import Image from "../Image";
import Latex from "react-latex-next";

function NeuralNetworks() {
    return (
        <Chapter title="Neural Networks" depth={2}>
            <p>
                Neural networks combine multiple perceptrons to create a network. The network has multiple layers with
                a fixed amount of perceptrons. Perceptrons mimic the functionality of neurons in the human brain.
                Perceptrons can only solve linear problems and by combining multiple into a network, we can solve much
                harder problems. Here's a reminder of how a perceptron works:
            </p>
            <Image
                src={img}
                addBG={true}
                author="Mayranna on Wikimedia"
                license="CC BY-SA 3.0 Deed"
                linkToLicense="https://creativecommons.org/licenses/by-sa/3.0/deed.en"
                alt="illustration of a perceptron"
            />
            <p>
                In a neural network we have an input layer which consists of our feature vector. Then we have any amount
                of hidden layers and an output layer at the end. Each edge between the layers gets its own weight. Each
                node in the hidden layers and output layer produces an output between 0 and 1.
            </p>
            <Image
                src={img2}
                addBG={true}
                author="Loxaxs on Wikimedia"
                license="CC0 1.0 Deed"
                linkToLicense="https://creativecommons.org/publicdomain/zero/1.0/deed.en"
                alt="illustration of a neural network"
            />
            <p>
                We will us the following naming schema:
            </p>
            <ol>
                <li>
                    <Latex>{"$w_{ij}^{(l)}$"}</Latex> = weight from the <Latex>{"$j$"}</Latex>-th node in layer <Latex>{"$l$"}</Latex> to the <Latex>{"$i$"}</Latex>-th node on the next layer
                </li>
                <li>
                    <Latex>{"$a_i^{(l)}$"}</Latex> = activation of unit <Latex>{"$i$"}</Latex> in layer <Latex>{"$l$"}</Latex>
                </li>
                <li>
                    <Latex>{"$W^{(l)}$"}</Latex> = weight matrix mapping layer <Latex>{"$l$"}</Latex> to <Latex>{"$l + 1$"}</Latex>
                </li>
                <li>
                    <Latex>$\sigma$</Latex> = activation function
                </li>
            </ol>
            <p>
                Each node takes takes the inputs from the previous layer and multiplies them with the respective weights.
                So each node has to do one operator for each node in the previous layer and also add a bias weight which
                we will call <Latex>{"$w_{i0}^{(l)}$"}</Latex>. Let's assume we have 3 nodes per layer. Here's an example
                for the activation for a single node on layer 2:
            </p>
            <Latex>
                {
                    "$$a_2^{(2)}=\\sigma(w_{20}^{(1)}+w_{21}^{(1)}+w_{22}^{(1)}+w_{23}^{(1)})$$"
                }
            </Latex>
            <p>
                We can put these weights into a layer-wise matrix to allow for easier math:
            </p>
            <Latex>
                {
                    "$$W^{(1)}=\\begin{pmatrix}" +
                    "w_{10}^{(1)}&w_{11}^{(1)}&w_{12}^{(1)}&w_{13}^{(1)}\\\\" +
                    "w_{20}^{(1)}&w_{21}^{(1)}&w_{22}^{(1)}&w_{23}^{(1)}\\\\" +
                    "w_{30}^{(1)}&w_{31}^{(1)}&w_{32}^{(1)}&w_{33}^{(1)}" +
                    "\\end{pmatrix}\\hspace{3em}" +
                    "a^{(1)}=x=\\begin{pmatrix}" +
                    "1\\\\" +
                    "x_1\\\\" +
                    "x_2\\\\" +
                    "x_3" +
                    "\\end{pmatrix}$$"
                }
            </Latex>
            <p>
                We multiply this matrix with the input from our previous layer to get the activations for the next layer.
                Of course we need to add a 1 initially for the bias.
            </p>
            <Latex>
                {
                    "$$a^{(l+1)}=\\sigma(W^{(l)}x)$$"
                }
            </Latex>
            <p>
                This whole process of prediction making is called forward propagation. The amount of neurons per layer
                doesn't have to be consistent by the way. We can easily adjust the layer size for each through the
                dimensions of <Latex>$W$</Latex>. Also, if we want to make multi-class predictions, we use one-hot encoding
                for both the input and output.
            </p>
        </Chapter>
    );
}

export default NeuralNetworks;