import z from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const signUpForm = z.object({
  trading_name: z.string().nullable(),
  name: z.string().nullable(),
  cnpj: z.number(),
  cpf: z.number().nullable(),
  email: z.string().email(),
  password: z.string(),
  confirm_password: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

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
      <title>Sign In</title>
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
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Nome fantasia</Label>
              <Input
                id="name"
                type="text"
                {...register("name")}
                className="border-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">CNPJ ou CPF</Label>
              <Input
                id="name"
                type="text"
                placeholder=""
                {...register("name")}
                className="border-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="border-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                className="border-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Confirme a senha</Label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                className="border-muted-foreground"
              />
            </div>
            <Button disabled={isSubmitting}>Entrar no sistema</Button>
          </form>
        </div>
      </div>
    </>
  );
}
