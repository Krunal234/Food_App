import { Fragment } from "react";
import classes from "./Header.module.css";
import indianFood from "../../Assets/Indian_foods.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={indianFood} alt="Indian Meal" />
      </div>
    </Fragment>
  );
};

export default Header;
