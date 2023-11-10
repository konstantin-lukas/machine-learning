import {Chart as ChartJS, LinearScale, PointElement, Tooltip} from "chart.js";
import {Scatter} from "react-chartjs-2";
import {options, optionsDarkMode} from "./options";
import React, {useContext} from "react";
import {DarkModeContext} from "../../../contexts";
ChartJS.register(LinearScale, PointElement, Tooltip);


function NearestNeighborChart() {
    const darkMode = useContext(DarkModeContext);
    return <Scatter
        data={{datasets: [
                {
                    label: 'Dataset 1',
                    data: [
                        {x: 4.68, y: 7.81},
                        {x: 5.76, y: 3.87},
                        {x: 3.39, y: 3.48},
                        {x: 4.52, y: 2.62},
                        {x: 3.25, y: 6.89},
                        {x: 5.74, y: 5.02},
                        {x: 5.71, y: 5.62},
                        {x: 4.58, y: 6.04},
                        {x: 5.98, y: 5.76},
                        {x: -7.13, y: -6.83}
                    ],
                    borderColor: "orange",
                    backgroundColor: "transparent",
                    pointStyle: "circle",
                    pointRadius: 6
                },
                {
                    label: 'Dataset 2',
                    data: [
                        {x: -7.16, y: -5.19},
                        {x: -8.24, y: -9.13},
                        {x: -6.61, y: -8.52},
                        {x: -7.48, y: -10.38},
                        {x: -6.75, y: -4.11},
                        {x: -8.26, y: -6.98},
                        {x: -8.29, y: -6.38},
                        {x: -7.42, y: -7.96},
                        {x: -6.02, y: -7.24},
                        {x: -5.76, y: -8.66}
                    ],
                    borderColor: "teal",
                    backgroundColor: "transparent",
                    pointStyle: "rectRot",
                    pointRadius: 6
                },
                {
                    label: 'Dataset 3',
                    data: [
                        {x: -6.83, y: -6.53}
                    ],
                    borderColor: "red",
                    backgroundColor: "transparent",
                    pointStyle: "triangle",
                    pointRadius: 6
                }
            ]}}
        options={{
            scales: {
                x: {
                    ...(darkMode ? optionsDarkMode : options).scales.x,
                    grace: "3%"
                },
                y: {
                    ...(darkMode ? optionsDarkMode : options).scales.y,
                    grace: "3%"
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
                }
            }
        }}
    />;
}

export default NearestNeighborChart;