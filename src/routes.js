import React, { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Loader from "./components/loader";

const NotFound404 = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./pages/404')), 1000);
    });
});
const Language = lazy(() => import("./pages/language"));
const Theme = lazy(() => import("./pages/theme"));
const BothLT = lazy(() => import("./pages/bothLT"));
const Antd = lazy(() => import("./pages/antd"));
const Products = lazy(() => import("./pages/products"));
const ProductDetail = lazy(() => import("./pages/productsDetail"));
const ReactQuery = lazy(() => import("./pages/reactQuery"));
const Experiment = lazy(() => import("./pages/experiment"));
const Photos = lazy(() => import("./pages/photos"));

export default function Routes() {
    return useRoutes([
        {
            path: "/",
            element: <Navigate to="/library/language" replace />,
        },
        {
            path: "/error",
            children: [
                {
                    path: "404",
                    element: (
                        <Suspense fallback={<Loader />}>
                            <NotFound404 />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "/library",
            children: [
                {
                    path: "language",
                    element: (
                        <Suspense fallback={<Loader />}>
                            <Language />
                        </Suspense>
                    ),
                },
                {
                    path: "theme",
                    element: (
                        <Suspense fallback={<Loader />}>
                            <Theme />
                        </Suspense>
                    ),
                },
                {
                    path: "language-n-theme",
                    element: (
                        <Suspense fallback={<Loader />}>
                            <BothLT />
                        </Suspense>
                    ),
                },
                {
                    path: "react-query",
                    element: (
                        <Suspense fallback={<Loader />}>
                            <ReactQuery />
                        </Suspense>
                    ),
                },
                {
                    path: "experiment",
                    element: (
                        <Suspense fallback={<Loader />}>
                            <Experiment />
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
                        <Suspense fallback={<Loader />}>
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
                    path: "products",
                    element: (
                        <Suspense fallback={<Loader />}>
                            <Products />
                        </Suspense>
                    ),
                },
                {
                    path: "products/:id",
                    element: (
                        <Suspense fallback={<Loader />}>
                            <ProductDetail />
                        </Suspense>
                    ),
                },
                {
                    path: "photos",
                    element: (
                        <Suspense fallback={<Loader />}>
                            <Photos />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "*",
            element: <Navigate to="/error/404" replace />,
        },
    ]);
};
