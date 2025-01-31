import React from 'react';
import styles from '../StatsCard/stayles.module.scss';

interface StatsCardProps {
    title: string;
    value: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
    return (
        <article className={styles.stats_card}>
            <h2>{title}</h2>
            <spam>{value}</spam>
        </article>
    );
};