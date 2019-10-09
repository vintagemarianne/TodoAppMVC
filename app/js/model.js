class Model {
    constructor() {
        this.items = [];
    }

    addItem(v) {
        const item = {
            id: this.items.length,
            text: v,
            completed: false
        };
        this.items.push(item);
    }

    deleteItem(id) {
        this.items = this.items.filter( item => {
            item.id !== id
        });
    }

    editTask(id, v) {
        this.items = this.items.map( item => {
            item.id === id ? {
                id: item.id,
                text: v,
                completed: item.completed
            } : item;
        })
    }

    completeTask(id) {
        this.items = this.items.map( item => {
            item.id === id ? {
                id: item.id,
                text: item.text,
                completed: true
            } : item;
        })
    }

}