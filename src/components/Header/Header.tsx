import React from 'react';
import { StatsCard } from '../StatsCard/StatsCard.tsx';
import styles from '../Header/styles.module.scss';
import { useState } from 'react';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>MyTodo</h1>

                    <span>Bem-vindo André</span>
                </div>

                <div>
                    <StatsCard title="Total de Tarefas" value='1'></StatsCard>
                    <StatsCard title="Tarefas Pendentes" value='3'></StatsCard>
                    <StatsCard title="Tarefas Concluidas" value='7'></StatsCard>
                </div>
            </div>
        </header>
    );
};