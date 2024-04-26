export class TaskModel {
    id;
    checked;
    name;
    static lastId;

    constructor({ name, checked, id }) {
        this.name = name;
        this.checked = checked;
        if (id) {
            if (id > TaskModel.lastId) {
                TaskModel.lastId = id
            }
            this.id = id;
        } else {
            if (!TaskModel.lastId) {
                TaskModel.lastId = 0;
            }
            TaskModel.lastId++;
            this.id = TaskModel.lastId;
        }
    }
}