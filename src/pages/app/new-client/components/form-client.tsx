import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DatePicker } from "./date-picker";

const schema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
  nickname: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().regex(/^\d{10}$/),
  address: z.string().nonempty(),
  number_address: z.string().nonempty(),
  complement: z.string().optional(),
  neighborhood: z.string().optional(),
  city: z.string().nonempty(),
  uf: z.string().nonempty(),
  zip_code: z.string().regex(/^\d{5}-\d{3}$/),
});
type ClientForm = z.infer<typeof schema>;

export function FormClient() {
  const { register, handleSubmit, watch, formState } = useForm<ClientForm>({
    resolver: zodResolver(schema),
  });

  const [idValue, setIdValue] = useState("121245");
  return (
    <>
      <form action="">
        <div className="space-y-4 p-4">
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
            <div className="flex flex-col space-y-2">
              <Label htmlFor="nickname">Apelido</Label>
              <Input
                className="min-w-[120px]"
                type="text"
                id="nickname"
                {...register("nickname")}
                value=""
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name">Data de nascimento</Label>
              <DatePicker />
            </div>
          </div>

          <div className="flex justify-between space-x-10">
            <div className="flex w-[430px] flex-col space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                className="min-w-[120px]"
                type="text"
                id="name"
                {...register("name")}
                value=""
              />
            </div>
            <div className="flex w-[190px] flex-col space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input
                className="min-w-[120px]"
                type="text"
                id="cpf"
                {...register("cpf")}
                value=""
              />
            </div>
          </div>

          <div className="flex justify-between space-x-10">
            <div className="flex w-[320px] flex-col space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="min-w-[120px]"
                type="text"
                id="email"
                {...register("email")}
                value=""
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                className="min-w-[120px]"
                type="text"
                id="phone"
                {...register("phone")}
                value=""
              />
            </div>
          </div>
          <div className="flex justify-between space-x-10">
            <div className="flex w-[300px] flex-col space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <Input
                className="min-w-[120px]"
                type="text"
                id="address"
                {...register("address")}
                value=""
              />
            </div>
            <div className="flex w-[80px] flex-col space-y-2">
              <Label htmlFor="number_address">Número</Label>
              <Input
                className="min-w-[80px]"
                type="text"
                id="number_address"
                {...register("number_address")}
                value=""
              />
            </div>
            <div className="flex w-[200px] flex-col space-y-2">
              <Label htmlFor="complement">Complemento</Label>
              <Input
                className="min-w-[120px]"
                type="text"
                id="complement"
                {...register("complement")}
                value=""
              />
            </div>
          </div>
          <div className="flex justify-between space-x-6">
            <div className="flex w-[200px] flex-col space-y-2">
              <Label htmlFor="neighborhood">Bairro</Label>
              <Input
                className="min-w-[120px]"
                type="text"
                id="neighborhood"
                {...register("neighborhood")}
                value=""
              />
            </div>
            <div className="flex w-[200px] flex-col space-y-2">
              <Label htmlFor="city">Cidade</Label>
              <Input
                className="min-w-[120px]"
                type="text"
                id="city"
                {...register("city")}
                value=""
              />
            </div>
            <div className="flex w-[70px] flex-col space-y-2">
              <Label htmlFor="uf">UF</Label>
              <Input
                className="min-w-[80px]"
                type="text"
                id="uf"
                {...register("uf")}
                value=""
              />
            </div>
            <div className="flex w-[120px] flex-col space-y-2">
              <Label htmlFor="zip_code">CEP</Label>
              <Input
                className="min-w-[120px]"
                type="text"
                id="zip_code"
                {...register("zip_code")}
                value=""
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
