import DUMMY_MEALS from "./dummy-meals";
import styles from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map((meal) => {
                        return <MealItem
                            {...meal}
                            key={meal.id}
                        />
                    })}
                </ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;