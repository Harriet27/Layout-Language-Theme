import React from "react";
import { useRoutes } from "react-router-dom";
import {
  Language,
  Theme,
  BothLT,
  Antd,
  FeaturedProducts,
  Product,
} from "./pages";

export default function Routes() {
    return useRoutes([
        {
            path: "/library",
            children: [
                { path: "language", element: <Language /> },
                { path: "theme", element: <Theme /> },
                { path: "both", element: <BothLT /> },
            ],
        },
        {
            path: "/extend",
            children: [
                { path: "antd", element: <Antd /> },
            ],
        },
        {
            path: "/dynamic-routing",
            children: [
                { path: "featured-products", element: <FeaturedProducts /> },
                { path: "product/:id", element: <Product /> },
            ],
        },
    ]);
};
