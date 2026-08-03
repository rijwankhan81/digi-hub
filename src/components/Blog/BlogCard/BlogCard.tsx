"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./BlogCard.module.scss";
import type { BlogPost } from "@/data/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.a
      href={`/blog/${post.slug}`}
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover="hover"
    >
      <div className={styles.media}>
        <motion.div
          className={styles.imageWrap}
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={post.image}
            alt=""
            fill
            className={styles.image}
            sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 380px"
          />
        </motion.div>
        <div className={styles.mediaOverlay} />
        <span className={styles.readTime}>{post.readTime}</span>
      </div>

      <div className={styles.body}>
        <span className={styles.tag}>{post.category}</span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className={styles.meta}>
          <span>{formatDate(post.date)}</span>
          <motion.span className={styles.arrow} variants={{ hover: { x: 4 } }}>
            Read more →
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
}
