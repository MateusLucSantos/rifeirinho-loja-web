import { createBrowserRouter } from "react-router";

import { AppLayout } from "@/pages/_layout/app";
import { AuthLayout } from "@/pages/_layout/auth";
import { Dashboard } from "@/pages/app/dashboard";
import { SignIn } from "@/pages/auth/sign-in";
import { SignUp } from "@/pages/auth/sign-up/sign-up";
import { AllClients } from "@/pages/app/all-clients/all-clients";
import { NewClient } from "@/pages/app/new-client/new-client";
// import { ClientRegister } from "@/pages/app/client-register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/clientes", element: <AllClients /> },
      { path: "/novo-cliente", element: <NewClient /> },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);
