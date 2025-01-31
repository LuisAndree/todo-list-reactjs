import React from 'react';
import { StatsCard } from '../StatsCard/StatsCard.tsx';
import styles from '../Header/styles.module.scss';
import { useState } from 'react';

export const Header: React.FC = () => {
    const [variavel, setVariavel] = useState(0);   
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>MyTodo</h1>

                    <span>Bem-vindo André 5:15</span>
                </div>

                <div>
                    <StatsCard title="Total de Tarefas" value={variavel}></StatsCard>
                    <StatsCard title="Tarefas Pendentes" value={variavel}></StatsCard>
                    <StatsCard title="Tarefas Concluidas" value={variavel}></StatsCard>
                </div>
            </div>
            <div>
      <p>Você clicou {variavel} vezes</p>
      <button onClick={() => setVariavel(variavel + 1)}>
        Clique aqui +
      </button>
      <button onClick={() => setVariavel(variavel - 1)}>
        Clique aqui -
      </button>
    </div>
        </header>
    );
};