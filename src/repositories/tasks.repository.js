import { TaskModel } from "../models/task.model.js";

export class TasksRepository {
    tasks = [];

    async createTask({ name, checked }) {
        const task = new TaskModel({ name, checked });
        this.tasks.push(task);
        return task;
    }

    async getTasks() {
        return this.tasks;
    }

    async updateTask({ id, name, checked }) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            return null;
        }

        task.name = name ? name : task.name;
        task.checked = checked === undefined ? task.checked : checked;

        return;
    }
    async deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}