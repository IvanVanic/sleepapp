import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react'; // For search functionality
import styles from '../styles/Faqs.module.css';

const initialFaqData = [
  {
    category: "General Questions",
    questions: [
      { q: "What is Melatonin AI?", a: "Melatonin AI is a personalized sleep coaching app that uses artificial intelligence to analyze your sleep patterns and provide tailored recommendations to help you improve your sleep quality. (Placeholder)" },
      { q: "How does Melatonin AI track my sleep?", a: "Melatonin AI uses advanced algorithms and (optionally) your phone's sensors to detect sleep stages, duration, and disturbances. No wearable device is required, but integration options may be available. (Placeholder)" },
      { q: "Is Melatonin AI scientifically backed?", a: "Yes, our methods are based on established sleep science principles and research. We aim to provide evidence-based guidance for better sleep. (Placeholder)" },
      { q: "Who is Melatonin AI for?", a: "Melatonin AI is for anyone looking to understand their sleep better, improve sleep quality, establish a healthier sleep routine, or wake up feeling more refreshed. (Placeholder)" },
    ]
  },
  {
    category: "Using the App",
    questions: [
      { q: "Do I need a special device to use Melatonin AI?", a: "No, Melatonin AI primarily uses your smartphone. Some features might be enhanced with smartwatch integration, but it's not essential. (Placeholder)" },
      { q: "How do I get started with Melatonin AI?", a: "Simply download the app, create an account, and follow the on-screen instructions to set up your profile and start your first sleep analysis. (Placeholder)" },
      { q: "How accurate is the sleep tracking?", a: "We strive for high accuracy using sophisticated algorithms. However, accuracy can be influenced by environmental factors and device placement. (Placeholder)" },
      { q: "What is the Smart Alarm feature?", a: "The Smart Alarm feature aims to wake you during your lightest sleep phase within your set wake-up window, helping you feel more refreshed. (Placeholder)" },
    ]
  },
  {
    category: "Subscription & Privacy",
    questions: [
      { q: "Is Melatonin AI a free app?", a: "Melatonin AI may offer a free trial or basic features. Advanced features and personalized coaching are typically part of a subscription plan. (Placeholder)" },
      { q: "How is my personal data handled?", a: "We take data privacy very seriously. Your data is encrypted and stored securely. Please refer to our Privacy Policy for detailed information. (Placeholder)" },
      { q: "Can I cancel my subscription anytime?", a: "Yes, subscriptions can typically be managed and canceled through the app store (iOS App Store or Google Play Store) where you made the purchase. (Placeholder)" },
    ]
  }
];

export default function FaqsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqData, setFilteredFaqData] = useState(initialFaqData);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (!term.trim()) {
      setFilteredFaqData(initialFaqData);
      return;
    }

    const filtered = initialFaqData.map(category => {
      const filteredQuestions = category.questions.filter(
        faq => faq.q.toLowerCase().includes(term) || faq.a.toLowerCase().includes(term)
      );
      return { ...category, questions: filteredQuestions };
    }).filter(category => category.questions.length > 0);

    setFilteredFaqData(filtered);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>FAQs - Melatonin AI</title>
        <meta name="description" content="Find answers to frequently asked questions about the Melatonin AI sleep improvement app, its features, and how it works." />
        {/* Ensure Google Fonts are linked, typically in _app.js or a global stylesheet */}
      </Head>

      <nav className={styles.nav}>
        <Link href="/"><a>&larr; Back to Home</a></Link>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.intro}>
          Find answers to common questions about Melatonin AI, its features, subscription, and how it can help you achieve better sleep.
        </p>

        <input
          type="text"
          placeholder="Search FAQs (e.g., 'tracking', 'subscription')..."
          className={styles.searchBar}
          value={searchTerm}
          onChange={handleSearch}
        />

        {filteredFaqData.length > 0 ? (
          filteredFaqData.map((categoryItem, catIndex) => (
            <section key={catIndex} className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>{categoryItem.category}</h2>
              {categoryItem.questions.map((faq, qIndex) => (
                <details key={qIndex} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </section>
          ))
        ) : (
          <p>No FAQs found matching your search term. Please try different keywords or browse the categories.</p>
        )}

        <section className={styles.contactSupportCta}>
          <h2>Can't find your answer?</h2>
          <p>
            Our support team is happy to help! Reach out to us for any further questions or assistance you may need.
          </p>
          {/* Assuming a /contact page will be created later */}
          <Link href="/contact">
            <a className={styles.ctaButton}>Contact Support</a>
          </Link>
        </section>
      </main>
    </div>
  );
}
