import customAPI from "../api";
import { useState, useEffect } from "react";
import CardProduct from "../components/CardProduct.jsx";

const HomeView = () => {
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    try {
      const { data } = await customAPI.get("/product?limit=3");
      setProducts(data.dataProduct);
      console.log(data.dataProduct);
    } catch (error) {
      console.error("Error mengambil produk:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="text-start pb-5">
        <h2 className="text-3xl font-bold capitalize">products list</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((item) => (
          <CardProduct key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};

export default HomeView;
