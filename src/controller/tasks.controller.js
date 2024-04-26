import { TasksRepository } from "../repositories/tasks.repository.js";

export class TasksController {
    constructor() {
        this.repository = new TasksRepository();
    }

    getAllTasks = async (req, res) => {
        const allTasks = this.repository.getTasks();
        return res.json(allTasks);
    }

    addTasks = async (req, res) => {
        const task = req.body;
        const newTask = this.repository.createTask(task)

        return res.json(newTask);
    }

    deleteTasks = async (req, res) => {
        const id = Number(req.params.id);
        this.repository.deleteTask(id)
        return res.json({ ok: "true" });
    }

    updateTask = async (req, res) => {
        const id = Number(req.params.id);
        const task = req.body;

        const newTask = this.repository.updateTask({ id, ...task })

        return res.json(newTask);
    }
}