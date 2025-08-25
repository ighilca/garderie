import './style.css'

// Gestion du menu mobile et du défilement fluide
document.addEventListener('DOMContentLoaded', function() {
  // Menu mobile
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });
  }
  
  // Défilement fluide pour les ancres
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Fermer le menu mobile si ouvert
        if (navList.classList.contains('active')) {
          navList.classList.remove('active');
          mobileToggle.classList.remove('active');
        }
        
        // Défilement fluide
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Fermer le menu mobile en cliquant sur un lien
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navList.classList.contains('active')) {
        navList.classList.remove('active');
        mobileToggle.classList.remove('active');
      }
    });
  });
  
          // Mettre à jour l'année dans le footer
        const currentYearElement = document.getElementById('current-year');
        if (currentYearElement) {
          currentYearElement.textContent = new Date().getFullYear();
        }

        // Gestion des liens de confidentialité
        const managePrivacyLink = document.getElementById('manage-privacy');
        const dataRightsLink = document.getElementById('data-rights');
        const revokeConsentLink = document.getElementById('revoke-consent');

        if (managePrivacyLink) {
          managePrivacyLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (window.privacyManager) {
              window.privacyManager.showConsentModal();
            }
          });
        }

        if (dataRightsLink) {
          dataRightsLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('/data-rights.html', '_blank');
          });
        }

        if (revokeConsentLink) {
          revokeConsentLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (window.privacyManager) {
              window.privacyManager.revokeConsent();
            }
          });
        }
      });

