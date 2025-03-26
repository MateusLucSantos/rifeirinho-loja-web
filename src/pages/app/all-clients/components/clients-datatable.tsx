import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/datatable";
import { Client } from "../interfaces/client";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Pencil, Trash2 } from "lucide-react";
const columns: ColumnDef<Client>[] = [
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
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Apelido
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.getValue("username")}</div>;
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
          <Button
            size="xs"
            className="bg-sidebar-ring hover:bg-sidebar-ring/80 dark:bg-chart-1 dark:hover:bg-sidebar-ring h-6 w-6"
          >
            <Pencil />
          </Button>
          <Button
            size="xs"
            className="bg-destructive hover:bg-destructive/80 dark:bg-destructive h-6 w-6 dark:hover:bg-red-600/80"
          >
            <Trash2 />
          </Button>
        </div>
      );
    },
  },
];
interface Props {
  clients: Client[];
}
export default function ClientDataTable({ clients }: Props) {
  return (
    <DataTable
      columns={columns}
      data={clients}
      pageSize={10}
      pageTitles="Clientes"
      searchFields={["name", "username", "phone"]}
    />
  );
}
