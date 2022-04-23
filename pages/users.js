import Head from 'next/head';
import UserList from '../components/UserList';

export default function About({users}) {
    return ( 
        <div className="container">
            <Head>
                <title>Fetch API Users - Nemanja Radivojevic</title>
                <meta name="description" content="Fetching data from API" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="main">
                <UserList users={users} />
            </div>

        </div>
        )
}

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return {
        props: {
            users
        }
    }
}