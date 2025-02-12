import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedList = posts.map((post) => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButton post={post} />
        </article>
    ))
    return (
        <>
            <section>
                <h2>posts</h2>
                {renderedList}
            </section>
        </>
    )
}

export default PostsList