define([
  'jquery',
  'underscore',
  'backbone',
  'text',
  'text!templates/fruitListTemplate.html',
  'views/subviews/fruitListItemView'
], function ($, _, Backbone, text, FruitListTemplate, FruitListItemView) {

  var FruitListView = Backbone.View.extend({
    el: document.getElementById('applicationHost'),
    template: _.template(FruitListTemplate, null, {variable: 'data'}),

    render: function(){
      this.collection.each(function(fruit){
        this.$el.append(new FruitListItemView({model: fruit}).render().el);
      }, this);
      return this //probably always want to return this to help with chaining.
    },

    initialize: function () {
      console.log("fruitListView Init");
    },

    // VIEW EVENTS =================================================

    events: {
      'click #collapseButton': 'toggleCollapse',
    },

    toggleCollapse: function (e) {
      console.log('toggleCollapse View event fired!');
    }

  });
  return FruitListView;
});