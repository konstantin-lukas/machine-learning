import {Chart as ChartJS, LinearScale, PointElement, Tooltip} from "chart.js";
import {Scatter} from "react-chartjs-2";
import {options, optionsDarkMode} from "./options";
import React, {useContext} from "react";
import {DarkModeContext} from "../../../contexts";
import annotationPlugin from 'chartjs-plugin-annotation';
ChartJS.register(LinearScale, PointElement, Tooltip, annotationPlugin);


function DecisionBoundaryChart() {
    const darkMode = useContext(DarkModeContext);
    return <Scatter
        data={{datasets: [
                {
                    label: 'Dataset 1',
                    data: [
                        {x: 8.68, y: 1},
                        {x: 9.76, y: 1},
                        {x: 10.39, y: 1},
                        {x: 5.52, y: 1},
                        {x: 6.25, y: 1},
                        {x: 12.74, y: 1},
                        {x: 10.71, y: 1},
                        {x: 11.58, y: 1},
                        {x: 15.98, y: 1},
                        {x: 6.42, y: 1}
                    ],
                    borderColor: "orange",
                    backgroundColor: "transparent",
                    pointStyle: "circle",
                    pointRadius: 6
                },
                {
                    label: 'Dataset 2',
                    data: [
                        {x: 3.68, y: 0},
                        {x: 3.76, y: 0},
                        {x: 3.9, y: 0},
                        {x: 5.52, y: 0},
                        {x: 6.25, y: 0},
                        {x: 4.74, y: 0},
                        {x: 5.71, y: 0},
                        {x: 2.58, y: 0},
                        {x: 6.98, y: 0},
                        {x: 1.42, y: 0}
                    ],
                    borderColor: "teal",
                    backgroundColor: "transparent",
                    pointStyle: "rectRot",
                    pointRadius: 6
                }
            ]}}
        options={{
            scales: {
                x: {
                    ...(darkMode ? optionsDarkMode : options).scales.x
                },
                y: {
                    ...(darkMode ? optionsDarkMode : options).scales.y
                }
            },
            plugins: {
                tooltip: {
                    displayColors: false,
                    padding: 10,
                    callbacks: {
                        label: function (context) {
                            return context.formattedValue;
                        }
                    }
                },
                annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            xMin: 7.5,
                            xMax: 7.5,
                            borderColor: 'red',
                            borderWidth: 1,
                        }
                    }
                }
            }
        }}
    />;
}

export default DecisionBoundaryChart;