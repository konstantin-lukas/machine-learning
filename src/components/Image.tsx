import React from "react";
import "./Image.scss";

function Image({src, author, alt}: {src: string, author: string, alt: string}) {
    return (
        <div className="image-container">
            <img draggable={false} src={src} alt={alt}/>
            <span>{author}</span>
        </div>
    )
}

export default Image;