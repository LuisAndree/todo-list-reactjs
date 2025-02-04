import React from 'react';
import { StatsCard } from '../StatsCard/StatsCard.tsx';
import styles from '../Header/styles.module.scss';
import { useState } from 'react';

export const Header: React.FC = () => {
    const [estado, funcaoParaAlterarOEstado] = useState(0);   
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>MyTodo</h1>

                    <span>Bem-vindo André 5:15</span>
                </div>

                <div>
                    <StatsCard title="Total de Tarefas" value={estado}></StatsCard>
                    <StatsCard title="Tarefas Pendentes" value={estado}></StatsCard>
                    <StatsCard title="Tarefas Concluidas" value={estado}></StatsCard>
                </div>
            </div>
            <div>
      <p>Você clicou {estado} vezes</p>
      <button onClick={() => funcaoParaAlterarOEstado(estado + 1)}>
        Clique aqui +
      </button>
      <button onClick={() => funcaoParaAlterarOEstado (estado - 1)}>
        Clique aqui -
      </button>
    </div>
        </header>
    );
};