document.querySelector('#app').innerHTML = `
  <header class="header" role="banner">
    <div class="container">
      <div class="logo">
        <img src="/logo-garderie.png" alt="Logo Garderie des trésors précieux  - Garderie à Laval" class="logo-image" />
      </div>
      
      <nav class="main-nav" role="navigation" aria-label="Navigation principale">
        <ul class="nav-list">
          <li><a href="#accueil" class="nav-link" aria-label="Aller à la section Accueil">Accueil</a></li>
          <li><a href="#capacite" class="nav-link" aria-label="Aller à la section Capacité">Capacité</a></li>
          <li><a href="#informations" class="nav-link" aria-label="Aller à la section Informations">Informations</a></li>
          <li><a href="#activites" class="nav-link" aria-label="Aller à la section Activités">Activités</a></li>
          <li><a href="#moments" class="nav-link" aria-label="Aller à la section Moments">Moments</a></li>
          <li><a href="#creativite" class="nav-link" aria-label="Aller à la section Créativité">Créativité</a></li>
          <li><a href="#contact" class="nav-link" aria-label="Aller à la section Contact">Contact</a></li>
        </ul>
        
        <button class="mobile-menu-toggle" aria-label="Ouvrir le menu mobile" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>

    <main class="main" role="main">
    <section id="accueil" class="hero" aria-labelledby="hero-title">
      <div class="hero-background">
        <div class="hero-pattern"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            
            <h1 id="hero-title" class="hero-title">Garderie des trésors précieux</h1>
            <p class="hero-subtitle">Un environnement chaleureux et stimulant pour l'épanouissement de votre enfant</p>
            <p class="hero-description">Nous offrons un service de garde de qualité pour les enfants de 0 à 5 ans dans un environnement sécurisé et bienveillant à Laval. Notre garderie propose des programmes éducatifs adaptés et des activités créatives pour favoriser le développement de votre enfant.</p>
            <div class="hero-cta">
              <a href="#contact" class="cta-button primary" aria-label="Contacter la garderie des trésors précieux">Nous contacter</a>
              <a href="#informations" class="cta-button secondary" aria-label="En savoir plus sur notre garderie">En savoir plus</a>
            </div>
          </div>
          
          <div class="hero-visual">
            <div class="hero-image-container">
              <img src="/photo.png" alt="Enfants de la garderie des trésors précieux participant à des activités éducatives à Laval" class="hero-main-image" />
              <div class="floating-elements" aria-hidden="true">
                <div class="floating-icon" role="img" aria-label="Bébé">👶</div>
                <div class="floating-icon" role="img" aria-label="Art et créativité">🎨</div>
                <div class="floating-icon" role="img" aria-label="Puzzle et jeux">🧩</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="hero-stats">
          <div class="stat-card">
            <div class="stat-icon">🏠</div>
            <span class="stat-number">60</span>
            <span class="stat-label">Places disponibles</span>
          </div>
          <div class="stat-card">
            <div class="stat-icon">👥</div>
            <span class="stat-number">2</span>
            <span class="stat-label">Groupes d'âges</span>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⏰</div>
            <span class="stat-number">11h15</span>
            <span class="stat-label">Heures par jour</span>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📍</div>
            <span class="stat-number">Laval</span>
            <span class="stat-label">Localisation</span>
          </div>
        </div>
      </div>
    </section>



    <section id="capacite" class="capacity">
      <div class="container">
        <h2>Capacité et groupes d'âges</h2>
        <div class="capacity-grid">
          <div class="capacity-card">
            <div class="capacity-icon">👶</div>
            <h3>Poupons (>18 mois)</h3>
            <div class="capacity-number">10 places</div>
            <p>Soins spécialisés pour les tout-petits</p>
          </div>
          <div class="capacity-card">
            <div class="capacity-icon">🧒</div>
            <h3>Enfants (18+ mois)</h3>
            <div class="capacity-number">50 places</div>
            <p>Programme éducatif adapté</p>
          </div>
        </div>
        <div class="total-capacity">
          <h3>Capacité totale: <span class="highlight">60 places</span></h3>
        </div>
      </div>
    </section>

    <section id="informations" class="info">
      <div class="container">
        <h2>Informations importantes</h2>
        <div class="info-content">
          <div class="info-text">
            <p>Notre garderie respecte toutes les normes et inspections régulières imposées par le gouvernement du Québec.</p>
            <p>Les parents peuvent bénéficier du crédit d'impôt pour frais de garde d'enfants remboursable du Québec.</p>
            <p>Nous nous engageons à offrir un service de qualité dans un environnement sécurisé et stimulant pour l'épanouissement de votre enfant.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="activites" class="photo-section photo-learning">
      <div class="container">
        <div class="photo-content">
          <div class="photo-image">
            <img src="/photo (1).png" alt="Enfants en activité d'apprentissage avec des blocs colorés" />
          </div>
          <div class="photo-text">
            <h2>🎯 Activités d'apprentissage</h2>
            <p>Nos petits trésors développent leurs compétences cognitives à travers des activités ludiques et éducatives. Ici, ils manipulent des blocs colorés et des puzzles en bois, favorisant la concentration, la logique et la motricité fine.</p>
            <div class="photo-features">
              <div class="feature">
                <span class="feature-icon">🧩</span>
                <span>Puzzles et jeux de construction</span>
              </div>
              <div class="feature">
                <span class="feature-icon">🎨</span>
                <span>Développement de la créativité</span>
              </div>
              <div class="feature">
                <span class="feature-icon">🤝</span>
                <span>Interaction sociale et partage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="moments" class="photo-section photo-joy">
      <div class="container">
        <div class="photo-content reverse">
          <div class="photo-text">
            <h2>😊 Moments de bonheur</h2>
            <p>La joie et le rire résonnent dans notre garderie ! Ces moments de partage et de camaraderie sont essentiels au développement émotionnel et social de vos enfants. Chaque sourire témoigne de l'ambiance chaleureuse que nous cultivons.</p>
            <div class="photo-features">
              <div class="feature">
                <span class="feature-icon">💖</span>
                <span>Développement émotionnel</span>
              </div>
              <div class="feature">
                <span class="feature-icon">👥</span>
                <span>Amitiés et socialisation</span>
              </div>
              <div class="feature">
                <span class="feature-icon">🌟</span>
                <span>Confiance en soi</span>
              </div>
            </div>
          </div>
          <div class="photo-image">
            <img src="/photo (2).png" alt="Moment de partage et de joie entre enfants" />
          </div>
        </div>
      </div>
    </section>

    <section id="creativite" class="photo-section photo-creativity">
      <div class="container">
        <div class="photo-content">
          <div class="photo-image">
            <img src="/photo (3).png" alt="Activités créatives et éducatives" />
          </div>
          <div class="photo-text">
            <h2>🎨 Créativité et découverte</h2>
            <p>Nous encourageons l'exploration et la découverte à travers des activités artistiques et éducatives variées. Chaque jour, vos enfants découvrent de nouvelles façons d'exprimer leur créativité et d'élargir leurs horizons.</p>
            <div class="photo-features">
              <div class="feature">
                <span class="feature-icon">🎭</span>
                <span>Expression artistique</span>
              </div>
              <div class="feature">
                <span class="feature-icon">🔬</span>
                <span>Découverte scientifique</span>
              </div>
              <div class="feature">
                <span class="feature-icon">📚</span>
                <span>Apprentissage par le jeu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact" aria-labelledby="contact-title">
      <div class="container">
        <h2 id="contact-title">Nous contacter</h2>
        <div class="contact-grid">
          <div class="contact-info">
            <h3>Coordonnées</h3>
            <address>
              <div class="contact-item">
                <span class="contact-icon" aria-label="Téléphone">📞</span>
                <span><a href="tel:+14509336116" aria-label="Appeler la garderie au 450-933-6116">(450) 933-6116</a></span>
              </div>
              <div class="contact-item">
                <span class="contact-icon" aria-label="Email">📧</span>
                <span><a href="mailto:tresorsprecieux@gmail.com" aria-label="Envoyer un email à la garderie">tresorsprecieux@gmail.com</a></span>
              </div>
              <div class="contact-item">
                <span class="contact-icon" aria-label="Adresse">📍</span>
                <span>440 boulevard Ivan-Pavlov<br>Appartement 10-11-12<br>Laval, Québec H7N 4K3</span>
              </div>
            </address>
          </div>
          <div class="contact-hours">
            <h3>Heures d'ouverture</h3>
            <dl>
              <dt><strong>Lundi:</strong></dt>
              <dd><span class="hours-open">6h45 - 18h00</span></dd>
              <dt><strong>Mardi:</strong></dt>
              <dd><span class="hours-open">6h45 - 18h00</span></dd>
              <dt><strong>Mercredi:</strong></dt>
              <dd><span class="hours-open">6h45 - 18h00</span></dd>
              <dt><strong>Jeudi:</strong></dt>
              <dd><span class="hours-open">6h45 - 18h00</span></dd>
              <dt><strong>Vendredi:</strong></dt>
              <dd><span class="hours-open">6h45 - 18h00</span></dd>
              <dt><strong>Samedi:</strong></dt>
              <dd><span class="hours-closed">Fermé</span></dd>
              <dt><strong>Dimanche:</strong></dt>
              <dd><span class="hours-closed">Fermé</span></dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer" role="contentinfo">
    <div class="container">
      <p>&copy; <span id="current-year"></span> Garderie des trésors précieux - Tous droits réservés</p>
      <p>Garderie des trésors précieux - Laval, Québec | <a href="#accueil" aria-label="Retour en haut de la page">Retour en haut</a></p>
      <p><small>Garderie des trésors précieux- Service de garde d'enfants de 0 à 5 ans à Laval, Québec</small></p>
      
      <!-- Liens de confidentialité conformes à la Loi 25 -->
      <div class="privacy-links">
        <a href="/privacy-policy.html" target="_blank" aria-label="Politique de confidentialité">Politique de confidentialité</a>
        <a href="#" id="manage-privacy" aria-label="Gérer mes préférences de confidentialité">Gérer mes préférences</a>
        <a href="#" id="data-rights" aria-label="Exercer mes droits sur mes données">Mes droits sur mes données</a>
        <a href="#" id="revoke-consent" aria-label="Révoquer mon consentement">Révoquer le consentement</a>
      </div>
    </div>
  </footer>
`;

