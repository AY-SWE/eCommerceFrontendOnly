import React from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useState } from "react";
const Products = () => {
    const [menuProducts, setMenuProducts] = useState(ProductsData);
  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Featured Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li>All</li>
          <li>Skin Care</li>
          <li>Conditioners</li>
          <li>Foundations</li>
        </ul>

        <div className={css.list}>
            {
                menuProducts.map((product, i)=>(
                    <div className={css.product}>
                        Products
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Products;
