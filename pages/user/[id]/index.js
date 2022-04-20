export default function user({post}) {
    return (
        <div>
            {post.name}
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