import React from 'react';

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  isAffiliate?: boolean;
  affiliateLink?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  imageUrl,
  category,
  date,
  readTime,
  slug,
  isAffiliate = false,
  affiliateLink
}) => {
  return (
    <article className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <div className="card-meta">
          <span className="card-category">{category}</span>
          <span className="card-date">{date}</span>
          <span className="card-read-time">{readTime} read</span>
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        {isAffiliate && affiliateLink ? (
          <a 
            href={affiliateLink} 
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        ) : (
          <a href={`/article/${slug}`} className="button">
            Read More
          </a>
        )}
      </div>
    </article>
  );
};

export default ArticleCard; 