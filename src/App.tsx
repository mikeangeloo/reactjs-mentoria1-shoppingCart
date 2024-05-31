import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/products";
import { useState } from "react";
import { Product } from "./interfaces/products.interface";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/use-filters";

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products as unknown as Product[]);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  );
}

export default App;
