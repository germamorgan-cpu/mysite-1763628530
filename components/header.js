class QualxpHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: white;
        }
        .logo-text {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .logo-slogan {
          font-size: 0.875rem;
          opacity: 0.9;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .nav-link {
          color: white;
          text-decoration: none;
          transition: opacity 0.3s ease;
          font-weight: 500;
        }
        .nav-link:hover {
          opacity: 0.8;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.875rem;
          opacity: 0.9;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        @media (max-width: 768px) {
          .header-container {
            flex-direction: column;
            gap: 1rem;
          }
          .nav-links {
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          .contact-info {
            text-align: center;
            align-items: center;
          }
        }
      </style>
      <header class="header">
        <div class="header-container">
          <a href="index.html" class="logo">
            <i data-feather="award"></i>
            <div>
              <div class="logo-text">QualXP</div>
              <div class="logo-slogan">La qualité par l'expérience</div>
            </div>
          </a>
          <nav>
            <ul class="nav-links">
              <li><a href="index.html" class="nav-link">Accueil</a></li>
            <li><a href="upload-guide.html" class="nav-link">Guide Upload</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
    
    // Replace feather icons after component is rendered
    setTimeout(() => {
      if (typeof feather !== 'undefined') {
        feather.replace();
      }
    }, 100);
  }
}

customElements.define('qualxp-header', QualxpHeader);