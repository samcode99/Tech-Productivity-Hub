import React from 'react';
import AdComponent from './components/AdComponent';
import NewsletterForm from './components/NewsletterForm';
import ArticleCard from './components/ArticleCard';

const App: React.FC = () => {
  const featuredArticles = [
    {
      title: "The Future of AI in 2024",
      description: "Discover how artificial intelligence is shaping our future and what to expect in the coming years.",
      imageUrl: "https://source.unsplash.com/random/800x600?tech",
      category: "Technology",
      date: "March 15, 2024",
      readTime: "5 min",
      slug: "ai-future-2024"
    },
    {
      title: "10 Ways to Boost Your Productivity",
      description: "Learn proven techniques to maximize your efficiency and achieve more in less time.",
      imageUrl: "https://source.unsplash.com/random/800x600?productivity",
      category: "Productivity",
      date: "March 14, 2024",
      readTime: "7 min",
      slug: "productivity-tips"
    },
    {
      title: "Best Productivity Tools of 2024",
      description: "Explore the top-rated tools that can help streamline your workflow and boost productivity.",
      imageUrl: "https://source.unsplash.com/random/800x600?tools",
      category: "Tools",
      date: "March 13, 2024",
      readTime: "6 min",
      slug: "best-tools-2024",
      isAffiliate: true,
      affiliateLink: "https://amazon.com/your-affiliate-link"
    }
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="/" className="logo">TechHub</a>
            <div className="nav-links">
              <a href="/tech">Tech News</a>
              <a href="/productivity">Productivity</a>
              <a href="/tools">Tools</a>
              <a href="/about">About</a>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Your Daily Dose of Tech & Productivity</h1>
          <p>Stay updated with the latest tech news, productivity tips, and tools to enhance your digital life.</p>
        </div>
      </section>

      <main className="container">
        {/* Top Ad Banner */}
        <AdComponent 
          slot="top-banner" 
          format="horizontal"
          style={{ margin: '2rem 0' }}
        />

        <section className="content-grid">
          {featuredArticles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </section>

        {/* Middle Ad Banner */}
        <AdComponent 
          slot="middle-banner" 
          format="horizontal"
          style={{ margin: '2rem 0' }}
        />

        {/* Newsletter Section */}
        <NewsletterForm />

        {/* Bottom Ad Banner */}
        <AdComponent 
          slot="bottom-banner" 
          format="horizontal"
          style={{ margin: '2rem 0' }}
        />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <ul className="footer-links">
                <li><a href="/about">Our Story</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Categories</h3>
              <ul className="footer-links">
                <li><a href="/tech">Tech News</a></li>
                <li><a href="/productivity">Productivity</a></li>
                <li><a href="/tools">Tools</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <ul className="footer-links">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/cookies">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App; 