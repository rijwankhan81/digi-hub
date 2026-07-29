"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "./PortfolioGrid.module.scss";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  type PortfolioItem,
} from "@/data/portfolio";
import Lightbox from "../Lightbox/Lightbox";

const FILTERS = ["All", ...PORTFOLIO_CATEGORIES] as const;

export default function PortfolioGrid() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const [openItem, setOpenItem] = useState<PortfolioItem | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((item) => item.category === active),
    [active],
  );

  return (
    <section className={styles.section} id="work">
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
          {filtered.map((item, i) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={i}
              onOpen={setOpenItem}
            />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No projects in this category yet.</p>
        )}
      </div>

      <Lightbox item={openItem} onClose={() => setOpenItem(null)} />
    </section>
  );
}
