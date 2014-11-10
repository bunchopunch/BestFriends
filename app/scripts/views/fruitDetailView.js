define([
  'jquery',
  'underscore',
  'backbone',
  'text',
  'text!templates/fruitDetailTemplate.html'
], function ($, _, Backbone, text, FruitDetailTemplate) {

  var DetailView = Backbone.View.extend({
    el: document.getElementById('applicationHost'),
    template: _.template(FruitDetailTemplate, null, {variable: 'data'}),

    render: function(){
      var attributes = this.model.toJSON();
      this.$el.html(this.template(attributes));
      return this
    },

    initialize: function () {
      console.log("Fruit Detail Init");
    },

    // VIEW EVENTS =================================================

    events: {
      'click #booper': 'emitBoop',
    },

    emitBoop: function (e) {
      console.log('Boop!');
    }

  });
  return DetailView;
});