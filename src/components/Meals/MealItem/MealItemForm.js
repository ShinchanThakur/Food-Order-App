import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef } from 'react';

const MealItemForm = props => {
    // const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const onAddMealHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        // if (
        //     enteredAmount.trim().length === 0 ||
        //     enteredAmountNumber < 1 ||
        //     enteredAmountNumber > 5
        // ) {
        //     setAmountIsValid(false);
        //     return;
        // }
        //NOT NEEDED, REACT MAKES THIS CHECK FOR US, USING THE MIN AND MAX ATTRIBUTE IN INPUT
        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form className={styles.form} onSubmit={onAddMealHandler}>
            <Input
                label="Amount"
                ref={amountInputRef}
                input={
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
            {/* {!amountIsValid && <p>Please enter a valid amount (1-5).</p>} */}
        </form>
    )
}

export default MealItemForm;