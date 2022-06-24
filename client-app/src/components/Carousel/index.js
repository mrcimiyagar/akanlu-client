import React from "react";

const Carousel = () => {
  return (
    <iframe frameBorder={0} title={"carousel" + Math.random()} src="https://carousel.kasperian.cloud" style={{width: '100%', height: '100%'}} />
  );
};

export default Carousel;
