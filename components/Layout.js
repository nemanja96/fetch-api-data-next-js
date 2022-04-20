import styles from '../styles/Layout.module.css';
import Nav from '../components/Nav';
import Header from '../components/Header';

export default function Layout({children}) {
    return (
        <>
            <div className={styles.container}>
                <Nav />
                <div className={styles.main}>
                    <Header />
                    {children}
                </div>
            </div>
        </>
    )
}