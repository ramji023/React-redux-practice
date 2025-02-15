import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchPosts } from "./blogSlice";
const Blog = () => {
    const { posts, loading, error } = useSelector((state) => state.blogs)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    if (loading === 'loading') return <div>Loading...</div>;
    if (loading === 'rejected') return <div>Error: {error}</div>;
    return (
        <>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Blog