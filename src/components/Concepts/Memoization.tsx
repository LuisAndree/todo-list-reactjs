import { useCallback, useMemo, useState } from "react"

interface MemoizationProps {
    financialData: {
        incomes: number[],
        outcomes: number[]
    }
}

export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {

    const [showValues, setShowValues] = useState(true);

    const totalIncomes = useMemo(() => {
        return financialData.incomes.reduce((total, income) => {
            console.log('Re calculando incomes');
            return total += income;
        }, 0);
    }, [financialData.incomes]);

    const totalOutcomes = useMemo(() => {
        return financialData.outcomes.reduce((total, outcome) => {
            console.log('Re calculando outcomes');
            return total += outcome;
        }, 0)
    }, [financialData.outcomes]);

    const aplicarDesconto = useCallback((desconto: number) => {
        return totalOutcomes * (1 - desconto);
    }, [totalOutcomes]);

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Memoization</h1>
            <h2>useMemo</h2>

            <br />
            <p>{`Total de receitas: R$ ${showValues ? totalIncomes : "XXXXX"}`}</p>
            <br />
            <p>{`Total de despesas: R$ ${showValues ? totalOutcomes : "XXXXX"}`}</p>
            <br />
            <br />
            <button onClick={() => {
                setShowValues(!showValues)
            }}>{showValues ? "Ocultar Valores" : "Mostrar Valores"}</button>
            <br /><br /><br />
            <p>{ aplicarDesconto.toString()}</p>
        </div>
    )
}  