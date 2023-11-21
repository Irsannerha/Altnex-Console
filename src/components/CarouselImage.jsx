import React from "react";

function CarouselImage(props) {
  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
  };

  return (
    <>
      <img style={imageStyle} src={props.image} alt={props.text} />
    </>
  );
}

export default CarouselImage;
