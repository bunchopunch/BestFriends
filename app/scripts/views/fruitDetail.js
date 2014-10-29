/* Item List View */

define([
  'jquery',
  'underscore',
  'backbone',
  'text',
  'text!templates/fruitDetail.html'
  ], function ($, _, Backbone, text, FruitDetailTemplate) {

    var DetailView = Backbone.View.extend({
      el: document.getElementById('applicationHost'),
      template: _.template(FruitDetailTemplate, null, {variable: 'data'}),
      render: function(){
        var attributes = this.model.toJSON();
        this.$el.append(this.template(attributes));
      },
      initialize: function () {
        console.log("Fruit Detail Init");
      },

      // VIEW EVENTS =================================================

      events: {
        'keypress .editorInput': 'openDescription',
      },

      openDescription: function (e) {
        console.log('openDescription View event fired!');
      }

    });


    return DetailView;
  });