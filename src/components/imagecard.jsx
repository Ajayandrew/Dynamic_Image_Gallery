import React from "react";

function ImageCard({ imageUrl, title, description }) {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={title} className="image" />
      <div className="image-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;
