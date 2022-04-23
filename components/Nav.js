import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div>
                <Link href="/">Fetch API</Link>
                <ul>
                    <li>
                        <Link href='/'>Photos</Link>
                    </li>
                    <li>
                        <Link href='/users'>Users</Link>
                    </li>
                    <li>
                        <Link href='/comments'>Comments</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}