import React from "react";
import AddToCart from "../AddToCart";
import styles from "./ProductCard.module.css";

styles.card;

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
