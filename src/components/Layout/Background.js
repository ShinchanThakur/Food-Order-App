import styles from './Background.module.css';

const Background = () => {
    return (
        <div className={styles['main-image']}>
            <img src='/assets/meals.jpg' alt='A table full of delicious food!' />
        </div>
    )
}

export default Background;