import { findAllPublicPostsCached } from "@/lib/post/queries";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export default async function PostList() {
  const posts = await findAllPublicPostsCached();

  return (
    <div className="grid grid-cols-1 mb-16 sm:grid-cols-2 gap-8 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className="flex flex-col group gap-4" key={post.id}>
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />

           <PostSummary postLink={postLink} postHeading="h2"title={post.title} createdAt={post.createdAt} excerpt={post.excerpt}/>
          </div>
        );
      })}
    </div>
  );
}
