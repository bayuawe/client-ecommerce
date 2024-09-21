import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.userState.user);
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className=" mx-auto max-w-6xl px-8 flex justify-center sm:justify-end">
        {user ? (
          <div className="flex md:gap-x-4 gap-x-2  items-center">
            <div>Hi, {user.name}</div>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign In
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
