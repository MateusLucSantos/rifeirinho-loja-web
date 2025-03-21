import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider storageKey="rifeirinho-theme" defaultTheme="light">
        <Toaster richColors position="top-right" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
