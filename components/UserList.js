import UserItem from '../components/UserItem';
import styles from '../styles/Photo.module.css';

export default function UserList({users}) {
    return (
        <div className={styles.grid}>
            {
                users.map(user => <UserItem user={user} />)
            }
        </div>
    )
}