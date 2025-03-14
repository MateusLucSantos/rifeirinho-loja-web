import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const signUpForm = z
  .object({
    trading_name: z.string().nonempty("Campo obrigatório."),
    name: z.string().nonempty("Campo obrigatório."),
    cnpj: z.number(),
    cpf: z.string().min(11, "Por favor digite um CPF válido."),
    email: z.string().email().nonempty("Campo obrigatório").toLowerCase(),
    password: z.string().min(8, "A senha deve conter no mínimo 8 caracteres."),
    confirm_password: z
      .string()
      .min(8, "A senha deve conter no mínimo 8 caracteres."),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "Senhas não estão iguais, por favor verifique!",
    path: ["confirm_password"],
  });

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
  });

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success(
        "Cadastro realizado com sucesso, enviamos um e-mail para confirmação do seu cadastro!",
      );
    } catch (error) {
      toast.error("");
    }
  }
  return (
    <>
      <title>Cadastre-se | Rifeirinho</title>
      <div className="flex justify-center p-8">
        <div className="flex w-[350px] flex-col justify-center space-y-4">
          <div className="flex flex-col text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Cadastre a sua Loja
            </h1>
            <p className="text-muted-foreground text-sm">
              Tenha o melhor gerente em sua loja!
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="flex flex-col space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="trading_name">Nome fantasia</Label>
              <Input
                id="trading_name"
                type="text"
                {...register("trading_name")}
                className="border-muted-foreground"
              />
              {errors.trading_name && (
                <span className="text-sm text-red-500">
                  {errors.trading_name.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Nome fantasia</Label>
              <Input
                id="name"
                type="text"
                {...register("name")}
                className="border-muted-foreground"
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="cpf">CNPJ ou CPF</Label>
              <Input
                id="cpf"
                type="text"
                placeholder=""
                {...register("cpf")}
                className="border-muted-foreground"
              />
              {errors.cpf && (
                <span className="text-sm text-red-500">
                  {errors.cpf.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="border-muted-foreground"
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                className="border-muted-foreground"
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Confirme a senha</Label>
              <Input
                id="confirm_password"
                type="password"
                {...register("confirm_password")}
                className="border-muted-foreground"
              />
              {errors.confirm_password && (
                <span className="text-sm text-red-500">
                  {errors.confirm_password.message}
                </span>
              )}
            </div>
            <Button disabled={isSubmitting}>Entrar no sistema</Button>
          </form>
        </div>
      </div>
    </>
  );
}
