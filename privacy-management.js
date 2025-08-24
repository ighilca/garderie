// Système de gestion de la confidentialité conforme à la Loi 25 québécoise
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
        if (!consent) {
            this.showConsentModal();
        }
    }

    // Création de la bannière de consentement
    createPrivacyBanner() {
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
        
        // Notification de sauvegarde
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
            banner.style.display = 'none';
        }
    }

    // Configuration des événements principaux
    setupEventListeners() {
        // Gestion des boutons de la bannière
        document.addEventListener('click', (e) => {
            if (e.target.id === 'accept-all') {
                this.acceptAllConsent();
            } else if (e.target.id === 'customize') {
                this.showConsentModal();
            }
        });
    }

    // Gestion des droits d'accès et de rectification
    async requestDataAccess(userEmail) {
        try {
            // Simulation d'une demande d'accès aux données
            const request = {
                type: 'access_request',
                userEmail: userEmail,
                timestamp: new Date().toISOString(),
                status: 'pending'
            };
            
            // Enregistrement de la demande
            this.logDataRequest(request);
            
            // Notification de réception
            this.showNotification('Votre demande d\'accès aux données a été enregistrée. Nous vous répondrons dans les 30 jours.', 'info');
            
            return request;
        } catch (error) {
            console.error('Erreur lors de la demande d\'accès:', error);
            this.showNotification('Une erreur est survenue lors de la demande d\'accès.', 'error');
        }
    }

    // Gestion des demandes de rectification
    async requestDataRectification(userEmail, dataType, description) {
        try {
            const request = {
                type: 'rectification_request',
                userEmail: userEmail,
                dataType: dataType,
                description: description,
                timestamp: new Date().toISOString(),
                status: 'pending'
            };
            
            this.logDataRequest(request);
            this.showNotification('Votre demande de rectification a été enregistrée. Nous vous répondrons dans les 30 jours.', 'info');
            
            return request;
        } catch (error) {
            console.error('Erreur lors de la demande de rectification:', error);
            this.showNotification('Une erreur est survenue lors de la demande de rectification.', 'error');
        }
    }

    // Journalisation des demandes (conformité Loi 25, art. 3.1, 10)
    logDataRequest(request) {
        const logs = JSON.parse(localStorage.getItem('data_requests_log') || '[]');
        logs.push(request);
        localStorage.setItem('data_requests_log', JSON.stringify(logs));
        
        // En production, ces logs seraient envoyés à un serveur sécurisé
        console.log('Demande de données enregistrée:', request);
    }

    // Notification des incidents de sécurité (conformité Loi 25, art. 3.5, 3.8, 10)
    reportSecurityIncident(incident) {
        const incidentReport = {
            ...incident,
            timestamp: new Date().toISOString(),
            severity: incident.severity || 'medium',
            status: 'reported'
        };
        
        // Enregistrement de l'incident
        const incidents = JSON.parse(localStorage.getItem('security_incidents') || '[]');
        incidents.push(incidentReport);
        localStorage.setItem('security_incidents', JSON.stringify(incidents));
        
        // Notification immédiate (en production, notification aux autorités)
        this.showNotification('Incident de sécurité signalé et enregistré.', 'warning');
        
        return incidentReport;
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
        
        // Auto-suppression après 5 secondes
        setTimeout(() => {
            notification.remove();
        }, 5000);
        
        // Bouton de fermeture
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    }

    // Vérification de la conformité
    checkCompliance() {
        const consent = localStorage.getItem(this.consentKey);
        const hasPrivacyPolicy = document.querySelector('a[href*="privacy-policy"]');
        const hasConsentBanner = document.getElementById('privacy-banner');
        
        const compliance = {
            consent: !!consent,
            privacyPolicy: !!hasPrivacyPolicy,
            consentBanner: !!hasConsentBanner,
            timestamp: new Date().toISOString()
        };
        
        console.log('État de la conformité:', compliance);
        return compliance;
    }
}

// Initialisation du gestionnaire de confidentialité
document.addEventListener('DOMContentLoaded', () => {
    window.privacyManager = new PrivacyManager();
});

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PrivacyManager;
}
