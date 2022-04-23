import Link from 'next/link';
import styles from '../styles/Photo.module.css';

export default function PhotoItem({photo}){
    return (
        <Link href="/photo/[id]" as={`/photo/${photo.id}`}>
            <img src={photo.thumbnailUrl} className={styles.photoCard} />
        </Link>
    )
}