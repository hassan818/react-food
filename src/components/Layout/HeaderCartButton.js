import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const nummerOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onOPen}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{nummerOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
