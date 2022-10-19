import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className="product">
      <img src={url || image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};

Product.propTypes = {
  image:PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  name: "defaultname",
  price: 3.88,
  image: defaultImage,
};

export default Product;
