import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/BlogPost.module.css'; // Adjusted path

// Hardcoded data for a sample blog post
const post = {
  title: 'Understanding Your Sleep Cycles (Placeholder)',
  author: 'Dr. Irene Dreamer',
  date: 'October 26, 2023',
  featuredImageUrl: '/assets/featured-post-image.png', // Using a general featured image
  categories: ['Sleep Science', 'Wellness', 'Tutorials'],
  tags: ['REM Sleep', 'Deep Sleep', 'Sleep Stages', 'Melatonin AI Basics'],
  content: `
    <p>This is a placeholder for the full blog post content. Imagine a well-structured article here that dives deep into the fascinating world of sleep science.</p>
    
    <h2>The Different Stages of Sleep</h2>
    <p>Sleep is not a monolithic state. Instead, it's a dynamic process that cycles through different stages, primarily categorized into Non-Rapid Eye Movement (NREM) sleep and Rapid Eye Movement (REM) sleep. Each stage plays a crucial role in physical and mental restoration.</p>
    
    <h3>NREM Stage 1: Light Sleep</h3>
    <p>This is the initial stage when you're just drifting off. It's easy to be woken up. You might experience muscle twitches or the sensation of falling. Placeholder content to make this section longer and more representative of actual blog post length. This stage typically lasts for only a few minutes.</p>

    <h3>NREM Stage 2: Deeper Light Sleep</h3>
    <p>Your heart rate and body temperature decrease. Brain waves begin to slow down, with occasional bursts of rapid waves called sleep spindles. This stage prepares you for deep sleep. Placeholder content to make this section longer and more representative of actual blog post length. People generally spend about 50% of their total sleep time in this stage.</p>

    <h3>NREM Stage 3: Deep Sleep (Slow-Wave Sleep)</h3>
    <p>This is the most restorative stage of sleep. Your body repairs tissues, builds bone and muscle, and strengthens the immune system. Waking up from this stage can result in significant grogginess (sleep inertia). Placeholder content to make this section longer and more representative of actual blog post length. It is particularly important for physical recovery and growth.</p>

    <h2>REM Sleep: The Dreaming Stage</h2>
    <p>Characterized by rapid eye movements, increased brain activity, and vivid dreams. Your muscles become temporarily paralyzed to prevent you from acting out your dreams. REM sleep is crucial for cognitive functions like learning, memory consolidation, and emotional regulation. Placeholder content to make this section longer and more representative of actual blog post length. The duration of REM sleep stages typically increases as the night progresses.</p>

    <blockquote>
      "Understanding your sleep cycles is the first step towards optimizing your sleep with Melatonin AI."
    </blockquote>

    <h2>How Melatonin AI Helps</h2>
    <p>Melatonin AI uses advanced algorithms to track these sleep stages, providing you with detailed reports and insights. By understanding your unique sleep architecture, you can make informed decisions to improve your sleep quality and overall well-being. Placeholder content to make this section longer and more representative of actual blog post length. The app provides actionable tips based on your data.</p>

    <pre><code>// Example: Pseudocode for sleep stage detection
function detectSleepStage(sensorData) {
  if (sensorData.movement < THRESHOLD_LOW && sensorData.heartRate < HR_LOW) {
    return "DEEP_SLEEP";
  } else if (sensorData.eyeMovement > THRESHOLD_HIGH) {
    return "REM_SLEEP";
  }
  return "LIGHT_SLEEP";
}</code></pre>
    <p>Further placeholder text to ensure the page has a decent length to scroll and test layout properly. This section could discuss future research or advanced topics related to sleep cycles and technology. We are constantly working to improve our algorithms and provide the most accurate sleep analysis possible.</p>
  `
};

export default function SamplePostPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title} - Melatonin AI Blog</title>
        <meta name="description" content={`Read about ${post.title} on the Melatonin AI blog.`} />
        {/* Ensure Google Fonts are linked, typically in _app.js or a global stylesheet */}
      </Head>

      <nav className={styles.nav}>
        <Link href="/blog"><a>&larr; Back to Blog Index</a></Link>
      </nav>

      <main className={styles.main}>
        <article>
          <header className={styles.postHeader}>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <div className={styles.postMeta}>
              <span>By: {post.author}</span> | <span>Published: {post.date}</span>
            </div>
            <div className={styles.featuredImage}>
              <Image src={post.featuredImageUrl} alt={`Featured image for ${post.title}`} layout="fill" objectFit="cover" />
              {/* Text removed as Image component will fill this div */}
            </div>
          </header>

          <section
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className={styles.postFooter}>
            <div className={styles.postCategoriesTags}>
              <strong>Categories:</strong> {post.categories.map(cat => <span key={cat}>{cat}</span>)}
            </div>
            <div className={styles.postCategoriesTags}>
              <strong>Tags:</strong> {post.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
          </footer>
        </article>

        <section className={styles.commentsSection}>
          <h2>Comments</h2>
          <p>Comments coming soon! We'd love to hear your thoughts on this topic in the future.</p>
        </section>
      </main>
    </div>
  );
}
