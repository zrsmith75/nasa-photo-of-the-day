import React from "react";
import ImageCard from "./ImageCard";
const ImageContainer = props => {
  return (
    <div className="image-container">
      <ImageCard
        key={"image_" + 1}
        copyright={props.copyright}
        url={props.url}
        hdurl={props.hdurl}
      />
    </div>
  );
};

export default ImageContainer;
