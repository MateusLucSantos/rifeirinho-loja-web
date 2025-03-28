import { createBrowserRouter } from "react-router";

import { AppLayout } from "@/pages/_layout/app";
import { AuthLayout } from "@/pages/_layout/auth";
import { Dashboard } from "@/pages/app/dashboard";
import { SignIn } from "@/pages/auth/sign-in";
import { SignUp } from "@/pages/auth/sign-up/sign-up";
import { AllClients } from "@/pages/app/all-clients/all-clients";
import { NewClient } from "@/pages/app/new-client/new-client";
import { AllSuplliers } from "@/pages/app/all-suppliers/all-suppliers";
import { NewSupplier } from "@/pages/app/new-supplier/new-supplier";
import { AllProducts } from "@/pages/app/all-products/all-products";
import { NewProduct } from "@/pages/app/new-product/new-client";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/clientes", element: <AllClients /> },
      { path: "/novo-cliente", element: <NewClient /> },
      { path: "/fornecedores", element: <AllSuplliers /> },
      { path: "/novo-fornecedor", element: <NewSupplier /> },
      { path: "/produtos", element: <AllProducts /> },
      { path: "/novo-produto", element: <NewProduct /> },
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
