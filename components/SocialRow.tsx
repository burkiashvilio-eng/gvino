export default function SocialRow() {
  return (
    <div className="social-row">
      <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
        <div className="social-icon">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
          </svg>
        </div>
        Instagram
      </a>
    </div>
  );
}
