import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <h1>Fetch API Data</h1>
            <p>Author: <em>Nemanja Radivojević</em></p>
        </div>
    )
}