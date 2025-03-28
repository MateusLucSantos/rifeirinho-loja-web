import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export function HeaderProduct() {
  const navigation = useNavigate();

  function goBack() {
    navigation("/produtos");
  }
  return (
    <div className="bg-chart-4 flex items-center justify-between p-1">
      <h1 className="text-foreground text-lg font-semibold">Novo Produto</h1>
      <div className="flex gap-4">
        <Button
          variant="link"
          className="text-muted-foreground text-md"
          onClick={goBack}
        >
          Voltar
        </Button>
        <Button>Salvar</Button>
      </div>
    </div>
  );
}
