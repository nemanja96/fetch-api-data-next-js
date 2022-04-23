import Link from 'next/link';
import styles from '../../../styles/Comment.module.css';

export default function comment({comment}){
    return (
        <div className={styles.grid}>
            <div className={styles.commentSingleCard}>
                <h2>{comment.name}</h2>
                <p>{comment.email}</p>
                <h3>{comment.body}</h3>
                <Link href="/comments">Go back</Link>
            </div>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${context.params.id}`)
    const comment = await res.json();

    return {
        props: {
            comment
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await res.json();

    const ids = comments.map(comment => comment.id);
    const paths = ids.map(id => ({ params: { id: id.toString() }}))

    return {
        paths,
        fallback: false
    }
}