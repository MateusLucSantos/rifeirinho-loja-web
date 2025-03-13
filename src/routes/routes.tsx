import { createBrowserRouter } from "react-router";
import { AppLayout } from "../pages/_layout/app";
import { Dashboard } from "../pages/app/dashboard";
import { AuthLayout } from "../pages/_layout/auth";
import { SignIn } from "../pages/auth/sign-in";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/signin", element: <SignIn /> }],
  },
]);
