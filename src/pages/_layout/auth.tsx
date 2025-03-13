import { Outlet } from "react-router";

import Background from "../../assets/background.png";
import Logo from "../../assets/logo-branca.svg";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-3">
      <div className="text-foreground relative col-span-1">
        <img src={Logo} alt="" className="absolute top-5 right-4 w-56" />
        <img src={Background} alt="" className="bg-chart-4 h-screen w-screen" />
        <footer className="absolute right-4 bottom-1 text-sm">
          &copy; Rifeirinho - {new Date().getFullYear()}{" "}
        </footer>
      </div>

      <div className="bg-muted col-span-2 flex flex-col justify-center">
        <Outlet />
      </div>
    </div>
  );
}
