import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/food-fest/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/food-fest/",
        element: <Body />,
      },
      {
        path: "/food-fest/about",
        element: <About />,
      },
      {
        path: "/food-fest/contact",
        element: <Contact />,
      },
      {
        path: "/food-fest/restaurant/:resId",
        element: <Menu />,
      },
      {
        path: "/food-fest/login",
        element: <Login />,
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);
