import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // For map placeholder
import styles from '../styles/Contact.module.css';
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid. Please use a valid format (e.g., name@example.com).";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    // Subject is optional, so no validation needed unless specific rules apply
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      console.log("Form data submitted:", formData);
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 1000); // Simulate network delay
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Optionally, clear errors as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Message Sent - Melatonin AI</title>
          <meta name="description" content="Your message has been successfully sent to the Melatonin AI team." />
        </Head>
        <nav className={styles.nav}>
          <Link href="/"><a>&larr; Back to Home</a></Link>
        </nav>
        <main className={styles.main}>
          <div className={styles.successMessage}>
            <h1 className={styles.title}>Thank You!</h1>
            <p>Your message has been successfully sent. We aim to respond within 24-48 hours.</p>
            <p>
              <Link href="/"><a>Return to the Home Page</a></Link> or <Link href="/faqs"><a>check our FAQs</a></Link>.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us - Melatonin AI</title>
        <meta name="description" content="Get in touch with the Melatonin AI team for support, feedback, or inquiries. We're here to help you on your journey to better sleep." />
        {/* Ensure Google Fonts are linked, typically in _app.js or a global stylesheet */}
      </Head>

      <nav className={styles.nav}>
        <Link href="/"><a>&larr; Back to Home</a></Link>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Get In Touch</h1>
        <p className={styles.intro}>
          We're here to help with any questions, feedback, or support you may need. Fill out the form below, and our team will get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className={styles.error} role="alert">{errors.name}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className={styles.error} role="alert">{errors.email}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject (Optional)</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {/* No error display for optional field unless specific validation exists */}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              aria-required="true"
              aria-invalid={errors.message ? "true" : "false"}
            ></textarea>
            {errors.message && <p className={styles.error} role="alert">{errors.message}</p>}
          </div>

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <section className={styles.contactInfo}>
          <h2>Other Ways to Reach Us</h2>
          <p>
            <strong>Support Email:</strong> <a href="mailto:support@melatoninapp.placeholder.com">support@melatoninapp.placeholder.com</a>
          </p>
          <p>
            <strong>Press & Media Inquiries:</strong> <a href="mailto:media@melatoninapp.placeholder.com">media@melatoninapp.placeholder.com</a>
          </p>
          <div className={styles.socialLinks}>
            Follow us:
            <a href="https://twitter.com/melatoninapp_placeholder" target="_blank" rel="noopener noreferrer">Twitter (Placeholder)</a>
            <a href="https://facebook.com/melatoninapp_placeholder" target="_blank" rel="noopener noreferrer">Facebook (Placeholder)</a>
            <a href="https://instagram.com/melatoninapp_placeholder" target="_blank" rel="noopener noreferrer">Instagram (Placeholder)</a>
          </div>
          <p style={{marginTop: '1rem'}}>
            <strong>Our Office (Placeholder):</strong><br />
            123 Sleepy Lane<br />
            Dreamville, CA 90210<br />
            United States
          </p>
        </section>

        <div className={styles.mapPlaceholder}>
          <Image src="/assets/map-placeholder.png" alt="Map showing office location placeholder" layout="fill" objectFit="cover" />
          {/* Text removed as Image component will fill this div */}
        </div>
      </main>
    </div>
  );
}
