import React, { useContext } from "react";

// import Hero from "../components/Hero";
import LoadingImages from "../components/LoadingImages";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery" || item.category === "electronics"
    );
  });

  const showProducts = filteredProducts.map((product) => {
    return <Product product={product} key={product.id} />;
  });

  return (
    <div>
      
      <section className="pt-80 pb-20">
      <p className="title">Items List</p>
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-sm grid-cols-1 gap-[30px] md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {products.length === 0 ? <LoadingImages /> : showProducts}
          </div>
        </div>
      </section>
    </div>
<h1>hello</h1>
  );
};

export default Home;
