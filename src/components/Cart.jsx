/* eslint-disable react/prop-types */
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./icons";
import "./Cart.css";
import { useCart } from "../hooks/useCart";

function CartItem({ thumbnail, title, price, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}
export default function Cart() {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart, removeFromCart } = useCart();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => {
            return (
              <CartItem
                key={product.id}
                {...product}
                addToCart={() => addToCart(product)}
              />
            );
          })}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
