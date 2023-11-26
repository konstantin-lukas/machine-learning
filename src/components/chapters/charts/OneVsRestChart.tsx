import {Chart as ChartJS, LinearScale, PointElement, Tooltip} from "chart.js";
import {Scatter} from "react-chartjs-2";
import {options, optionsDarkMode} from "./options";
import React, {useContext, useMemo} from "react";
import {DarkModeContext} from "../../../contexts";
import annotationPlugin from 'chartjs-plugin-annotation';
ChartJS.register(LinearScale, PointElement, Tooltip, annotationPlugin);


function OneVsRestChart() {
    const darkMode = useContext(DarkModeContext);
    const data = useMemo(() => {
        return [
            [
                { x: 10, y: 20 },
                { x: 15, y: 25 },
                { x: 12, y: 18 },
                { x: 8, y: 22 },
                { x: 14, y: 28 },
                { x: 11, y: 16 },
                { x: 7, y: 24 },
                { x: 13, y: 30 },
                { x: 10, y: 18 },
                { x: 16, y: 24 },
                { x: 13, y: 20 },
                { x: 9, y: 26 },
                { x: 15, y: 22 },
                { x: 12, y: 16 },
                { x: 8, y: 28 },
                { x: 14, y: 20 },
                { x: 11, y: 24 },
                { x: 7, y: 20 },
                { x: 13, y: 26 },
                { x: 10, y: 22 },
            ],
            [
                { x: 30, y: 40 },
                { x: 35, y: 45 },
                { x: 32, y: 38 },
                { x: 28, y: 42 },
                { x: 34, y: 48 },
                { x: 31, y: 36 },
                { x: 27, y: 44 },
                { x: 33, y: 40 },
                { x: 30, y: 38 },
                { x: 36, y: 44 },
                { x: 33, y: 40 },
                { x: 29, y: 46 },
                { x: 35, y: 42 },
                { x: 32, y: 36 },
                { x: 28, y: 48 },
                { x: 34, y: 40 },
                { x: 31, y: 44 },
                { x: 27, y: 40 },
                { x: 33, y: 46 },
                { x: 30, y: 42 },
            ],
            [
                { x: 10, y: 60 },
                { x: 15, y: 65 },
                { x: 12, y: 58 },
                { x: 18, y: 62 },
                { x: 14, y: 68 },
                { x: 11, y: 56 },
                { x: 17, y: 64 },
                { x: 13, y: 60 },
                { x: 10, y: 58 },
                { x: 16, y: 64 },
                { x: 13, y: 60 },
                { x: 19, y: 66 },
                { x: 15, y: 62 },
                { x: 12, y: 56 },
                { x: 18, y: 68 },
                { x: 14, y: 60 },
                { x: 11, y: 64 },
                { x: 17, y: 60 },
                { x: 13, y: 66 },
                { x: 10, y: 62 },
            ]
        ]
    }, []);
    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <div style={{
                flex: "1 1 0",
                display: "flex",
                justifyContent: "center"
            }}>
                <Scatter
                    data={{datasets: [
                            {
                                label: 'Dataset 1',
                                data: data[0],
                                borderColor: "teal",
                                backgroundColor: "transparent",
                                pointStyle: "circle",
                                pointRadius: 6
                            },
                            {
                                label: 'Dataset 2',
                                data: data[1],
                                borderColor: "orange",
                                backgroundColor: "transparent",
                                pointStyle: "rectRot",
                                pointRadius: 6
                            },
                            {
                                label: 'Dataset 3',
                                data: data[2],
                                borderColor: "orange",
                                backgroundColor: "transparent",
                                pointStyle: "triangle",
                                pointRadius: 6
                            }
                        ]}}
                    options={{
                        responsive: true,
                        scales: {
                            x: {
                                ...(darkMode ? optionsDarkMode : options).scales.x,
                                ticks: { display: false }
                            },
                            y: {
                                ...(darkMode ? optionsDarkMode : options).scales.y,
                                ticks: { display: false }
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
                                        xMin: 5,
                                        xMax: 40,
                                        yMin: 50,
                                        yMax: 10,
                                        borderColor: 'red',
                                        borderWidth: 1,
                                    }
                                }
                            }
                        }
                    }}
                />
            </div>
            <div style={{
                flex: "1 1 0",
                display: "flex",
                justifyContent: "center"
            }}>
                <Scatter
                    data={{datasets: [
                            {
                                label: 'Dataset 1',
                                data: data[0],
                                borderColor: "orange",
                                backgroundColor: "transparent",
                                pointStyle: "circle",
                                pointRadius: 6
                            },
                            {
                                label: 'Dataset 2',
                                data: data[1],
                                borderColor: "teal",
                                backgroundColor: "transparent",
                                pointStyle: "rectRot",
                                pointRadius: 6
                            },
                            {
                                label: 'Dataset 3',
                                data: data[2],
                                borderColor: "orange",
                                backgroundColor: "transparent",
                                pointStyle: "triangle",
                                pointRadius: 6
                            }
                        ]}}
                    options={{
                        responsive: true,
                        scales: {
                            x: {
                                ...(darkMode ? optionsDarkMode : options).scales.x,
                                ticks: { display: false }
                            },
                            y: {
                                ...(darkMode ? optionsDarkMode : options).scales.y,
                                ticks: { display: false }
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
                                        xMin: 21,
                                        xMax: 23,
                                        yMin: 10,
                                        yMax: 70,
                                        borderColor: 'red',
                                        borderWidth: 1,
                                    }
                                }
                            }
                        }
                    }}
                />
            </div>
            <div style={{
                flex: "1 1 0",
                display: "flex",
                justifyContent: "center"
            }}>
                <Scatter
                    data={{datasets: [
                            {
                                label: 'Dataset 1',
                                data: data[0],
                                borderColor: "orange",
                                backgroundColor: "transparent",
                                pointStyle: "circle",
                                pointRadius: 6
                            },
                            {
                                label: 'Dataset 2',
                                data: data[1],
                                borderColor: "orange",
                                backgroundColor: "transparent",
                                pointStyle: "rectRot",
                                pointRadius: 6
                            },
                            {
                                label: 'Dataset 3',
                                data: data[2],
                                borderColor: "teal",
                                backgroundColor: "transparent",
                                pointStyle: "triangle",
                                pointRadius: 6
                            }
                        ]}}
                    options={{
                        responsive: true,
                        scales: {
                            x: {
                                ...(darkMode ? optionsDarkMode : options).scales.x,
                                ticks: { display: false }
                            },
                            y: {
                                ...(darkMode ? optionsDarkMode : options).scales.y,
                                ticks: { display: false }
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
                                        xMin: 5,
                                        xMax: 40,
                                        yMin: 40,
                                        yMax: 70,
                                        borderColor: 'red',
                                        borderWidth: 1,
                                    }
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default OneVsRestChart;