import { getProducts } from "../fakeAPI";
import ProductsList from "../components/ProductsList";

export default function Products() {
  const products = getProducts();
  return (
    <main>
      <h1>Products</h1>
      <ProductsList products={products} />
    </main>
  );
}
