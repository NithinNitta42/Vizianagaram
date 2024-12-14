import PropTypes from 'prop-types';
import React from 'react';
import './ImageWithDescription.css';


function ImageWithDescription({ imageSrc, title, description, isImageRight }) {
    return (
        <div
            className={`image-description-container ${isImageRight ? 'row-reverse' : ''}`}
        >
            <img src={imageSrc} alt={title} className="image-section" />
            <div className="description-section">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

ImageWithDescription.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    isImageRight: PropTypes.bool,
};

ImageWithDescription.defaultProps = {
    imageSrc: "Error",
    title: "XXXXX",
    description: "----------",
    isImageRight: false,
};

export default ImageWithDescription;



