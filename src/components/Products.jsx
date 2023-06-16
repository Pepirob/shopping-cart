/* eslint-disable react/prop-types */
import { useFilters } from "../hooks/useFilters";
import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./icons";
import { products as initialProducts } from "../mocks/products.json";
import { useCart } from "../hooks/useCart";

export function Products() {
  const { filterProducts } = useFilters();
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const products = filterProducts(initialProducts);

  return (
    <>
      <main className="products">
        <ul>
          {products.slice(0, 10).map((product) => {
            const isProductInCart = checkProductInCart(product);
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title} </strong> - ${product.price}
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: isProductInCart ? "red" : "#09f",
                    }}
                    onClick={() =>
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)
                    }
                  >
                    {isProductInCart ? (
                      <RemoveFromCartIcon />
                    ) : (
                      <AddToCartIcon />
                    )}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
