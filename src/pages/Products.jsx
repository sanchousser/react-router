import {getProductsId} from './../../src/services/fakeAPI'
import ProductsList from "../components/ProductsList";

export default function Products() {
  const products = getProductsId();
  return (
    <main>
      <h1>Products</h1>
      <ProductsList products={products} />
    </main>
  );
}
