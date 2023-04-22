import Background from './Background';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>TastyMeals</h1>
                <HeaderCartButton />
            </header>
            <Background />
        </>
    )
}

export default Header;