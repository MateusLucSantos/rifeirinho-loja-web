// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Pencil, Trash2 } from "lucide-react";

// export function ClientsTable() {
//   return (
//     <div className="rounded-md border">
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[50px]">id</TableHead>
//             <TableHead>Nome</TableHead>
//             <TableHead className="w-[160px]">Telefone</TableHead>
//             <TableHead className="w-[340px]"></TableHead>
//             <TableHead className="w-[20px]"></TableHead>
//             <TableHead className="w-[20px]"></TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {Array.from({ length: 10 }).map((_, i) => {
//             return (
//               <TableRow key={i}>
//                 <TableCell className="font-mono text-sm font-medium">
//                   1
//                 </TableCell>
//                 <TableCell className="leading-none">
//                   <h2 className="text-sm font-semibold">
//                     Mateus Lucas Batista dos Santos
//                   </h2>
//                   <span className="text-muted-foreground text-xs">
//                     Mateus da Cemig
//                   </span>
//                 </TableCell>
//                 <TableCell>
//                   <h2>(37)9 9988-7766</h2>
//                 </TableCell>
//                 <TableCell></TableCell>
//                 <TableCell>
//                   <Button
//                     size="xs"
//                     className="bg-sidebar-ring hover:bg-sidebar-ring/80 dark:bg-chart-1 dark:hover:bg-sidebar-ring"
//                   >
//                     <Pencil />
//                   </Button>
//                 </TableCell>
//                 <TableCell>
//                   <Button
//                     size="xs"
//                     className="bg-destructive hover:bg-destructive/80 dark:bg-destructive dark:hover:bg-red-600/80"
//                   >
//                     <Trash2 />
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/datatable";
import { Client } from "../interfaces/client";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <div>{row.getValue("id")}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => {
      return <div>{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "username",
    header: "Apelido",
    cell: ({ row }) => {
      return <div>{row.getValue("username")}</div>;
    },
  },
  // {
  //   accessorKey: "email",
  //   header: "E-mail",
  //   cell: ({ row }) => {
  //     return <div>{row.getValue("email")}</div>;
  //   },
  // },
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
    cell: ({ row }) => {
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
  return <DataTable columns={columns} data={clients} />;
}