// ===== SYSTÈME DE CONFIDENTIALITÉ INTÉGRÉ =====
class PrivacyManager {
  constructor() {
    this.consentKey = 'garderie_privacy_consent';
    this.dataKey = 'garderie_user_data';
    this.init();
  }

  init() {
    this.checkConsent();
    this.createPrivacyBanner();
    this.setupEventListeners();
  }

  // Vérification du consentement existant
  checkConsent() {
    const consent = localStorage.getItem(this.consentKey);
    if (consent) {
      // L'utilisateur a déjà donné son consentement
      // On cache la bannière et on ne l'affiche plus
      this.consentGiven = true;
      return;
    }
    // Pas de consentement, on affiche la bannière
    this.consentGiven = false;
  }

  // Création de la bannière de consentement
  createPrivacyBanner() {
    // Si l'utilisateur a déjà donné son consentement, on ne crée pas la bannière
    if (this.consentGiven) {
      return;
    }
    
    const banner = document.createElement('div');
    banner.id = 'privacy-banner';
    banner.className = 'privacy-banner';
    banner.innerHTML = `
      <div class="privacy-content">
        <p>🔒 Nous utilisons des cookies et collectons des données pour améliorer votre expérience. 
        <a href="/privacy-policy.html" target="_blank">En savoir plus</a></p>
        <div class="privacy-buttons">
          <button id="accept-all" class="btn-primary">Accepter tout</button>
          <button id="customize" class="btn-secondary">Personnaliser</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);
  }

  // Modal de consentement détaillé
  showConsentModal() {
    const modal = document.createElement('div');
    modal.id = 'consent-modal';
    modal.className = 'consent-modal';
    modal.innerHTML = `
      <div class="consent-content">
        <h2>🔒 Gestion de vos préférences de confidentialité</h2>
        <p>Conformément à la Loi 25 québécoise, nous devons obtenir votre consentement pour collecter et traiter vos données.</p>
        
        <div class="consent-options">
          <div class="consent-option">
            <input type="checkbox" id="essential" checked disabled>
            <label for="essential">Fonctionnement essentiel du site (obligatoire)</label>
            <small>Nécessaire au bon fonctionnement du site</small>
          </div>
          
          <div class="consent-option">
            <input type="checkbox" id="analytics">
            <label for="analytics">Analyses et statistiques</label>
            <small>Pour améliorer nos services et comprendre l'utilisation du site</small>
          </div>
          
          <div class="consent-option">
            <input type="checkbox" id="marketing">
            <label for="marketing">Communication et marketing</label>
            <small>Pour vous informer de nos services et actualités</small>
          </div>
        </div>
        
        <div class="consent-buttons">
          <button id="save-preferences" class="btn-primary">Sauvegarder mes préférences</button>
          <button id="accept-all-consent" class="btn-secondary">Accepter tout</button>
        </div>
        
        <p class="consent-note">
          <small>Vous pouvez modifier vos préférences à tout moment via le lien en bas de page.</small>
        </p>
      </div>
    `;
    document.body.appendChild(modal);
    this.setupConsentModalEvents();
  }

  // Gestion des événements du modal de consentement
  setupConsentModalEvents() {
    document.getElementById('save-preferences').addEventListener('click', () => {
      this.saveConsentPreferences();
    });
    
    document.getElementById('accept-all-consent').addEventListener('click', () => {
      this.acceptAllConsent();
    });
  }

  // Sauvegarde des préférences de consentement
  saveConsentPreferences() {
    const preferences = {
      essential: true,
      analytics: document.getElementById('analytics').checked,
      marketing: document.getElementById('marketing').checked,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    
    localStorage.setItem(this.consentKey, JSON.stringify(preferences));
    this.hideConsentModal();
    this.updatePrivacyBanner();
    
    this.showNotification('Vos préférences de confidentialité ont été sauvegardées.', 'success');
  }

  // Acceptation de tout le consentement
  acceptAllConsent() {
    const preferences = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    
    localStorage.setItem(this.consentKey, JSON.stringify(preferences));
    this.hideConsentModal();
    this.updatePrivacyBanner();
    
    this.showNotification('Tous les consentements ont été acceptés.', 'success');
  }

  // Masquage du modal de consentement
  hideConsentModal() {
    const modal = document.getElementById('consent-modal');
    if (modal) {
      modal.remove();
    }
  }

  // Mise à jour de la bannière de confidentialité
  updatePrivacyBanner() {
    const banner = document.getElementById('privacy-banner');
    if (banner) {
      // On cache la bannière seulement si l'utilisateur a fait un choix
      banner.style.display = 'none';
    }
    // Mettre à jour l'état du consentement
    this.consentGiven = true;
  }

  // Révoquer le consentement et afficher à nouveau la bannière
  revokeConsent() {
    localStorage.removeItem(this.consentKey);
    this.consentGiven = false;
    
    // Supprimer l'ancienne bannière si elle existe
    const oldBanner = document.getElementById('privacy-banner');
    if (oldBanner) {
      oldBanner.remove();
    }
    
    // Recréer et afficher la bannière
    this.createPrivacyBanner();
    
    this.showNotification('Votre consentement a été révoqué. Vous pouvez le modifier à nouveau.', 'info');
  }

  // Configuration des événements principaux
  setupEventListeners() {
    document.addEventListener('click', (e) => {
      if (e.target.id === 'accept-all') {
        // Acceptation rapide depuis la bannière
        const preferences = {
          essential: true,
          analytics: true,
          marketing: true,
          timestamp: new Date().toISOString(),
          version: '1.0'
        };
        localStorage.setItem(this.consentKey, JSON.stringify(preferences));
        this.updatePrivacyBanner();
        this.showNotification('Tous les consentements ont été acceptés.', 'success');
      } else if (e.target.id === 'customize') {
        this.showConsentModal();
      } else if (e.target.id === 'revoke-consent') {
        e.preventDefault();
        this.revokeConsent();
      }
    });
  }

  // Affichage des notifications
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <span>${message}</span>
      <button class="notification-close">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 5000);
    
    notification.querySelector('.notification-close').addEventListener('click', () => {
      notification.remove();
    });
  }
}

// Initialisation du gestionnaire de confidentialité
window.privacyManager = new PrivacyManager();
