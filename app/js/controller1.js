+ function (model, view) {
    
    model = model;
    view = view;

    onItemsChanged(model.items);

    model.bindTodoListChanged(onItemsChanged);

    view.bindAddItem(handleAddItem);
    view.bindDeleteItem(handleDeleteItem);
    view.bindCompleteItem(handleCompleteItem);
    view.bindEditItem(handleEditItem);

    function onItemsChanged (items) {view.displayLists(items); }

    function handleAddItem (value) {model.addItem(value); }

    function handleEditItem (id, value) {model.editItem(id, value); }

    function handleDeleteItem (id) {model.deleteItem(id); }

    function handleCompleteItem (id) {model.completeItem(id); }

}(model, view);