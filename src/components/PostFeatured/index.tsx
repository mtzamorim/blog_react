import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured(){
    const slug = 'qualquer'
    const postLink = `/post/${slug}`
    return(
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{ href: postLink}}
          imageProps={{
            width: 1200,
            height: 720,
            src: "/images/bryen_9.png",
            alt: "Alt da imagem",
            priority: true
          }}
        />
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2025-04-20"
          >
            20/04/2025 10:00
          </time>

          <PostHeading url={postLink} as="h1">
            Esse é um titulo
          </PostHeading>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            ipsum a sit eaque minus, architecto excepturi ex labore nostrum
            totam libero, error asperiores ipsam, quo dolor itaque recusandae.
            Totam, ad! Molestias corporis voluptas error qui, voluptates animi,
            repellendus provident itaque ipsum impedit veniam inventore omnis
            alias laborum vel iusto atque nulla cum non dicta autem ipsa
            voluptatem. Eius, nobis officia.
          </p>
        </div>
      </section>
    )
}