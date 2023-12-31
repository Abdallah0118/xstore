import React from "react";
import { useState } from "react";
import "./ProductImgSlider.css";

const ProductImgSlider = ({ images }) => {
  const [selected, setSelected] = useState(images[0]);
  const allImg = images;
  return (
    <div
      id="ProductImgSlider"
      className="flex items-center justify-center mx-auto mb-10 lg:mb-0"
    >
      <div className="imagesHolder">
        {allImg.map((img) => {
          return (
            <img
              key={images[images.indexOf(img)]}
              style={img === selected ? { border: "2px solid #3949ab" } : {}}
              className=""
              src={img}
              alt=""
              onClick={() => {
                setSelected(img);
              }}
            />
          );
        })}
      </div>
      <img className="mainImage" src={selected} alt="" />
    </div>
  );
};

export default ProductImgSlider;
