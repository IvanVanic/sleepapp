import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Using Next.js Image component
import styles from '../styles/Features.module.css';

export default function FeaturesPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Features - Melatonin AI</title>
        <meta name="description" content="Explore the advanced features of Melatonin AI designed to help you understand and improve your sleep." />
        {/* Assuming fonts are loaded globally or in _app.js, otherwise link them here too */}
      </Head>

      {/* Basic Navigation */}
      <nav className={styles.nav}>
        <Link href="/"><a>&larr; Back to Home</a></Link>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Discover Melatonin AI's Powerful Features</h1>
        <p className={styles.intro}>
          Melatonin AI offers a comprehensive suite of tools to analyze your sleep, provide personalized insights, and help you achieve optimal rest, night after night.
        </p>

        {/* Feature 1: Advanced Sleep Cycle Analysis */}
        <section className={styles.featureSection}>
          <h2>
            <Image src="/assets/icon-feature-detail1.svg" alt="Analysis Icon" width={35} height={35} className={styles.featureIcon} />
            Advanced Sleep Cycle Analysis
          </h2>
          <p>
            Delve deep into your sleep architecture. Melatonin AI accurately tracks your sleep stages—REM, Deep, and Light sleep—providing you with a clear understanding of your nightly patterns. Identify disruptions and learn how to optimize each phase for maximum rejuvenation.
          </p>
          <div className={styles.featureScreenshot}>
            {/* <Image src="/assets/feature-screenshot-1.png" alt="Sleep Cycle Analysis Screenshot" layout="fill" objectFit="cover" /> */}
            Screenshot: Sleep Stage Graph
          </div>
          <p className={styles.technicalNote}>
            Utilizes state-of-the-art صوت analysis and motion detection algorithms, processed on-device for privacy, to map your sleep cycles without requiring wearables.
          </p>
        </section>

        {/* Feature 2: AI-Powered Personalized Insights */}
        <section className={styles.featureSection}>
          <h2>
            <Image src="/assets/icon-feature-detail2.svg" alt="Insights Icon" width={35} height={35} className={styles.featureIcon} />
            AI-Powered Personalized Insights
          </h2>
          <p>
            Receive actionable advice tailored to your unique sleep data. Our AI engine learns your habits and provides customized recommendations on bedtime routines, environmental adjustments, and lifestyle changes to enhance your sleep quality and duration.
          </p>
          <div className={styles.featureScreenshot}>
            {/* <Image src="/assets/feature-screenshot-2.png" alt="Personalized Insights Screenshot" layout="fill" objectFit="cover" /> */}
            Screenshot: Personalized Tips Carousel
          </div>
          <p className={styles.technicalNote}>
            Our machine learning models continuously adapt, cross-referencing your data with a vast sleep science database to offer relevant and timely suggestions.
          </p>
        </section>

        {/* Feature 3: Smart Alarm & Gentle Wake-up */}
        <section className={styles.featureSection}>
          <h2>
            <Image src="/assets/icon-feature-detail3.svg" alt="Alarm Icon" width={35} height={35} className={styles.featureIcon} />
            Smart Alarm & Gentle Wake-up
          </h2>
          <p>
            Wake up feeling refreshed. The Melatonin AI Smart Alarm identifies your lightest sleep phase within your desired wake-up window, gently rousing you to avoid morning grogginess. Customize alarm sounds and snooze settings for a peaceful start to your day.
          </p>
          <div className={styles.featureScreenshot}>
            {/* <Image src="/assets/feature-screenshot-3.png" alt="Smart Alarm Screenshot" layout="fill" objectFit="cover" /> */}
            Screenshot: Smart Alarm Settings
          </div>
          <p className={styles.technicalNote}>
            Integrates with your device's clock and calendar, using real-time sleep stage data to trigger the alarm optimally.
          </p>
        </section>

        {/* Feature 4: Progress Tracking & Reports (Optional, as per requirements) */}
        <section className={styles.featureSection}>
           <h2>
            {/* Assuming a new icon or reuse, e.g., icon-feature-detail1.svg if generic enough */}
            <Image src="/assets/icon-feature1.svg" alt="Reports Icon" width={35} height={35} className={styles.featureIcon} />
            Progress Tracking & Reports
          </h2>
          <p>
            Monitor your sleep improvement over time with detailed reports and visualizations. Track key metrics like sleep duration, consistency, and time spent in different sleep stages. Celebrate your successes and identify areas for further improvement.
          </p>
           <div className={styles.featureScreenshot}>
            {/* <Image src="/assets/feature-screenshot-4.png" alt="Progress Report Screenshot" layout="fill" objectFit="cover" /> */}
            Screenshot: Weekly Sleep Report
          </div>
          <p className={styles.technicalNote}>
            Securely stores and processes your historical sleep data to generate insightful trends and comparative analyses, helping you understand the long-term impact of your efforts.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className={styles.ctaSection}>
          <h2>Ready to Transform Your Sleep?</h2>
          <p>
            Download Melatonin AI today and embark on your journey to deeper, more restorative sleep.
          </p>
          {/* Assuming /#download or a specific app store link */}
          <Link href="/#download">
            <a className={styles.ctaButton}>Download Now</a>
          </Link>
        </section>
      </main>
    </div>
  );
}
