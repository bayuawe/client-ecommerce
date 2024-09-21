import { createBrowserRouter, RouterProvider } from "react-router-dom";

//components
import AboutView from "./page/AboutView.jsx";
import CartView from "./page/CartView.jsx";
import HomeView from "./page/HomeView.jsx";
import OrderView from "./page/OrderView.jsx";
import ProductView from "./page/ProductView.jsx";
import DetailProduct from "./page/DetailProduct.jsx";
import LoginView from "./page/auth/LoginView.jsx";
import RegisterView from "./page/auth/RegisterView.jsx";
import PublicLayout from "./Layouts/PublicLayout.jsx";

//loader
import { loader as HomeLoader } from "./page/HomeView.jsx";
import { loader as ProductLoader } from "./page/ProductView.jsx";

//action
import { action as LoginAction } from "./page/auth/LoginView.jsx";

//store
import { store } from "./store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
        loader: HomeLoader,
      },
      {
        path: "products",
        element: <ProductView />,
        loader: ProductLoader,
      },
      {
        path: "product/:id",
        element: <DetailProduct />,
      },
      {
        path: "carts",
        element: <CartView />,
      },
      {
        path: "orders",
        element: <OrderView />,
      },
      {
        path: "abouts",
        element: <AboutView />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginView />,
    action: LoginAction(store),
  },
  {
    path: "register",
    element: <RegisterView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
