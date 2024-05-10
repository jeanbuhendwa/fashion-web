import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Wishlist from "pages/Wishlist";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Wishlist /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
