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
  email: z.string().email(),
  phone: z.string().regex(/^\d{10}$/),
  address: z.string().nonempty(),
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
        <div className="flex items-center space-x-48 p-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="id">ID</Label>
            <Input
              className="min-w-[40px]" // Define um tamanho mínimo
              type="text"
              id="id"
              {...register("id")}
              value={idValue}
              style={{
                width: `${idValue.length * 15}px`, // Ajusta a largura com base no número de caracteres
              }}
              onChange={(e) => setIdValue(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="name">Data de aniversário</Label>
            <DatePicker />
          </div>
        </div>
      </form>
    </>
  );
}
