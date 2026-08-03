import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { BLOG_POSTS, getPostBySlug } from "@/data/blog";
import styles from "./page.module.scss";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Digi Hub Blog`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main>
        <article className={styles.article}>
          <div className={`wrap ${styles.header}`}>
            <Link href="/blog" className={styles.back}>
              ← All posts
            </Link>
            <span className={styles.tag}>{post.category}</span>
            <h1>{post.title}</h1>
            <div className={styles.meta}>
              <span>{post.author}</span>
              <span className={styles.dot} aria-hidden="true" />
              <span>{formatDate(post.date)}</span>
              <span className={styles.dot} aria-hidden="true" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className={`wrap ${styles.imageWrap}`}>
            <div className={styles.featuredImage}>
              <Image
                src={post.image}
                alt=""
                fill
                className={styles.featuredImageInner}
                sizes="(max-width: 760px) 100vw, 720px"
                priority
              />
            </div>
          </div>

          <div className={`wrap ${styles.body}`}>
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className={`wrap ${styles.footerNav}`}>
            <Link href="/blog" className={styles.allPosts}>
              ← Back to all posts
            </Link>
            <a href="/contact" className={styles.cta}>
              Start a project →
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
