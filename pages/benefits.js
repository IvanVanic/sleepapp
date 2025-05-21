import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Using Next.js Image for icons
import styles from '../styles/Benefits.module.css';

export default function BenefitsPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Benefits - Melatonin AI</title>
        <meta name="description" content="Discover the life-changing benefits of optimizing your sleep with Melatonin AI, from increased energy to improved mood." />
        {/* Ensure Google Fonts are linked, typically in _app.js or a global stylesheet */}
      </Head>

      {/* Basic Navigation */}
      <nav className={styles.nav}>
        <Link href="/"><a>&larr; Back to Home</a></Link>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Experience the Transformative Benefits of Melatonin AI</h1>
        <p className={styles.intro}>
          Understanding and improving your sleep isn't just about feeling less tired. It's about unlocking a healthier, more vibrant you. Melatonin AI guides you on this journey, translating sleep science into actionable steps for profound well-being.
        </p>

        {/* Benefit 1 Section: Deeper Sleep */}
        <section className={styles.benefitSection}>
          <Image src="/assets/icon-benefit1.svg" alt="Deeper Sleep Icon" width={48} height={48} className={styles.benefitIcon} />
          <h2 className={styles.problem}>Struggling with Restless Nights?</h2>
          <h3 className={styles.solution}>Unlock Deeper, More Restorative Sleep</h3>
          <p>
            Melatonin AI analyzes your sleep patterns to identify disruptions and guides you towards habits that foster sustained, quality sleep, helping you spend more time in crucial deep and REM sleep stages.
          </p>
          <div className={styles.quantifiableBenefit}>
            <p><strong>Placeholder:</strong> Users typically experience a 25% increase in deep sleep duration within 3 weeks.</p>
          </div>
          <div className={styles.userScenario}>
            <p><em>Imagine drifting into a peaceful slumber quickly and waking up feeling truly refreshed, as if your body and mind have fully recharged.</em></p>
          </div>
          <p className={styles.scientificBacking}>
            Our AI leverages principles of sleep hygiene and cognitive behavioral therapy for insomnia (CBT-I) to suggest personalized environmental and behavioral adjustments.
          </p>
        </section>

        {/* Benefit 2 Section: Increased Energy */}
        <section className={styles.benefitSection}>
          <Image src="/assets/icon-benefit2.svg" alt="Increased Energy Icon" width={48} height={48} className={styles.benefitIcon} />
          <h2 className={styles.problem}>Waking Up Tired and Groggy?</h2>
          <h3 className={styles.solution}>Boost Daytime Energy & Mental Focus</h3>
          <p>
            By optimizing your sleep schedule and quality, Melatonin AI helps you wake up naturally from your lightest sleep phase, leading to significantly improved alertness, concentration, and cognitive performance throughout your day.
          </p>
          <div className={styles.quantifiableBenefit}>
            <p><strong>Placeholder:</strong> Over 70% of users report a noticeable reduction in daytime fatigue and improved focus by week 4.</p>
          </div>
          <div className={styles.userScenario}>
            <p><em>Picture yourself tackling your daily tasks with sustained energy and mental clarity, no longer needing that mid-afternoon coffee just to stay awake.</em></p>
          </div>
          <p className={styles.scientificBacking}>
            The smart alarm feature aligns with your circadian rhythm, while insights help stabilize your sleep-wake cycle, crucial for consistent energy levels.
          </p>
        </section>

        {/* Benefit 3 Section: Consistent Sleep Schedule */}
        <section className={styles.benefitSection}>
          <Image src="/assets/icon-benefit3.svg" alt="Consistent Schedule Icon" width={48} height={48} className={styles.benefitIcon} />
          <h2 className={styles.problem}>Inconsistent Sleep Schedule Affecting Your Life?</h2>
          <h3 className={styles.solution}>Establish a Healthier, More Consistent Sleep Routine</h3>
          <p>
            Melatonin AI provides gentle reminders and tracks your consistency, helping you build a robust sleep routine that aligns with your body's natural clock, even on weekends.
          </p>
          <div className={styles.quantifiableBenefit}>
            <p><strong>Placeholder:</strong> Users achieve a 50% improvement in sleep schedule consistency within the first month.</p>
          </div>
          <div className={styles.userScenario}>
            <p><em>Think about the ease of falling asleep and waking up around the same time naturally, feeling more in sync and reducing that 'social jetlag' feeling.</em></p>
          </div>
          <p className={styles.scientificBacking}>
            Reinforces the importance of a consistent circadian rhythm, which regulates hormone release (like melatonin and cortisol) vital for sleep and wakefulness.
          </p>
        </section>

        {/* Benefit 4 Section: Improved Mood & Well-being (Optional) */}
        <section className={styles.benefitSection}>
          <Image src="/assets/icon-benefit4.svg" alt="Improved Mood Icon" width={48} height={48} className={styles.benefitIcon} />
          <h2 className={styles.problem}>Does Poor Sleep Impact Your Mood?</h2>
          <h3 className={styles.solution}>Enhance Mood, Reduce Stress, and Improve Overall Well-being</h3>
          <p>
            Quality sleep is intrinsically linked to emotional regulation. By improving your sleep, Melatonin AI can help you feel more balanced, resilient to stress, and generally happier.
          </p>
          <div className={styles.quantifiableBenefit}>
            <p><strong>Placeholder:</strong> A significant number of users report feeling less irritable and more positive after consistent app usage.</p>
          </div>
          <div className={styles.userScenario}>
            <p><em>Imagine navigating daily challenges with a calmer demeanor and experiencing a greater sense of emotional stability and optimism.</em></p>
          </div>
          <p className={styles.scientificBacking}>
            Addresses how sleep deprivation affects the amygdala (emotion processing center) and prefrontal cortex, improving emotional reactivity and stress management.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className={styles.ctaSection}>
          <h2>Ready to Experience These Life-Changing Benefits?</h2>
          <p>
            Take the first step towards a healthier, happier, and more energized you. Download Melatonin AI today or explore our features in more detail.
          </p>
          <Link href="/#download">
            <a className={styles.ctaButton} style={{marginRight: '1rem'}}>Download App</a>
          </Link>
          <Link href="/features">
            <a className={styles.ctaButton}>Explore Features</a>
          </Link>
        </section>
      </main>
    </div>
  );
}
