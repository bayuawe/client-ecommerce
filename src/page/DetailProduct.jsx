import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customAPI from "../api";
import { FaPlus } from "react-icons/fa";
import { generateSelectedAmount, priceFormat } from "../utils";

const DetailProduct = () => {
  let { id } = useParams();
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleCart = async () => {
    console.log(amount);
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
            <div className="p-8 flex flex-col gap-y-4">
              <label className="form-control">
                <label className="label">
                  <span className="label-text capitalize">Amount</span>
                </label>
                <select name="amount" className="select select-bordered" onChange={handleAmount}>
                  {generateSelectedAmount(product.stock)}
                </select>
              </label>

              <button className="btn btn-primary" onClick={handleCart}>
                <FaPlus />
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
