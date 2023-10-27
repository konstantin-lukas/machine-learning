import React from 'react';

function Chapter({ children }: { children: React.ReactNode }) {
    return (
        <div className="chapter">
            {children}
        </div>
    );
}

export default Chapter;
