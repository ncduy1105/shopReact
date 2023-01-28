import React, { useContext } from "react";

import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-sm grid-cols-1 gap-[30px] md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product) => {
              return <Product {...product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
