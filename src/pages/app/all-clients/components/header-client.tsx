import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ListFilter, Search } from "lucide-react";
import { useState } from "react";

export function HeaderClient() {
  const [position, setPosition] = useState("a-z");
  return (
    <header className="bg-chart-4 p-1">
      <div className="flex items-center justify-between pr-2">
        <div className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ListFilter />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="text-muted-foreground w-26"
              align="start"
            >
              <DropdownMenuLabel className="text-foreground">
                Filtros
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="a-z">A-z</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="z-a">z-A</DropdownMenuRadioItem>
                {/* <DropdownMenuRadioItem value="right">
                  Right
                </DropdownMenuRadioItem> */}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Search size={20} className="text-muted-foreground" />
          <Input
            className="bg-muted h-8 w-[360px]"
            placeholder="Buscar cliente"
          />
        </div>
        <div>
          <Button>Novo Cliente</Button>
        </div>
      </div>
    </header>
  );
}
