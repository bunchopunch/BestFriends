/* Item List View */

define([
  'jquery',
  'underscore',
  'backbone',
  'text',
  'text!templates/fruitList.html',
  'views/subviews/fruitListItem'
  ], function ($, _, Backbone, text, FruitListTemplate, FruitListItemView) {

    var ListView = Backbone.View.extend({
      el: document.getElementById('applicationHost'),
      template: _.template(FruitListTemplate, null, {variable: 'data'}),
      render: function(){

        this.collection.each(function(fruit){
//          console.log(fruit);
          fruitListItemView = new FruitListItemView({model: fruit});
          this.$el.append(fruitListItemView.render().el);
        }, this);

        return this //probably always want to return this to help with chaining.

      },

      initialize: function () {
        console.log("fruitListView Init");
      },

      // VIEW EVENTS =================================================

      events: {
        'keypress .editorInput': 'openDescription',
      },

      openDescription: function (e) {
        console.log('openDescription View event fired!');
        this.model.openDescription(e);
  //        $('#contentBlock-0').append('1');
        $('#contentBlock-0').html();
      }

    });


    return ListView;
  });