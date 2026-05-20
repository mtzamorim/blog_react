import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-16">
      <p className="text-center">
        <span>
          Copyright &copy; {new Date().getFullYear()} -{" "}
          <Link href="/">The Blog</Link>
        </span>
      </p>
    </footer>
  );
}
