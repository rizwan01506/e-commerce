import React from "react";
import ProductCard from "../home/ProductCard";

function PopularCardsList({ productarray }) {
  return (
    <>
      <div className="container flex justify-center lg:justify-start flex-wrap">
        {productarray && productarray.length > 0
          ? productarray.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))
          : "No Results found!"}
      </div>
    </>
  );
}

export default PopularCardsList;
