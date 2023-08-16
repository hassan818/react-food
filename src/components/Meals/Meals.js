import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvalibaleMeals from "./AvalibaleMeals";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvalibaleMeals />
    </Fragment>
  );
};
export default Meals;
