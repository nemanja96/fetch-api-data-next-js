import styles from '../../../styles/User.module.css';
import Link from 'next/link';

export default function user({post}) {
    return (
        <div className={styles.grid}>
            <div className={styles.userCard}>
                <h2>Name: {post.name}</h2>
                <p>Username: {post.username}</p>
                <p>Email: {post.email}</p>
                <p>Street: {post.address.street}</p>
                <p>Suite: {post.address.suite}</p>
                <p>City: {post.address.city}</p>
                <p>Zipcode: {post.address.zipcode}</p>
                <p>Phone: {post.phone}</p>
                <p>Website: {post.website}</p>
                <Link href="/users">Go back</Link>
            </div>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const post = await res.json();

    return {
        props: {
            post
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const posts = await res.json();

    const ids = posts.map(post => post.id);
    const paths = ids.map(id => ({params: { id: id.toString() }}));

    return {
        paths,
        fallback: false
    }
}