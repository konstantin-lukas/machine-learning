import React, {useContext} from 'react';
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs";
import {DarkModeContext} from "../contexts";
import './Header.scss';


function Header({ toggleDarkMode }: {
    toggleDarkMode: () => void
}) {
    const darkMode = useContext(DarkModeContext);
    const toggleButton = darkMode ?
        <BsFillSunFill size={30} className={"toggle-button"} onClick={toggleDarkMode}/> :
        <BsFillMoonFill size={30} className={"toggle-button"} onClick={toggleDarkMode} color={'#282c34'}/>;
    return (
        <header>
            {toggleButton}
        </header>
    );
}

export default Header;
