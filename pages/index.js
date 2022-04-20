import Head from 'next/head'
import PhotoList from '../components/PhotoList';

export default function Home({photos}) {
  return (
    <div>
      <Head>
        <title>Photo Gallery - Nemanja Radivojevic</title>
        <meta name="description" content="Fetching data from API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PhotoList photos={photos} />

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=24');
  const photos = await res.json();

  return {
    props: {
      photos
    }
  }
}
