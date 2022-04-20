import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div>
                <h3>Hello</h3>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}