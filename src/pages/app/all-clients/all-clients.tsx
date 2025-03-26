// import { ClientsTable } from "./components/clients-table";
import { useEffect, useState } from "react";
import { Client } from "./interfaces/client";
import ClientDataTable from "./components/clients-datatable";

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}

export function AllClients() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    fetchUsers().then((data) => setClients(data));
  }, []);

  return (
    <div>
      <title>Clientes | Rifeirinho</title>
      {/* <HeaderClient /> */}
      {/* <ClientsTable /> */}
      <ClientDataTable clients={clients} />
    </div>
  );
}
