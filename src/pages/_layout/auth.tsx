import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div>
      {/* Aqui vou colocar o logo e o background */}
      <div></div>

      {/* Aqui vai estar o formulário */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
