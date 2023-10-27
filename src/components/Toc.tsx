import React from 'react';
import './Toc.scss';
import {AiOutlineArrowLeft} from "react-icons/ai";
import {IoMdList} from "react-icons/io";


function Toc({isTocOpen, setIsTocOpen}: {isTocOpen: boolean, setIsTocOpen: (yes: boolean) => void}) {
    return (
        <>
            <IoMdList size={30} className="openTocButton" onClick={() => setIsTocOpen(true)}/>
            <aside id="table-of-contents" className={isTocOpen ? 'open' : ''}>
                <AiOutlineArrowLeft size={30} className="closeTocButton" onClick={() => setIsTocOpen(false)}/>
                <nav>
                    <ol>
                        <li>
                            <a href="">dawfgwa</a>
                        </li>
                        <li>
                            <a href="">dawfgwa</a>
                        </li>
                        <li>
                            <a href="">dawfgwa</a>
                        </li>
                    </ol>
                </nav>
            </aside>
        </>
    );
}

export default Toc;