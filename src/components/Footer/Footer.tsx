"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Footer.module.scss";
import logo from "../../../public/images/logo.jpg";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="wrap">
        <div className={styles.cta}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            Let&apos;s plug your brand into the hub.
          </motion.h2>
          <motion.a
            href="mailto:hello@digihub.agency"
            className={`${styles.btn} ${styles.btnPrimary}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            hello@digihub.agency →
          </motion.a>
        </div>

        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="#home" className={styles.logo}>
              <span className={styles.logoImg}>
                <Image src={logo} alt="Digi Hub" width={32} height={32} />
              </span>
              DIGI HUB
            </a>
            <p>
              A one-stop marketing agency connecting strategy, content, code and
              film under a single team.
            </p>
          </div>

          <div className={styles.col}>
            <h4>Sitemap</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>More</h4>
            <ul>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#services">Careers</a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Follow</h4>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">YouTube</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Digi Hub. All rights reserved.</span>
          <span className={styles.mono}>
            MADE WITH ONE TEAM, EIGHT DISCIPLINES
          </span>
        </div>
      </div>
    </footer>
  );
}
