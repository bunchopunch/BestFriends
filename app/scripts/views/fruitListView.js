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
      this.$el.html(FruitListTemplate);

      var listFragment = document.createDocumentFragment();
      this.collection.each(function(fruit){
        listFragment.appendChild(new FruitListItemView({model: fruit}).render().el);
      }, this);

      this.$('#fruits').html(listFragment); // TODO: Maybe move to a CID subview system?

      return this // Always want to return this to help with chaining.
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
      $('#fruits').toggle();
    }

  });
  return FruitListView;
});