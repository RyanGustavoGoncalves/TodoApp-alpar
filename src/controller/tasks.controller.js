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
    }

    getAllTasks(req, res) {
        return res.send(this.tasks);
    }
}
