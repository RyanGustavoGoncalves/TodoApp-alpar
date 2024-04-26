class TaskModel {
    _id;
    _checked;
    _name;
    static lastId;

    constructor(name, checked, id) {
        this.name = name;
        this.checked = checked;
        if (id) {
            if (id > TaskModel.lastId) {
                TaskModel.lastId = id
            }
            this.id = id;
        } else {
            if(!TaskModel.lastId){
                TaskModel.lastId = 0;
            }
            TaskModel.lastId++;
            this.id = TaskModel.lastId;
        }
    }

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._checked = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}