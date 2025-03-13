import z from "zod";
import { useForm } from "react-hook-form";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { toast } from "sonner";

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("E-mail e senha corretos, seja bem vindo!");
    } catch (error) {
      toast.error("E-mail ou senha incorretos, verifique");
    }
  }
  return (
    <>
      <title>Sign In</title>
      <div className="flex justify-center p-8">
        <div className="flex w-[350px] flex-col justify-center space-y-4">
          <div className="flex flex-col text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar o sistema
            </h1>
            <p className="text-muted-foreground text-sm">
              Gerencie sua loja com eficiência
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="flex flex-col space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="rifeirinho@email.com"
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
            <Button disabled={isSubmitting}>Entrar no sistema</Button>
          </form>
        </div>
      </div>
    </>
  );
}
