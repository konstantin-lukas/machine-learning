import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header";
import {DarkModeContext} from "./contexts";
import Main from "./components/Main";


function App() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <DarkModeContext.Provider value={darkMode}>
            <div className={"App" + (darkMode ? " dark-mode" : "")}>
                <Header toggleDarkMode={() => setDarkMode(!darkMode)}/>
                <Main/>
            </div>
        </DarkModeContext.Provider>
    );
}

export default App;
