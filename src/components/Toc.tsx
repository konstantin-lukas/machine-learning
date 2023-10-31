import React, {useMemo} from 'react';
import './Toc.scss';
import {AiOutlineArrowLeft} from "react-icons/ai";
import {IoMdList} from "react-icons/io";
import {titleToId} from "./Chapter";

export interface TocItem {
    title: string,
    children?: TocItem[]
}

function tocItemToTsxElement(item: TocItem) {

    const children = item?.children?.map(child => tocItemToTsxElement(child));
    return (
        <li key={titleToId(item.title)}/*style={{
            marginLeft: (2 + depth).toString() + "em",
            maxWidth: `calc(100% - ${3 + depth}em)`
        }}*/>
            <a href={"#" + titleToId(item.title)}>{item.title}</a>
            <ol>
                {children}
            </ol>
        </li>
    );
}
function Toc({isTocOpen, setIsTocOpen, headings}: {
    isTocOpen: boolean,
    setIsTocOpen: (yes: boolean) => void,
    headings: TocItem[]
}) {
    const listElements = useMemo(() => {
        return headings.map(heading => tocItemToTsxElement(heading));
    }, [headings]);
    return (
        <>
            <IoMdList size={30} className="openTocButton" onClick={() => setIsTocOpen(true)}/>
            <aside id="table-of-contents" className={isTocOpen ? 'open' : ''}>
                <AiOutlineArrowLeft size={30} className="closeTocButton" onClick={() => setIsTocOpen(false)}/>
                <nav>
                    <ol style={{
                        marginRight: "2em",
                        marginLeft: "0.5em"
                    }}>
                        {listElements}
                    </ol>
                </nav>
                <footer id="footer">
                    <a href="https://konstantinlukas.de/datenschutz">Privacy Policy</a>
                    <a href="https://konstantinlukas.de/impressum">Legal Notice</a>
                </footer>
            </aside>
        </>
    );
}

export default Toc;