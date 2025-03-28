import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/datatable";
import { Product } from "../interfaces/product";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router";
const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.getValue("id")}</div>;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Quantidade
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.getValue("amount")}</div>;
    },
  },
  {
    accessorKey: "price_buy",
    header: "Preço de compra",
    cell: ({ row }) => {
      return <div>{row.getValue("price_buy")}</div>;
    },
  },
  {
    accessorKey: "price_sell",
    header: "Preço de venda",
    cell: ({ row }) => {
      return <div>{row.getValue("price_sell")}</div>;
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => {
      return (
        <div className="flex justify-center gap-4">
          <Button className="bg-sidebar-ring hover:bg-sidebar-ring/80 dark:bg-chart-1 dark:hover:bg-sidebar-ring h-6 w-6">
            <Pencil />
          </Button>
          <Button className="bg-destructive hover:bg-destructive/80 dark:bg-destructive h-6 w-6 dark:hover:bg-red-600/80">
            <Trash2 />
          </Button>
        </div>
      );
    },
  },
];
interface Props {
  product: Product[];
}
export default function ProductDataTable({ product }: Props) {
  const navigate = useNavigate();

  const handleNewClient = () => {
    navigate("/novo-produto"); // ajuste este path conforme sua estrutura de rotas
  };

  return (
    <DataTable
      columns={columns}
      data={product}
      pageSize={10}
      pageTitles="Produtos"
      actionButton={{
        text: "Novo Produto",
        onClick: () => handleNewClient(),
      }}
    />
  );
}
