import { useSelector } from "react-redux"



export const PostList = () => {

    const posts = useSelector<any>(state => state.posts)


    const renderedPosts = (posts as Array<any>).map(post => (
        <article className="post-excerpt" key={post.id} >
            <h3>{post.title}</h3>
            <p className='post-content'>{post.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <section className="post-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}