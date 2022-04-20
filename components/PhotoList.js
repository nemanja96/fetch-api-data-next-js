import styles from '../styles/Photo.module.css';
import PhotoItem from './PhotoItem';

export default function PhotoList({photos}) {
    return (
        <div className={styles.grid}>
            {
                photos.map(photo => (
                    <PhotoItem key={photo.id} photo={photo} />
                ))
            }
        </div>
    )
}