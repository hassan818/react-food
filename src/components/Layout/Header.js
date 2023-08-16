import React, { useState, Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import Cart from "../Cart/Cart";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(true);
  };
  const cancelHandler = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        {!open && <HeaderCartButton onOPen={openHandler} />}
        {open && <Cart onCancel={cancelHandler} />}
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food" />
      </div>
    </Fragment>
  );
};

export default Header;
