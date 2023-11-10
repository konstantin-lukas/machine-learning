import React from "react";
import "./Image.scss";

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
            <div className={addBG ? " background-on-image inner-image-container" : "inner-image-container"}>
                <img draggable={false} src={src} alt={alt}/>
            </div>
            <span>{author} <a href={linkToLicense}>{license}</a></span>
        </div>
    )
}

export default Image;