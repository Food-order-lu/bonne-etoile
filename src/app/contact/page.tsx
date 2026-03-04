'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.fbgcdn.com/embedder/js/ewm2.js';
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <div className={styles.contactPage}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Contactez-Nous</h1>
                    <p>Nous sommes à votre écoute</p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <div className={styles.infoCard}>
                                <div className={styles.icon}>📞</div>
                                <h3>Téléphone</h3>
                                <a href="tel:+352587855">+352 58 78 55</a>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.icon}>📍</div>
                                <h3>Adresse</h3>
                                <p>18, Rue de Feulen<br />9043 Ettelbruck, Luxembourg</p>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.icon}>⏰</div>
                                <h3>Horaires</h3>
                                <p><strong>Lun - Ven:</strong> 11h30 - 14h00, 18h00 - 22h30</p>
                                <p><strong>Sam - Dim:</strong> 18h00 - 22h30</p>
                            </div>
                        </div>

                        <div className={styles.reservationBox}>
                            <h2>Réserver une Table</h2>
                            <p>Appelez-nous directement pour réserver votre table :</p>
                            <a href="tel:+352587855" className={styles.btnPrimary}>
                                📞 Réserver au +352 58 78 55
                            </a>

                            <div className={styles.orDivider}>
                                <span>ou</span>
                            </div>

                            <span
                                className="glf-button reservation"
                                data-glf-cuid="51bac733-bb04-42fd-be77-8ed7c9d2d231"
                                data-glf-ruid="fbb37f86-ac13-4234-976f-a21462001e16"
                                data-glf-reservation="true"
                            >
                                Réserver en Ligne
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
