define([
  'jquery',
  'underscore',
  'backbone',
  'text',
  'text!templates/subviews/fruitListItemTemplate.html',
], function ($, _, Backbone, text, FruitListItemTemplate) {

  var ListView = Backbone.View.extend({
    template: _.template(FruitListItemTemplate, null, {variable: 'data'}),

    render: function(){
      var attributes = this.model.toJSON();
      this.$el.append(this.template(attributes));
      return this
    },

    initialize: function () {
    },

  });
  return ListView;
});