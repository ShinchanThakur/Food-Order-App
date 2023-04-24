import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {
    const onAddMealHandler = (event) => {
        event.preventDefault();
    }
    return (
        <form className={styles.form} onSubmit={onAddMealHandler}>
            <Input label="Amount" input={
                {
                    ...props,
                    type: 'number',
                    id: 'amount_' + props.id,
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }
            } />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;