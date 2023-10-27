import React from 'react';

function Chapter({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="chapter" id={title.toLowerCase().replace(/\s/g,'-').replace(/[^\da-zA-Z\-]/g, '')}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default Chapter;
