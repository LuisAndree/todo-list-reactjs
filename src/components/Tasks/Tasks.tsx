import styles from "./styles.module.scss"
import { FormEvent, useState, useEffect } from 'react';
import axios from "axios";
import { getTarefas, postTarefa, Task } from "../../tarefasService";

// interface Task {
//     title: string;
//     done: boolean;
//     id: number;
// }

export const Tasks: React.FC = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);

    function handleSubmitAddTask(event: FormEvent) {
        event.preventDefault();
        console.log('passou')
        const adicionarTarefa = async (taskTitle: string) => {
            try {
                const novaTarefa = await postTarefa(taskTitle, false);

                const newTasks = [...tasks, novaTarefa];

                setTasks(newTasks);
            } catch (error) {
                console.error('Erro ao adicionar tarefa:', error);
            }
        };

        adicionarTarefa(taskTitle);
    }

    useEffect(() => {
        getTarefas()
            .then(data => setTasks(data.map(d => {
                console.log(d)
                return {
                    title: d.title,
                    id: d.id,
                    done: false
                }
            })))
            .catch((e) => {
                console.log('deu ruim', e)
            })
    }, [])

    return (
        <section className={styles.container}>
            <form onSubmit={handleSubmitAddTask} >
                <div>
                    <label htmlFor="task-title">Adicionar Tarefa</label>
                    <input value={taskTitle} onChange={(event) => { setTaskTitle(event.target.value) }} type="text" id="task-title" placeholder="Título da Tarefa" />
                </div>

                <button type="submit">Adicionar Tarefa</button>
            </form>


            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" id={`task-${task.id}`} />
                            <label htmlFor={`task-${task.id}`}>{task.title}</label>
                        </li>
                    )
                })}
            </ul>

        </section>
    );
}