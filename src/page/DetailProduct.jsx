import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customAPI from "../api";
import { FaPlus } from "react-icons/fa";

const DetailProduct = () => {
  let { id } = useParams();
  const [product, setProduct] = useState("");

  const priceFormat = (price) => {
    const rupiahFormat = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
    return rupiahFormat;
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await customAPI.get(`/product/${id}`);
        setProduct(data.data);
      } catch (error) {
        console.error("Gagal memuat produk: ", error);
      }
    };

    getProduct();
  }, [id]);

  return (
    <section>
      <div className="card lg:card-side bg-base-200 shadow-xl">
        <figure>
          <div className="badge badge-primary text-dark absolute top-0 left-0 m-4 p-2 text-xs font-bold uppercase rounded-full">
            {product.category}
          </div>
          <img
            src={product.image}
            alt={product.name}
            className="h-[500px] w-[500px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <span className="text-3xl text-accent font-bold">
            {priceFormat(product.price)}
          </span>
          <span className="mt-3 font-bold">Stock : {product.stock}</span>
          <p className="mt-3">{product.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <FaPlus />
              Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
