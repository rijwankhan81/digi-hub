"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./FeaturedWork.module.scss";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import Lightbox from "../Lightbox/Lightbox";
import { PORTFOLIO_ITEMS, type PortfolioItem } from "@/data/portfolio";

const FEATURED = PORTFOLIO_ITEMS.filter((item) => item.featured);

export default function FeaturedWork() {
  const [openItem, setOpenItem] = useState<PortfolioItem | null>(null);

  return (
    <section className={styles.section}>
      <div className="wrap">
        <motion.div
          className={styles.sectionHead}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.headText}>
            <div className={styles.eyebrow}>Recent work</div>
            <h2>A few projects from the hub.</h2>
          </div>
          <a href="/portfolio" className={styles.viewAll}>
            View all work →
          </a>
        </motion.div>

        <div className={styles.grid}>
          {FEATURED.map((item, i) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={i}
              onOpen={setOpenItem}
            />
          ))}
        </div>
      </div>

      <Lightbox item={openItem} onClose={() => setOpenItem(null)} />
    </section>
  );
}
