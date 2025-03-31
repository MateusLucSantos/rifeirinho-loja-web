import { ScrollArea } from "@/components/ui/scroll-area";
import { FormProduct } from "./components/form-product";
import { HeaderProduct } from "./components/header-product";

export function NewProduct() {
  return (
    <div>
      <HeaderProduct />

      <FormProduct />
    </div>
  );
}
