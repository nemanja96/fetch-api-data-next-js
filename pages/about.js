import UserList from '../components/UserList';

export default function About({users}) {
    return ( 
        <div className="container">
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