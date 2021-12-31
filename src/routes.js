import React, { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";

const NotFound404 = lazy(() => import("./pages/404"));
const Language = lazy(() => import("./pages/language"));
const Theme = lazy(() => import("./pages/theme"));
const BothLT = lazy(() => import("./pages/bothLT"));
const Antd = lazy(() => import("./pages/antd"));
const FeaturedProducts = lazy(() => import("./pages/featuredProducts"));
const Product = lazy(() => import("./pages/products"));

export default function Routes() {
    return useRoutes([
        {
            path: "/library",
            children: [
                { element: <Navigate to="/library/language" replace /> },
                {
                    path: "language",
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Language />
                        </Suspense>
                    ),
                },
                {
                    path: "theme",
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Theme />
                        </Suspense>
                    ),
                },
                {
                    path: "both",
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <BothLT />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "/extend",
            children: [
                {
                    path: "antd",
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Antd />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "/dynamic-routing",
            children: [
                {
                    path: "featured-products",
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <FeaturedProducts />
                        </Suspense>
                    ),
                },
                {
                    path: "product/:id",
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Product />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "/",
            children: [
                {
                    path: "404",
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <NotFound404 />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ]);
};
