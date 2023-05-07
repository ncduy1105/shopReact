import React, { useContext } from "react";
import LoadingImages from "../components/LoadingImages";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";

const Jewelery = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "jewelery"
    );
  });

  const showProducts = filteredProducts.map((product) => {
    return <Product product={product} key={product.id} />;
  });

  return (
    <div>
  
      <section className="pt-80 pb-20">
        <p className="title">Jewelleries & Accessories</p>
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-sm grid-cols-1 gap-[30px] md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {products.length === 0 ? <LoadingImages /> : showProducts}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jewelery;
