import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Replace with your Mailchimp form endpoint
      const response = await fetch('https://yourdomain.us1.list-manage.com/subscribe/post?u=YOUR_USER_ID&id=YOUR_LIST_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          EMAIL: email,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="newsletter">
      <div className="container">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest tech news and productivity tips.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="button"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {message && (
          <p style={{ 
            color: status === 'success' ? 'green' : 'red',
            marginTop: '1rem'
          }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm; 