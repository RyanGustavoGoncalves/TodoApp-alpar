export class TasksController {
    constructor() {
        this.tasks = [
            {
                id: 1,
                checked: false,
                name: "teste 1",
            },
            {
                id: 2,
                checked: false,
                name: "teste 2",
            },
            {
                id: 3,
                checked: false,
                name: "teste 3",
            },
        ];

        this.getAllTasks = this.getAllTasks.bind(this);
        this.addTasks = this.addTasks.bind(this);
        this.deleteTasks = this.deleteTasks.bind(this);
    }

    getAllTasks(req, res) {
        return res.send(this.tasks);
    }

    addTasks(req, res) {
        const task = req.body;
        console.log(task);

        return res.json(task)
    }

    deleteTasks(req, res) {
        const id = Number(req.params.id);
        this.tasks = this.tasks.filter(task => task.id != id)
        return res.json({ ok: "true" });
    }
}
