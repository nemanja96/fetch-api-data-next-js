import CommentItem from "../components/CommentItem";
import styles from '../styles/Comment.module.css';

export default function CommentList({comments}) {
    return (
        <div className={styles.grid}>
            {
                comments.map(comment => <CommentItem key={comment.id} comment={comment} />)
            }
        </div>
    )
}