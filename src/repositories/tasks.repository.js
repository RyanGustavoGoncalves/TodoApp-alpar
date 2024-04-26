import { TaskModel } from "../models/task.model.js";

export class TasksRepository {
    tasks = [];

    createTask({ name, checked }) {
        const task = new TaskModel({ name, checked });
        this.tasks.push(task);
        return task;
    }

    getTasks() {
        return this.tasks;
    }
    updateTask({ id, name, checked }) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            return null;
        }

        task.name = name ? name : task.name;
        task.checked = checked === undefined ? task.checked : checked;

        return;
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}