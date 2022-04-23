import Link from 'next/link';
import styles from '../styles/Comment.module.css';

export default function CommentItem({comment}) {
    return (
        <Link href="/comment/[id]" as={`/comment/${comment.id}`}>
            <div className={styles.commentCard}>
                <h3>{comment.name}</h3>
                <p>{comment.body}</p>
            </div>
        </Link>
    )
}