// VIEWS Look like this:

$itemContainer = $("#item-container");

HomeView = Backbone.View.extend({
  el: 'body',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.empty();
    this.$el.append("<h1> Tasks </h1>");

    this.listTasks = new ListTasks();
    this.$el.append(this.listTasks.render().el);

    return this;
  }
});


ListTasks = Backbone.View.extend({
  tagName: "ul",

  initialize: function() {
    this.template = _.template($itemContainer.html());
  },

  render: function() {
    var that = this;

    this.$el.empty();

    todaysTasks.each(function(task) {
      that.$el.append(that.template(task.toJSON()));
    });

    return this;
  }
});