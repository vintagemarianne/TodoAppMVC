+ function (model) {

    model.items = [];

    model.addItem = function (v) {
        const item = {
            id: model.items.length,
            text: v,
            completed: false
        };
        model.items.push(item);
        onTodoListChanged(model.items);
    }

    model.deleteItem = function (id) {
        model.items = model.items.filter( item => {
            return item.id !== id;
        })
        onTodoListChanged(model.items);
    }

    model.editItem = function (id, v) {
        model.items = model.items.map( item => {
            if(item.id === id) {
                return {
                    id: item.id,
                    text: v,
                    completed: item.completed
                }
            } else return item;
        })
        onTodoListChanged(model.items);
    }

    model.completeItem = function (id) {
        model.items = model.items.map( item => {
            if(item.id === id) {
                return {
                    id: item.id,
                    text: item.text,
                    completed: !item.completed
                }
            } else return item;
        })
        onTodoListChanged(model.items);
    }

    model.bindTodoListChanged = function (callback) {
        onTodoListChanged = callback;
    }
}(model);