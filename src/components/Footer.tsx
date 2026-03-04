import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.footerBrand}>
                        <h2 className={styles.footerLogo}>BONNE ÉTOILE</h2>
                        <p className={styles.footerTagline}>L&apos;Excellence Gastronomique</p>
                        <p className={styles.text}>
                            Une expérience gastronomique raffinée au cœur du Luxembourg.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Liens Rapides</h4>
                        <ul className={styles.list}>
                            <li><a href="#">À Propos</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#specialties">Spécialités</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Suivez-nous</h4>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialIcon}>FB</a>
                            <a href="#" className={styles.socialIcon}>IG</a>
                        </div>
                        <div className={styles.footerContact}>
                            <p>Tél: <a href="tel:+352587855">+352 58 78 55</a></p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Bonne Étoile Ettelbruck. Tous droits réservés.
                    </p>
                    <p className={styles.credit}>
                        Site créé avec ❤️ par <a href="https://webvision.lu" target="_blank" rel="noopener noreferrer">Webvision.lu</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
