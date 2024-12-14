import React from 'react';
import './Heading.css';

function Heading({ text }) {
    return (
        <div className="heading-container">
            <h1 className="heading">{text}</h1>
        </div>
    );
}

export default Heading;
