import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import Header from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import Footer from "./components/Footer";

function App() {
  const { filters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);
  return (
    <>
      <Header />

      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  );
}

export default App;
