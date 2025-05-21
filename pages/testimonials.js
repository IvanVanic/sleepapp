import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Using Next.js Image for avatars and logos
import styles from '../styles/Testimonials.module.css';

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      avatar: '/assets/user-avatar1.png',
      text: "Since using Melatonin AI, my sleep quality has drastically improved. I used to toss and turn, but now I fall asleep faster and wake up feeling genuinely refreshed. The personalized insights are spot on!",
      name: "Sarah L.",
      role: "Graphic Designer"
    },
    {
      id: 2,
      avatar: '/assets/user-avatar2.png',
      text: "I love the smart alarm feature! It wakes me up gently during my lightest sleep phase, and I no longer feel groggy in the mornings. This app is a game-changer for anyone looking to optimize their sleep.",
      name: "John B.",
      role: "Software Developer"
    },
    {
      id: 3,
      avatar: '/assets/user-avatar3.png',
      text: "As a busy professional, getting enough quality sleep is crucial. Melatonin AI has helped me understand my sleep patterns and make small adjustments that have had a huge impact. Highly recommend!",
      name: "Maria K.",
      role: "Marketing Manager"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Testimonials - Melatonin AI</title>
        <meta name="description" content="Read what users are saying about their improved sleep and well-being thanks to Melatonin AI." />
        {/* Ensure Google Fonts are linked, typically in _app.js or a global stylesheet */}
      </Head>

      {/* Basic Navigation */}
      <nav className={styles.nav}>
        <Link href="/"><a>&larr; Back to Home</a></Link>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>What Our Users Say About Melatonin AI</h1>
        <p className={styles.intro}>
          Discover how Melatonin AI is helping people like you achieve deeper sleep, boost energy levels, and enhance overall well-being. We're proud to share their stories.
        </p>

        {/* Testimonials Grid */}
        <div className={styles.testimonialsGrid}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <Image src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} width={70} height={70} className={styles.avatar} />
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <div>
                <p className={styles.userName}>{testimonial.name}</p>
                <p className={styles.userRole}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <section className={styles.videoTestimonials}>
          <h2>Hear From Our Users</h2>
          <div className={styles.videoPlaceholderContainer}>
            <div className={styles.videoPlaceholder}>
              {/* <Image src="/assets/video-testimonial-placeholder1.png" alt="Video testimonial placeholder 1" layout="fill" objectFit="cover" /> */}
              Video Placeholder 1
            </div>
            <div className={styles.videoPlaceholder}>
              {/* <Image src="/assets/video-testimonial-placeholder2.png" alt="Video testimonial placeholder 2" layout="fill" objectFit="cover" /> */}
              Video Placeholder 2
            </div>
          </div>
        </section>

        {/* App Store Ratings Section */}
        <section className={styles.appRatings}>
          <h2>Loved by Users Like You</h2>
          <div className={styles.ratingsContent}>
            <p className={styles.averageRating}><strong>Placeholder:</strong> 4.8 out of 5 stars</p>
            <div className={styles.storeLogos}>
              <div className={styles.storeLogo}>
                {/* <Image src="/assets/appstore-logo.png" alt="Apple App Store" width={120} height={40} objectFit="contain"/> */}
                App Store Logo
              </div>
              <div className={styles.storeLogo}>
                {/* <Image src="/assets/playstore-logo.png" alt="Google Play Store" width={120} height={40} objectFit="contain"/> */}
                Play Store Logo
              </div>
            </div>
            <a href="#rate-us" className={styles.rateUsButton}>Rate Us on the App Store!</a>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className={styles.ctaSection}>
          <h2>Ready to Share Your Success Story?</h2>
          <p>
            Join thousands of satisfied users who have transformed their sleep with Melatonin AI. Download the app today or explore more features.
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
