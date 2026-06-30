import { useRoutes, Navigate } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../layout/error-page";

const HomePage = lazy(() => import("@/pages/Home"));

export const AppRoutes = () =>
  useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/home", element: <Navigate to="/" replace /> },
    { path: "*", element: <ErrorPage /> },
  ]);
