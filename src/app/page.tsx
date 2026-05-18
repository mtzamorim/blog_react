import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading";
import PostList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image className="group-hover:scale-105 transition w-full h-full object-cover object-center" priority src="/images/bryen_0.png" width={1200} height={720} alt="Titulo do Post"/>
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 block text-sm/tight" dateTime="2025-04-20">20/04/2025 10:00</time>

          <PostHeading url="#" as="h1">Esse é um titulo</PostHeading>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ipsum a sit eaque minus, architecto excepturi ex labore nostrum totam libero, error asperiores ipsam, quo dolor itaque recusandae. Totam, ad!
        Molestias corporis voluptas error qui, voluptates animi, repellendus provident itaque ipsum impedit veniam inventore omnis alias laborum vel iusto atque nulla cum non dicta autem ipsa voluptatem. Eius, nobis officia.</p>
          </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Footer</h1>
      </footer>
    </Container>
  );
}
