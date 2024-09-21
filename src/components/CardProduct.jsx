 
import { Link } from "react-router-dom";
import { priceFormat } from "../utils";
import PropTypes from 'prop-types';

const CardProduct = ({ item }) => {
  CardProduct.propTypes = {
    item: PropTypes.object.isRequired,
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
