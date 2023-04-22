import { useState } from "react";
import DUMMY_MEALS from "./dummy-meals";
import styles from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
    const [meals, setMeals] = useState(DUMMY_MEALS);
    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {meals.map((meal) => {
                        return <MealItem
                            key={meal.id}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price}
                        />
                    })}
                </ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;