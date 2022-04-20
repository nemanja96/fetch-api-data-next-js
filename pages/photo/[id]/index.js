import Link from 'next/link';
import styles from '../../../styles/Photo.module.css';

export default function photo({photo}) {
    return (
        <div className={styles.singleCard}>
            <h2>{photo.title}</h2>
            <img src={photo.url} />
            <br />
            <Link href="/">Go Back</Link>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${context.params.id}`);
    const photo = await res.json();

    return {
        props: {
            photo
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/');
    const photos = await res.json();

    const ids = photos.map(photo => photo.id);
    const paths = ids.map(id => ({ params: { id: id.toString() }}));

    return {
        paths,
        fallback: false
    }
}

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${context.params.id}`);
//     const photo = await res.json();

//     return{
//         props: {
//             photo
//         }
//     }
// }