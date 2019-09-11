import React from "react";

const ImageCard = props => {
  return (
    <div>
      <p>{props.copyright} </p>
      <img src={props.url} />
    </div>
  );
};

export default ImageCard;
