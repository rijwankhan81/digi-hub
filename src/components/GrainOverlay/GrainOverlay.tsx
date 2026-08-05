import styles from "./GrainOverlay.module.scss";

/**
 * A very subtle, fixed film-grain texture over the whole site. On its
 * own this is a small detail, but it's part of what separates a
 * "flat browser gradient" feel from something that reads as designed —
 * most premium agency sites have some form of this.
 */
export default function GrainOverlay() {
  return <div className={styles.grain} aria-hidden="true" />;
}
