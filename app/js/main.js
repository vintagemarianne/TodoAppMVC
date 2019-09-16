class Model {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        const task = {
            id: this.tasks.length > 0 ? this.tasks.length + 1 : 1,
            title: task,
            completed: false
        };

        this.tasks.push(task);
    }


    deleteTask(id) {
        this.tasks = this.tasks.filter(task => {
            task.id !== id
        });
    }


    editTask(id, newTitle) {
        this.tasks = this.tasks.map(task => {
            task.id === id ? {
                id: task.id,
                title: newTitle,
                completed: task.completed
            } : task;
        })
    }


    completeTask(id) {
        this.tasks = this.tasks.map(task => {
            task.id === id ? {
                id: task.id,
                title: task.title,
                completed: true
            } : tasks
        })
    }

}


class View {

    constructor() {
        this.inputField = this.getElement("input");
        this.allTasksList = this.getElement('allTasksList');
        this.inProgressList = this.getElement('inProgressList');
        this.completedList = this.getElement('completedList');
    }

    createElement(type, className) {
        const element = document.createElement(type);
        element.className = className;
        return element;
    }

    getElement(id) {
        return document.getElementById(id);
    }

    createTasksList(tasks) {

        allTasksList.innerHTML = "";

        const taskItems = tasks.map(task => {

            const listItem = this.createElement("li", "item");
            const taskTitleWrapper = this.createElement("div", "task-title-wrapper");
            const taskControlsWrapper = this.createElement("div", "task-controls-wrapper");
            const itemIcon = this.createElement("img", "item-icon");
            const completeIcon = this.createElement("img", "complete-icon");
            const taskTitle = this.createElement("div", "task-title");
            const completeBtn = this.createElement("div", "btn complete-btn");
            const editBtn = this.createElement("div", "btn edit-btn");
            const deleteBtn = this.createElement("div", "btn delete-btn");

        })

    }
}