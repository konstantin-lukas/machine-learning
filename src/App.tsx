import React, {useMemo, useState} from 'react';
import './App.scss';
import Chapter from "./components/Chapter";
import Header from "./components/Header";
import {DarkModeContext} from "./contexts";
import Tree from 'react-d3-tree';


function App() {
    const [darkMode, setDarkMode] = useState(true);
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
        <DarkModeContext.Provider value={darkMode}>
            <div className={"App" + (darkMode ? " dark-mode" : "")}>
                <Header toggleDarkMode={() => setDarkMode(!darkMode)}/>
                <Chapter>
                    <div style={{ paddingTop: '200px', width: '100%', height: '30em'}}>
                        <Tree
                            data={orgChartData}
                            orientation="vertical"
                            draggable={true}
                            zoomable={true}
                            collapsible={true}
                            zoom={1}
                            translate={{x: window.screenX / 2, y: 30}}
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
        </DarkModeContext.Provider>
    );
}

export default App;
