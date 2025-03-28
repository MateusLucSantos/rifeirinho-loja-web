// import { ClientsTable } from "./components/clients-table";
import { useEffect, useState } from "react";
import { Product } from "./interfaces/product";

import ProductDataTable from "./components/products-datatable";

async function fetchUsers() {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
}

export function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchUsers().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <title>Produtos | Rifeirinho</title>
      <ProductDataTable product={products} />
    </div>
  );
}
