import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/datatable";
import { Suppliers } from "../interfaces/suppliers";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router";
const columns: ColumnDef<Suppliers>[] = [
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
    accessorKey: "supplier",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fornecedor
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.getValue("supplier")}</div>;
    },
  },
  {
    accessorKey: "phone",
    header: "Contato",
    cell: ({ row }) => {
      return <div>{row.getValue("phone")}</div>;
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
  suppliers: Suppliers[];
}
export default function ClientDataTable({ suppliers }: Props) {
  const navigate = useNavigate();

  const handleNewClient = () => {
    navigate("/novo-fornecedor"); // ajuste este path conforme sua estrutura de rotas
  };

  return (
    <DataTable
      columns={columns}
      data={suppliers}
      pageSize={10}
      pageTitles="Fornecedores"
      actionButton={{
        text: "Novo Fornecedor",
        onClick: () => handleNewClient(),
      }}
    />
  );
}
