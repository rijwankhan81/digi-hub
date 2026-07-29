import styles from "./ContactSection.module.scss";
import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../ContactInfo/ContactInfo";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.grid}`}>
        <ContactInfo />
        <div className={styles.formCol}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
