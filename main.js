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
});

document.querySelector('#app').innerHTML = `
  <header class="header" role="banner">
    <div class="container">
      <div class="logo">
        <img src="/logo.png" alt="Logo Garderie des trésors précieux  - Garderie privée à Laval" class="logo-image" />
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
            <div class="hero-badge" aria-label="Certification de la garderie">🌟 Garderie privée agréée</div>
            <h1 id="hero-title" class="hero-title">Garderie des trésors précieux</h1>
            <p class="hero-subtitle">Un environnement chaleureux et stimulant pour l'épanouissement de votre enfant</p>
            <p class="hero-description">Nous offrons un service de garde de qualité pour les enfants de 0 à 5 ans dans un environnement sécurisé et bienveillant à Laval. Notre garderie privée agréée propose des programmes éducatifs adaptés et des activités créatives pour favoriser le développement de votre enfant.</p>
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
      <p>Garderie privée agréée - Laval, Québec | <a href="#accueil" aria-label="Retour en haut de la page">Retour en haut</a></p>
      <p><small>Garderie des trésors précieux- Service de garde d'enfants de 0 à 5 ans à Laval, Québec</small></p>
    </div>
  </footer>
`
