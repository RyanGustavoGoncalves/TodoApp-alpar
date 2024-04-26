import { TasksRepository } from "../repositories/tasks.repository.js";

export class TasksController {
    constructor() {
        this.repository = new TasksRepository();
    }

    getAllTasks = (req, res) => {
        return res.send(this.tasks);
    }

    addTasks = (req, res) => {
        const task = req.body;
        this.lastId++;
        task.id = this.lastId;
        this.tasks.push(task);

        return res.json(task);
    }

    deleteTasks = (req, res) => {
        const id = Number(req.params.id);
        this.tasks = this.tasks.filter(task => task.id != id);
        return res.json({ ok: "true" });
    }

    updateTask = (req, res) => {
        const id = Number(req.params.id);
        const task = req.body;

        const newTask = this.tasks.find(element => element.id === id);
        newTask.name = task.name ? task.name : newTask.name;
        newTask.checked = typeof task.checked === 'boolean' ? task.checked : newTask.checked;

        return res.json(newTask);
    }
}