import React from "react";

const ImageCard = props => {
  return (
    <div>
      <p>{props.copyright} </p>
      <img src={props.url} alt="NASA image of the day" />
    </div>
  );
};

export default ImageCard;
