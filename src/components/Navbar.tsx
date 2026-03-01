'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        // Charger le script GloriaFood
        const script = document.createElement('script');
        script.src = 'https://www.fbgcdn.com/embedder/js/ewm2.js';
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="Bonne Étoile Logo"
                        width={180}
                        height={60}
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    <a href="#hero" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
                        Accueil
                    </a>
                    <a href="#about" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
                        À Propos
                    </a>
                    <a href="#services" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
                        Services
                    </a>
                    <a href="#specialties" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
                        Spécialités
                    </a>
                    <a href="#contact" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
                        Contact
                    </a>

                    <div className={styles.mobileMenuInfo}>
                        <p>2 Rue de l&apos;École, Ettelbruck</p>
                        <p>+352 123 456 789</p>
                        <div className={styles.socialPlaceholder}>
                            {/* Placeholder for social icons */}
                        </div>
                    </div>
                </div>

                <div className={styles.ctaButtons}>
                    <span
                        className={`glf-button reservation ${styles.btnSecondary}`}
                        data-glf-cuid="68118e79-a9ff-4c5e-9676-eb14e3799c92"
                        data-glf-ruid="0ee15a57-ccca-4743-916a-d7ac447c7ff8"
                        data-glf-reservation="true"
                    >
                        RÉSERVER
                    </span>
                    <span
                        className={`glf-button ${styles.btnPrimary}`}
                        data-glf-cuid="68118e79-a9ff-4c5e-9676-eb14e3799c92"
                        data-glf-ruid="0ee15a57-ccca-4743-916a-d7ac447c7ff8"
                    >
                        COMMANDER
                    </span>
                </div>

                <button
                    className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.active : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                </button>
            </div>
        </nav>
    );
}
