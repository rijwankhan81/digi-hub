"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "./BlogGrid.module.scss";
import BlogCard from "../BlogCard/BlogCard";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/data/blog";

const FILTERS = ["All", ...BLOG_CATEGORIES] as const;

export default function BlogGrid() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? BLOG_POSTS
        : BLOG_POSTS.filter((post) => post.category === active),
    [active],
  );

  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.filters}>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`${styles.pill} ${
                active === filter ? styles.pillActive : ""
              }`}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.grid}>
          {filtered.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No posts in this category yet.</p>
        )}
      </div>
    </section>
  );
}
