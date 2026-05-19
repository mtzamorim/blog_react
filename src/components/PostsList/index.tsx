import { postRepository } from "@/repositories/post";
import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export default async function PostList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`
        return (
          <div className="flex flex-col group gap-4" key={post.id}>
            <PostCoverImage
              linkProps={{ href: postLink,
             }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />

              <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime={post.createdAt}
            title={formatRelativeDate(post.createdAt)}
          >
            {formatDateTime(post.createdAt)}
          </time>

          <PostHeading url={postLink} as="h2">
            {post.title}
          </PostHeading>

          <p>
           {post.excerpt}
          </p>
        </div>
          </div>
        );
      })}
    </div>
  );
}
