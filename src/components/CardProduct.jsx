 
import { Link } from "react-router-dom";

const CardProduct = ({ item }) => {
  const priceFormat = (price) => {
    const rupiahFormat = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
    return rupiahFormat;
  };
  return (
    <>
      <div key={item._id} className="card bg-base-100 shadow-xl">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p className="font-bold text-primary">{priceFormat(item.price)}</p>
          <p>{item.description.substring(0, 50)}</p>
          <div className="card-actions justify-end">
            <Link to={`/product/${item._id}`} className="btn btn-primary">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
