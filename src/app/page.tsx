'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import styles from './page.module.css';

export default function Home() {
    useEffect(() => {
        // Charger le script GloriaFood
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
        <main className={styles.main}>
            <div id="hero">
                <Hero />
            </div>

            {/* About Section */}
            <section className={styles.aboutSection} id="about">
                <div className={styles.container}>
                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutText}>
                            <h2 className={styles.sectionTitle}>Bienvenue au Restaurant Bonne étoile</h2>
                            <p className={styles.sectionSubtitle}>
                                L&apos;excellence gastronomique au cœur d&apos;Ettelbruck
                            </p>
                            <p>
                                Découvrez une <strong>expérience culinaire d&apos;exception</strong> au Restaurant Bonne étoile. Situé au centre d&apos;Ettelbruck, notre établissement vous accueille dans un cadre élégant où chaque détail est pensé pour votre confort et votre plaisir.
                            </p>
                            <p>
                                Notre Chef passionné sublime les <strong>produits frais et de saison</strong> pour créer une cuisine à la fois créative et respectueuse de l&apos;authenticité des saveurs. Que ce soit pour un déjeuner d&apos;affaires ou un dîner romantique, nous vous garantissons un voyage sensoriel inoubliable.
                            </p>
                            <div className={styles.aboutStats}>
                                <div className={styles.statItem}>
                                    <strong>Fait Maison</strong>
                                    <span>Produits Frais</span>
                                </div>
                                <div className={styles.statItem}>
                                    <strong>Cadre Unique</strong>
                                    <span>Ambiance Élégante</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.aboutImage}>
                            <div className={styles.imageOverlay}></div>
                            <img src="/about-bg.jpg" alt="Restaurant Bonne Étoile Ettelbruck" className={styles.mainAboutImg} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className={styles.sectionDark} id="services">
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionTitleLight}>Nos Services</h2>
                        <p className={styles.sectionSubtitleLight}>
                            L&apos;excellence à votre service
                        </p>
                    </div>

                    <div className={styles.grid}>
                        <ServiceCard
                            icon="🍽️"
                            title="Authenticité"
                            description="Une cuisine gastronomique préparée avec passion et respect des produits."
                        />
                        <ServiceCard
                            icon="✨"
                            title="Expérience Culinaire"
                            description="Un voyage sensoriel unique au cœur d'Ettelbruck pour ravir vos sens."
                        />
                        <ServiceCard
                            icon="🤝"
                            title="Ambiance"
                            description="Un cadre élégant et chaleureux pour vos moments les plus précieux."
                        />
                    </div>
                </div>
            </section>

            {/* Order Banner Section */}
            <section className={styles.orderBanner}>
                <div className={styles.container}>
                    <div className={styles.orderBannerContent}>
                        <h2>PRÊT À DÉCOUVRIR NOS CRÉATIONS ?</h2>
                        <div className={styles.orderBannerButtons}>
                            <span
                                className={`glf-button ${styles.btnPrimary}`}
                                data-glf-cuid="68118e79-a9ff-4c5e-9676-eb14e3799c92"
                                data-glf-ruid="0ee15a57-ccca-4743-916a-d7ac447c7ff8"
                            >
                                COMMANDER EN LIGNE
                            </span>
                            <a href="#specialties" className={styles.btnOutline}>
                                NOS SPÉCIALITÉS
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialties Section */}
            <section className={styles.section} id="specialties">
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionTitle}>L&apos;Expérience Bonne Étoile</h2>
                        <p className={styles.sectionSubtitle}>
                            Ce qui fait de notre restaurant un lieu unique pour vos repas
                        </p>
                    </div>

                    <div className={styles.specialtiesGrid}>
                        <div className={styles.specialtyCard}>
                            <div className={styles.specialtyImage} style={{
                                backgroundImage: 'url(/images/dish_1.png)'
                            }}></div>
                            <div className={styles.specialtyContent}>
                                <h3>Cuisine Authentique</h3>
                                <p>
                                    Des saveurs délicieuses préparées avec passion, mariant tradition et ingrédients de premier choix.
                                </p>
                            </div>
                        </div>

                        <div className={styles.specialtyCard}>
                            <div className={styles.specialtyImage} style={{
                                backgroundImage: 'url(/images/dish_2.png)'
                            }}></div>
                            <div className={styles.specialtyContent}>
                                <h3>Ambiance Chaleureuse</h3>
                                <p>
                                    Un cadre convivial, moderne et accueillant, parfait pour vos repas en famille ou événements spéciaux.
                                </p>
                            </div>
                        </div>

                        <div className={styles.specialtyCard}>
                            <div className={styles.specialtyImage} style={{
                                backgroundImage: 'url(/images/dish_3.png)'
                            }}></div>
                            <div className={styles.specialtyContent}>
                                <h3>Service Attentionné</h3>
                                <p>
                                    Notre équipe dévouée a à cœur de vous offrir une expérience fluide, souriante et sur mesure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery Section */}
            <section className={styles.deliverySection}>
                <div className={styles.container}>
                    <div className={styles.deliveryGrid}>
                        <div className={styles.deliveryImage}>
                            <img src="/hero-bg.jpg" alt="Livraison Bonne Étoile" />
                        </div>
                        <div className={styles.deliveryText}>
                            <h2 className={styles.sectionTitle}>Livraison Rapide et Fiable</h2>
                            <p>
                                Profitez de la gastronomie de Bonne étoile directement chez vous. Nous assurons une livraison rapide pour garantir la fraîcheur et la qualité de nos plats.
                            </p>
                            <div className={styles.deliveryCTA}>
                                <span
                                    className="glf-button"
                                    data-glf-cuid="68118e79-a9ff-4c5e-9676-eb14e3799c92"
                                    data-glf-ruid="0ee15a57-ccca-4743-916a-d7ac447c7ff8"
                                    style={{
                                        backgroundColor: 'var(--color-primary)',
                                        color: 'white',
                                        padding: '1.2rem 2.5rem',
                                        borderRadius: '1rem',
                                        fontSize: '1.1rem',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        display: 'inline-block',
                                        marginTop: '2rem',
                                        boxShadow: 'var(--shadow-lg)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                    }}
                                >
                                    COMMANDER EN LIGNE
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.sectionDark} id="contact">
                <div className={styles.container}>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <h2 className={styles.sectionTitleLight}>Nous Contacter</h2>
                            <p className={styles.contactText}>
                                Pour toute réservation ou demande spécifique, notre équipe est à votre entière disposition.
                            </p>

                            <div className={styles.contactDetails}>
                                <div className={styles.contactItem}>
                                    <div className={styles.contactIcon}>📞</div>
                                    <div>
                                        <h4>Téléphone</h4>
                                        <a href="tel:+352587855">+352 58 78 55</a>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.contactIcon}>📍</div>
                                    <div>
                                        <h4>Adresse</h4>
                                        <p>18, Rue de Feulen<br />9043 Ettelbruck, Luxembourg</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.cta}>
                                <span
                                    className={`glf-button reservation ${styles.btnPrimary}`}
                                    data-glf-cuid="68118e79-a9ff-4c5e-9676-eb14e3799c92"
                                    data-glf-ruid="0ee15a57-ccca-4743-916a-d7ac447c7ff8"
                                    data-glf-reservation="true"
                                >
                                    RÉSERVER UNE TABLE
                                </span>
                                <a href="#specialties" className={styles.btnOutline}>
                                    Découvrir la Carte
                                </a>
                            </div>
                        </div>

                        <div className={styles.hoursCard}>
                            <h3>Horaires d&apos;Ouverture</h3>
                            <div className={styles.hoursList}>
                                <div className={styles.hourItem}>
                                    <span className={styles.day}>Lundi - Vendredi</span>
                                    <span className={styles.time}>11h30 - 14h00, 18h00 - 22h30</span>
                                </div>
                                <div className={styles.hourItem}>
                                    <span className={styles.day}>Samedi - Dimanche</span>
                                    <span className={styles.time}>18h00 - 22h30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
