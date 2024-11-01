import getPosts from "@/app/lib/get-posts";
import PostList from ".";

export default function PostListRSC() {
    const posts = getPosts();
    return <PostList posts={posts} />;
}