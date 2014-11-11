define([
  'jquery',
  'underscore',
  'backbone',
  'text',
  'text!templates/subviews/fruitListItemTemplate.html',
], function ($, _, Backbone, text, FruitListItemTemplate) {

  var ListView = Backbone.View.extend({
    el: document.getElementById('fruits'),
    template: _.template(FruitListItemTemplate, null, {variable: 'data'}),
    tagName: 'li',

    render: function(){
      var attributes = this.model.toJSON();
      this.$el.html(this.template(attributes));
      return this
    },

    initialize: function () {
      this.modelIndex = this.model.collection.indexOf(this.model);
    },

  });
  return ListView;
});