import customAPI from "../api";
import { useState, useEffect } from "react";

const HomeView = () => {
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    try {
      const { data } = await customAPI.get("/product/?limit=3");
      setProducts(data.dataProduct);
      console.log(data.dataProduct);
    } catch (error) {
      console.error("Error mengambil produk:", error);
    }
  };

  const priceFormat = (price) => {
    const rupiahFormat = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(price);
    return rupiahFormat;
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="text-start pb-5">
        <h2 className="text-3xl font-bold capitalize">
          products list
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((item) => (
          <div key={item._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="font-bold text-primary">{priceFormat(item.price)}</p>
              <p>{item.description.substring(0, 50)}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeView;
