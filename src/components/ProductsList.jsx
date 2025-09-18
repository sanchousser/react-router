import { Link } from "react-router-dom";

export default function ProductsList({ products }) {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link to={product.id}>{product.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
