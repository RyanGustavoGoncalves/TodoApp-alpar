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
        const task = this.tasks.find(task => task.getId() === id);
        if (!task) {
            return null;
        }

        task.setName(name ? name : task.getName());
        task.setChecked(checked === undefined ? task.getChecked() : checked);

        return;
    }
    async deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.getId() !== id);
    }
}