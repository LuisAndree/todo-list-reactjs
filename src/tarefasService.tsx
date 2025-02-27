import axios from "axios"

export type Task = {
    id: number,
    title: string;
    done: boolean
}

export async function getTarefas(): Promise<Task[]> {
    const response = await axios.get('http://localhost:3001/tasks/');
    return response.data;
}

export async function postTarefa(title: string, done: boolean): Promise<Task> {
    const response = await axios.post('http://localhost:3001/tasks/', {
        title,
        done
    });
    return response.data;
}