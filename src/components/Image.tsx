import React from "react";
import "./Image.scss";
// @ts-ignore

function Image({src, author, alt, addBG, license, linkToLicense}: {
    src: any,
    author: string,
    alt: string,
    addBG?: boolean,
    license: string,
    linkToLicense: string
}) {
    return (
        <div className="image-container">
            <img className={addBG ? " background-on-image" : ""} draggable={false} src={src} alt={alt}/>
            <span>{author} <a href={linkToLicense}>{license}</a></span>
        </div>
    )
}

export default Image;