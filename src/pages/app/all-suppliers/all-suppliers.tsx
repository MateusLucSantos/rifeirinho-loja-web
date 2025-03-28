// import { ClientsTable } from "./components/clients-table";
import { useEffect, useState } from "react";
import { Suppliers } from "./interfaces/suppliers";
import ClientDataTable from "./components/suppliers-datatable";

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}

export function AllSuplliers() {
  const [suppliers, setSuppliers] = useState<Suppliers[]>([]);

  useEffect(() => {
    fetchUsers().then((data) => setSuppliers(data));
  }, []);

  return (
    <div>
      <title>Fornecedores | Rifeirinho</title>
      <ClientDataTable suppliers={suppliers} />
    </div>
  );
}
