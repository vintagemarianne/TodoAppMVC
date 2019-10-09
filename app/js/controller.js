+function(app) {
    app.Controller = class {
        constructor(model, view) {
            this.model = model;
            this.view = view;
            this.onItemsChanged(this.model.items);
            this.view.bindAddItem(this.handleAddItem)
            // this.view.bindDeleteTodo(this.handleDeleteTodo)
            // this.view.bindToggleTodo(this.handleToggleTodo)
        }
    
        onItemsChanged = items => this.view.displayLists(items);
    
        handleAddItem = value => this.model.addItem(value)
    
        handleEditItem = (id, value) => this.model.editItem(id, value);
    
        handleDeleteItem = id => this.model.deleteItem(id);
    
        handleCompleteItem = id => this.model.completeItem(id);
    }
}(app);