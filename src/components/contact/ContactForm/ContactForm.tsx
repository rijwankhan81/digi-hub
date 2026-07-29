"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ContactForm.module.scss";

const SERVICES = [
  "Digital Marketing",
  "Branding & Creative",
  "Content & Media Production",
  "Business Consulting",
  "Website & App Development",
  "AI Solutions",
  "Training & Workshops",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!EMAIL_RE.test(values.email.trim())) {
      next.email = "That doesn't look like a valid email.";
    }
    if (!values.message.trim())
      next.message = "Tell us a little about the project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      // NOTE: this is a static front-end demo — swap this block for a real
      // submission, e.g.:
      //   await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) })
      // or a form service (Formspree, Resend, etc.). Currently simulated.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setValues(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        className={styles.success}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.successIcon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12.5L9.5 18L20 6"
              stroke="var(--cyan)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3>Message sent.</h3>
        <p>
          Thanks for reaching out — we&apos;ll get back to you within one
          business day.
        </p>
        <button
          type="button"
          className={styles.resetBtn}
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={update("name")}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.span
                className={styles.error}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {errors.name}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={update("email")}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.span
                className={styles.error}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {errors.email}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={update("phone")}
            placeholder="Optional"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            value={values.company}
            onChange={update("company")}
            placeholder="Optional"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="service">Service you&apos;re interested in</label>
        <select
          id="service"
          value={values.service}
          onChange={update("service")}
        >
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          placeholder="Tell us a bit about the project, timeline and goals."
          aria-invalid={!!errors.message}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.span
              className={styles.error}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {errors.message}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {status === "error" && (
        <p className={styles.formError}>
          Something went wrong sending that — please try again, or email us
          directly.
        </p>
      )}

      <motion.button
        type="submit"
        className={styles.submit}
        disabled={status === "submitting"}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {status === "submitting" ? "Sending…" : "Send message →"}
      </motion.button>
    </form>
  );
}
