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

        this.lastId = 2;

        this.getAllTasks = this.getAllTasks.bind(this);
        this.addTasks = this.addTasks.bind(this);
        this.deleteTasks = this.deleteTasks.bind(this);
    }

    getAllTasks(req, res) {
        return res.send(this.tasks);
    }

    addTasks(req, res) {
        const task = req.body;
        this.lastId++;
        task.id = this.lastId;
        this.tasks.push(task);

        return res.json(task);
    }

    deleteTasks(req, res) {
        const id = Number(req.params.id);
        this.tasks = this.tasks.filter(task => task.id != id);
        return res.json({ ok: "true" });
    }

    updateTask(req, res) {
        const id = Number(req.params.id);
        const task = req.body;

        const newTask = this.tasks.find(element => element.id === id);
        newTask.name = task.name ? task.name : newTask.name;
        newTask.checked = typeof task.checked === 'boolean' ? task.checked : newTask.checked;
        return res.json(newTask);
    }
}