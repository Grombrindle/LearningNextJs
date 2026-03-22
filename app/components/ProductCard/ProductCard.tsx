import React from "react";
import AddToCart from "../AddToCart";
import styles from "./ProductCard.module.css";

styles.card;

const ProductCard = () => {
  return (
    // <div className={styles.card}>
    <div className="p-5 my-5 border bg-sky-300  text-white  text-2xl hover:bg-sky-600 rounded">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
