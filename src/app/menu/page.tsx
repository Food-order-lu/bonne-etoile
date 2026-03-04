'use client';

import { useEffect } from 'react';
import GloriaFoodWidget from '@/components/GloriaFoodWidget';
import styles from './page.module.css';

export default function MenuPage() {
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
        <div className={styles.menuPage}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Notre Menu</h1>
                    <p>Découvrez nos délicieuses spécialités gastronomiques</p>
                </div>
            </section>

            <section className={styles.menuSection}>
                <div className={styles.container}>
                    <div className={styles.menuContent}>
                        <h2>Menu Complet</h2>
                        <p className={styles.subtitle}>
                            Consultez notre menu complet et effectuez votre commande en ligne
                        </p>

                        <GloriaFoodWidget
                            showOrderButton={true}
                            showReservationButton={true}
                        />


                    </div>
                </div>
            </section>
        </div>
    );
}
