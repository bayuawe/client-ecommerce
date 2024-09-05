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

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: "products",
        element: <ProductView />,
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
