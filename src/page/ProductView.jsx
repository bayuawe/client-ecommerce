 
import customAPI from "../api";
import { useLoaderData } from "react-router-dom";
import Filter from "../components/Filter";
import CardProduct from "../components/CardProduct";
import Pagination from "../components/Pagination";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const { data } = await customAPI.get("/product", { params: params });

  // console.log(params);
  const products = data.data;
  // console.log(products);
  const pagination = data.pagination;

  return { products, params, pagination };
};

const ProductView = () => {
  const { products, pagination } = useLoaderData();
  console.log(products);
  return (
    <>
      <Filter />

      <div className="text-start pb-5 my-5">
        <h2 className="text-3xl font-bold capitalize mb-4">products list</h2>
        <h2 className="text-md text-primary font-bold text-right my-3">
          Total: {pagination.totalProduct} Product
        </h2>
        <div className="grid md:grid-cols-3 gap-3">
          {!products.length ? (
            <p className="text-sm italic">produk tidak ditemukan</p>
          ) : (
            products.map((item) => <CardProduct key={item._id} item={item} />)
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <Pagination pagination={pagination} />
      </div>
    </>
  );
};

export default ProductView;
