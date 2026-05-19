import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

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
       <PostSummary postHeading={"h1"} postLink={""} createdAt={"2025-03-30T07:11:33"} title={"Como a tecnologia impacta nosso bem-estar"} excerpt={"Também ajuda a organizar melhor os arquivos e componentes, o que facilita a manutenção do projeto no longo prazo."} />
      </section>
    )
}