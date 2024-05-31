import "./products.css";
import { AddToCartIcon } from "./icons";
import { Product } from "../interfaces/products.interface";

interface Props {
  products: Product[];
}

export const Products: React.FC<Props> = ({ products }) => {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 20).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
