'use client';

import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <p className={styles.welcomeSubtitle}>BIENVENUE</p>
                    <h1 className={styles.title}>Restaurant Bonne Étoile</h1>
                    <h2 className={styles.subHeadline}>RESTAURANT GASTRONOMIQUE À ETTELBRUCK</h2>
                    <p className={styles.description}>
                        Une expérience gastronomique raffinée alliant tradition et créativité au cœur d&apos;Ettelbruck.
                    </p>
                    <div className={styles.buttons}>
                        <span
                            className={`glf-button ${styles.btnPrimary}`}
                            data-glf-cuid="68118e79-a9ff-4c5e-9676-eb14e3799c92"
                            data-glf-ruid="0ee15a57-ccca-4743-916a-d7ac447c7ff8"
                        >
                            COMMANDER EN LIGNE
                        </span>
                        <span
                            className={`glf-button reservation ${styles.btnOutline}`}
                            data-glf-cuid="68118e79-a9ff-4c5e-9676-eb14e3799c92"
                            data-glf-ruid="0ee15a57-ccca-4743-916a-d7ac447c7ff8"
                            data-glf-reservation="true"
                        >
                            TABLE RESERVATION
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <p>Scroll</p>
            </div>
        </section>
    );
}
