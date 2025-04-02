import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Home/Home.jsx";
import About from "../Components/About/About.jsx";
import Contact from "../Components/Contact/Contact.jsx";
import ProductDetails from "../Components/DetailsProdect/ProdectDetails.jsx";
import CategoryPage from "./Home/Category/CategoryPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",         
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // ✅ Home Page
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "category/:name", element: <CategoryPage /> }, // ✅ Category Page
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
