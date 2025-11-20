class QualxpFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .footer {
          background-color: #1f2937;
          color: white;
          padding: 2rem 0;
          margin-top: 4rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .footer-text {
          font-size: 1.125rem;
          font-weight: bold;
        }
        .footer-slogan {
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
        }
        .footer-link {
          color: white;
          text-decoration: none;
          transition: opacity 0.3s ease;
        }
        .footer-link:hover {
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .copyright {
          text-align: center;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #374151;
          color: #9ca3af;
          font-size: 0.875rem;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .contact-details {
          margin-top: 1rem;
          text-align: center;
        }
        .contact-details p {
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          opacity: 0.8;
        }
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
          .footer-links {
            justify-content: center;
          }
        }
      </style>
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-logo">
              <i data-feather="award"></i>
              <div>
                <div class="footer-text">QualXP</div>
                <div class="footer-slogan">La qualité par l'expérience</div>
              </div>
            </div>
            <ul class="footer-links">
              <li><a href="index.html" class="footer-link">Accueil</a></li>
              <li><a href="#" class="footer-link">À propos</a></li>
              <li