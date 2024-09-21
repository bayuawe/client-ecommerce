 
import { useLoaderData, Link } from "react-router-dom";

const Hero = () => {
  const { products } = useLoaderData();
  return (
    <>
      <div className="grid  lg:grid-cols-2 gap-24 items-center">
        <div className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          <h1>Selamat Datang di Toko Kami</h1>
          <p className="mt-8 max-w-xl text-xl leading-8">
            Cari product favorit kamu
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/products" className="btn btn-primary btn-lg">
              Product List
            </Link>
          </div>
        </div>
        <div className="hidden lg:carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
          {products.map((item) => (
            <div className="carousel-item" key={item._id}>
              <img
                src={item.image}
                className="rounded-box object-cover w-40 h-48"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
