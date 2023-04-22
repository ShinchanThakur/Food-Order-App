import { useState } from "react";
import DUMMY_MEALS from "./dummy-meals";
import styles from './AvailableMeals.module.css';
import Card from "../UI/Card";

const AvailableMeals = () => {
    const [meals, setMeals] = useState(DUMMY_MEALS);
    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {meals.map((meal) => {
                        return <li key={meal.id}>{meal.name}</li>
                    })}
                </ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;