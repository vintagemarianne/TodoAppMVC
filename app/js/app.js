+function(app) {
    const model = new app.Model();
    const view = new app.View();
    const application = new app.Controller(model, view);
}(app);