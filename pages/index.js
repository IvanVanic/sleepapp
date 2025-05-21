import Head from 'next/head';
import Image from 'next/image'; // Import Image component
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Melatonin AI - Optimize Your Sleep</title>
        <meta name="description" content="Unlock restful nights with Melatonin AI, your personalized sleep coach." />
        {/* <link rel="icon" href="/favicon.ico" />  You can add a favicon later */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroHeadline}>Unlock Restful Nights with Melatonin AI</h1>
          <p className={styles.heroValueProposition}>
            Your personalized AI sleep coach for deeper, more rejuvenating sleep.
          </p>
          <div className={styles.heroImagePlaceholder}>
            {/* Placeholder for app mockup. Using a div for now, can be replaced with Image component */}
            App Mockup
          </div>
          <a href="#download" className={styles.ctaButton}>Download Now</a>
        </section>

        {/* Feature Snapshot Section */}
        <section className={`${styles.section} ${styles.featureSnapshot}`}>
          <h2 className={styles.sectionTitle}>Discover Your Best Sleep</h2>
          <p className={styles.sectionSubtitle}>
            Melatonin AI offers a suite of tools to help you understand and improve your sleep.
          </p>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}> {/* Placeholder for icon */}
                {/* For actual SVG: <Image src="/assets/icon-feature1.svg" alt="AI Sleep Tracking" width={30} height={30} /> */}
                <span>AI</span>
              </div>
              <h3 className={styles.featureTitle}>AI Sleep Tracking</h3>
              <p className={styles.featureDescription}>Automatically monitor your sleep cycles and quality.</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}> {/* Placeholder for icon */}
                <span>P</span>
              </div>
              <h3 className={styles.featureTitle}>Personalized Insights</h3>
              <p className={styles.featureDescription}>Receive tailored advice based on your unique sleep patterns.</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}> {/* Placeholder for icon */}
                <span>SA</span>
              </div>
              <h3 className={styles.featureTitle}>Smart Alarm</h3>
              <p className={styles.featureDescription}>Wake up gently during your lightest sleep phase.</p>
            </div>
          </div>
        </section>

        {/* Core Benefits Section */}
        <section className={`${styles.section} ${styles.coreBenefits}`}>
          <h2 className={styles.sectionTitle}>The Benefits of Better Sleep</h2>
          <p className={styles.sectionSubtitle}>
            Experience the profound impact of optimized sleep on your daily life.
          </p>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <h3>Improve Sleep Quality</h3>
              <p>Understand factors affecting your sleep and make informed adjustments for deeper rest.</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Understand Your Sleep Patterns</h3>
              <p>Gain clarity on your sleep architecture, including REM, deep, and light sleep stages.</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Wake Up Refreshed</h3>
              <p>Align your wake-up time with your natural rhythms, feeling more energized throughout the day.</p>
            </div>
          </div>
        </section>

        {/* Testimonial Snippets Section */}
        <section className={`${styles.section} ${styles.testimonialSnippets}`}>
          <h2 className={styles.sectionTitle}>Loved by Users</h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"This app changed my life! I finally understand why I wasn't sleeping well."</p>
              <p className={styles.testimonialAuthor}>- Jane D.</p>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"The smart alarm is a game-changer. I wake up feeling so much better."</p>
              <p className={styles.testimonialAuthor}>- Mark S.</p>
            </div>
          </div>
        </section>

        {/* Secondary CTA Section */}
        <section className={`${styles.section} ${styles.secondaryCta}`}>
          <h2 className={styles.sectionTitle}>Ready to Transform Your Sleep?</h2>
          <p className={styles.sectionSubtitle}>
            Explore all the features designed to guide you towards optimal rest and well-being.
          </p>
          {/* Assuming a future /features page */}
          <a href="/features" className={styles.secondaryCtaButton}>Explore Features</a>
        </section>
      </main>
    </div>
  );
}
