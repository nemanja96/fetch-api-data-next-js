import Link from 'next/link';
import styles from '../styles/User.module.css';

export default function UserItem({user}) {
    return (
        <Link href="/user/[id]" as={`/user/${user.id}`}>
            <div className={styles.userMainCard}>
                <h3>{user.name}</h3>
                <p>{user.website}</p>
            </div>
        </Link>
    )
}