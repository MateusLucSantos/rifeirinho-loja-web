import { DatePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { Barcode } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
  code: z.string().nonempty(),
  unit: z.string().nonempty(),
  price_sell: z.string().nonempty(),
  description: z.string().nonempty(),
  stock: z.string().nonempty(),
  stock_min: z.string().nonempty(),
  stock_max: z.string().nonempty(),
  barcode: z.string().nonempty(),
  brand: z.string().nonempty(),
  category: z.string().nonempty(),
  supplier: z.string().nonempty(),
  image: z.string().nonempty(),
  createdAt: z.string().nonempty(),
  updatedAt: z.string().nonempty(),
});
type ClientForm = z.infer<typeof schema>;

export function FormProduct() {
  const { register, handleSubmit, watch, formState } = useForm<ClientForm>({
    resolver: zodResolver(schema),
  });

  const [idValue, setIdValue] = useState("");
  return (
    <>
      <form action="" className="h-screen w-full">
        <ScrollArea
          type="always"
          className="h-[500px] w-full overflow-y-auto 2xl:h-screen" // Altura total da tela e rolagem vertical
        >
          <div className="m-auto space-y-4 p-4 xl:w-[1024px]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="id">ID</Label>
                <Input
                  className="min-w-[40px]"
                  type="text"
                  id="id"
                  {...register("id")}
                  value={idValue}
                  style={{
                    width: `${idValue.length * 15}px`,
                  }}
                  onChange={(e) => setIdValue(e.target.value)}
                />
              </div>
              <div className="flex w-[150px] flex-col space-y-2 lg:w-[500px]">
                <Label htmlFor="code">Código</Label>
                <Input
                  className="min-w-[120px]"
                  type="text"
                  id="code"
                  {...register("code")}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="createdAt">Data de criação</Label>
                <DatePicker />
              </div>
            </div>

            <div className="flex flex-col space-y-2 lg:w-full">
              <Label htmlFor="name">Nome</Label>
              <Input type="text" id="name" {...register("name")} />
            </div>

            <div className="flex justify-between space-x-10">
              <div className="flex flex-col space-y-2 lg:w-[300px]">
                <Label htmlFor="unit">Unidade</Label>
                <Input
                  className="min-w-[120px]"
                  type="text"
                  id="unit"
                  {...register("unit")}
                />
              </div>
              <div className="flex flex-col space-y-2 lg:w-[500px]">
                <Label htmlFor="category">Categoria</Label>
                <Input
                  className="min-w-[120px]"
                  type="text"
                  id="category"
                  {...register("category")}
                />
              </div>

              <div className="flex flex-col space-y-2 lg:w-[500px]">
                <Label htmlFor="brand">Marca</Label>
                <Input
                  className="min-w-[120px]"
                  type="text"
                  id="brand"
                  {...register("brand")}
                />
              </div>
              <div className="flex flex-col space-y-2 lg:w-[500px]">
                <Label htmlFor="supplier">Fornecedor</Label>
                <Input
                  className="min-w-[80px]"
                  type="text"
                  id="supplier"
                  {...register("supplier")}
                />
              </div>
            </div>
            <div className="flex justify-between space-x-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="price_sell">Preço de compra</Label>
                <Input
                  className="min-w-[120px]"
                  type="text"
                  id="price_sell"
                  {...register("price_sell")}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="stock">Estoque</Label>
                <Input
                  className="min-w-[120px]"
                  type="text"
                  id="stock"
                  {...register("stock")}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="stock_min">Estoque mínimo</Label>
                <Input
                  className="min-w-[120px]"
                  type="text"
                  id="stock_min"
                  {...register("stock_min")}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="stock_max">Estoque máximo</Label>
                <Input
                  className="min-w-[120px]"
                  type="text"
                  id="stock_max"
                  {...register("stock_max")}
                />
              </div>
            </div>
            <div className="flex items-center gap-3 space-y-2">
              <div className="flex w-[464px] flex-col space-y-2 lg:w-full">
                <Label htmlFor="barcode">Código de Barras</Label>
                <Input
                  className="min-w-[120px]"
                  type="text"
                  id="barcode"
                  {...register("barcode")}
                />
              </div>
              <Button className="mt-3">
                <Barcode />
                Gerar código de barras
              </Button>
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Input
                className="h-40 min-w-[120px]"
                type="text"
                id="description"
                {...register("description")}
              />
            </div>
            <ScrollBar orientation="vertical" />
          </div>
        </ScrollArea>
      </form>
    </>
  );
}
