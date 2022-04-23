import Head from 'next/head';
import CommentList from "../components/CommentList";

export default function Comments({comments}) {
    return (
        <div>
            <Head>
                <title>Fetch API Comments - Nemanja Radivojevic</title>
                <meta name="description" content="Fetching data from API" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <CommentList comments={comments} />

        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=9`);
    const comments = await res.json();

    return {
        props: {
            comments
        }
    }
}