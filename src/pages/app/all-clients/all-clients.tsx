import { ClientsTable } from "./components/clients-table";
import { HeaderClient } from "./components/header-client";

export function AllClients() {
  return (
    <div>
      <title>Clientes | Rifeirinho</title>
      <HeaderClient />
      <ClientsTable />
    </div>
  );
}
