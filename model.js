// MODELS Look like this:

Book = Backbone.Model.extend({

});

aNewBook = new Book();

// Task Model

Task = Backbone.Model.extend({

  defaults: {
    type: "Home",
    importance: "Medium",
    completed: false
  },

  complete: function() {
    this.set("completed", true);
  },

  initialize: function() {
  }
});


dishes = new Task({ name: "Dishes", type: "Home" });

// COLLECTIONS are a grouping of models, like rows in a database

Tasks = Backbone.Collection.extend({
  Model: Task,
  url: "#"
});

todaysTasks = new Tasks([
  { name: "Paperwork", type: "Office"},
  { name: "Vet", type: "Animals"}
]);

todaysTasks.each(function(task) {
  console.log(task.get("name"));
});

todaysTasks.on('add', function(task){
  console.log("You have added something to the Collection. ");
});

todaysTasks.add({name: "Test", type: "School"});