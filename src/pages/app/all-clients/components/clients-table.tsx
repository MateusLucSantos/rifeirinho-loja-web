import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";

export function ClientsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">id</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead className="w-[160px]">Telefone</TableHead>
            <TableHead className="w-[20px]"></TableHead>
            <TableHead className="w-[20px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <TableRow key={i}>
                <TableCell className="font-mono text-sm font-medium">
                  1
                </TableCell>
                <TableCell className="leading-none">
                  <h2 className="text-sm font-semibold">
                    Mateus Lucas Batista dos Santos
                  </h2>
                  <span className="text-muted-foreground text-xs">
                    Mateus da Cemig
                  </span>
                </TableCell>
                <TableCell>
                  <h2>(37)9 9988-7766</h2>
                </TableCell>
                <TableCell>
                  <Button
                    size="xs"
                    className="bg-sidebar-ring hover:bg-sidebar-ring/80"
                  >
                    <Pencil />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    size="xs"
                    className="bg-destructive hover:bg-destructive/80"
                  >
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
