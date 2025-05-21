import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/BlogIndex.module.css'; // Adjusted path

const posts = [
  {
    slug: 'sample-post', // Will link to pages/blog/sample-post.js
    title: 'Understanding Your Sleep Cycles (Placeholder)',
    excerpt: 'A deep dive into the different stages of sleep (REM, Deep, Light) and why they matter for your overall health, mood, and cognitive function. Learn how Melatonin AI helps you track them.',
    author: 'Dr. Irene Dreamer',
    date: 'October 26, 2023',
    imageUrl: '/assets/blog-post-image1.png',
    categories: ['Sleep Science', 'Wellness'],
    tags: ['REM Sleep', 'Deep Sleep', 'Sleep Stages']
  },
  {
    slug: 'benefits-of-consistent-sleep', // Placeholder slug
    title: 'Top 5 Benefits of a Consistent Sleep Schedule (Placeholder)',
    excerpt: 'Discover how maintaining a regular sleep-wake cycle can dramatically improve your energy levels, productivity, and even your immune system. Plus, tips on how to achieve it.',
    author: 'Melatonin AI Team',
    date: 'October 15, 2023',
    imageUrl: '/assets/blog-post-image2.png',
    categories: ['Healthy Habits', 'Lifestyle'],
    tags: ['Consistency', 'Energy Boost', 'Productivity']
  },
  {
    slug: 'introducing-smart-alarm-v2', // Placeholder slug
    title: 'New! Melatonin AI Smart Alarm V2 is Here (Placeholder)',
    excerpt: 'Explore the enhanced features of our Smart Alarm, designed to wake you up gently during your lightest sleep phase for a truly refreshing start to your day. Now with more customization!',
    author: 'Dev Team Updates',
    date: 'September 30, 2023',
    imageUrl: '/assets/blog-post-image3.png',
    categories: ['App Updates', 'Features'],
    tags: ['Smart Alarm', 'New Release', 'User Experience']
  }
];

export default function BlogIndexPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog - Melatonin AI</title>
        <meta name="description" content="Explore insights on sleep science, wellness tips, and updates from the Melatonin AI team." />
        {/* Ensure Google Fonts are linked, typically in _app.js or a global stylesheet */}
      </Head>

      <nav className={styles.nav}>
        <Link href="/"><a>&larr; Back to Home</a></Link>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Sleep Science & Wellness Hub</h1>
        <p className={styles.intro}>
          Your go-to resource for understanding sleep, improving your well-being, and getting the most out of Melatonin AI.
        </p>

        {/* Filtering and Sorting UI Placeholders */}
        <div className={styles.filterSortContainer}>
          <div>
            <label htmlFor="category-filter">Filter by Category:</label>
            <select id="category-filter" name="category">
              <option value="">All Categories</option>
              <option value="sleep-science">Sleep Science</option>
              <option value="wellness">Wellness</option>
              <option value="healthy-habits">Healthy Habits</option>
              <option value="app-updates">App Updates</option>
            </select>
          </div>
          <div className={styles.sortLinks}>
            <label>Sort by:</label>
            <a href="?sort=date_desc">Newest</a> |
            <a href="?sort=date_asc">Oldest</a> |
            <a href="?sort=popularity">Popularity</a>
          </div>
        </div>

        {/* Blog Post Previews Grid */}
        <div className={styles.postsGrid}>
          {posts.map(post => (
            <div key={post.slug} className={styles.postPreviewCard}>
              <div className={styles.postImagePlaceholder}>
                <Image src={post.imageUrl} alt={`Featured image for ${post.title}`} layout="fill" objectFit="cover" />
                 {/* Text removed as Image component will fill this div */}
              </div>
              <div className={styles.postContent}>
                <h2 className={styles.postTitle}>
                  <Link href={`/blog/${post.slug}`}><a>{post.title}</a></Link>
                </h2>
                <div className={styles.postMeta}>
                  <span>By: {post.author}</span> | <span>Date: {post.date}</span>
                </div>
                <div className={styles.postCategoriesTags}>
                  Categories: {post.categories.map(cat => <span key={cat}>{cat}</span>)}
                  <br />
                  Tags: {post.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <a className={styles.readMoreLink}>Read More &rarr;</a>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className={styles.pagination}>
          <a href="#prev" className={styles.disabled}>&laquo; Previous</a>
          <span className={styles.currentPage}>1</span>
          <a href="#page2">2</a>
          <a href="#page3">3</a>
          <a href="#next">Next &raquo;</a>
        </div>
      </main>
    </div>
  );
}
