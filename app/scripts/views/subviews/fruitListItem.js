/* List Item View */

define([
  'jquery',
  'underscore',
  'backbone',
  'text',
  'text!templates/subviews/fruitListItem.html',
  ], function ($, _, Backbone, text, FruitListItemTemplate) {

    var ListView = Backbone.View.extend({

      template: _.template(FruitListItemTemplate, null, {variable: 'data'}),

      initialize: function () {
        console.log("List Item Init");
      },

      render: function(){
        var attributes = this.model.toJSON();
        this.$el.append(this.template(attributes));

        return this //probably always want to return this to help with chaining.
      },

    });

    return ListView;
  });