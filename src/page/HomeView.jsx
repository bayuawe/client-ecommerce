import customAPI from "../api";
import CardProduct from "../components/CardProduct.jsx";
import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero.jsx";

export const loader = async ({ request }) => {
  const { data } = await customAPI.get("/product?limit=3");

  const products = data.dataProduct;
  return { products };
};

const HomeView = () => {
  const { products } = useLoaderData();
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="text-start pb-5 my-5">
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
