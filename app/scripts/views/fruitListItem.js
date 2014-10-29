/* Item List View */

define([
  'jquery',
  'underscore',
  'backbone',
  'text',
  'text!templates/subviews/fruitListItem.html',
  ], function ($, _, Backbone, text, FruitListItemTemplate) {

    var ListView = Backbone.View.extend({
      el: document.getElementById('listHost'),
      template: _.template(FruitListItemTemplate, null, {variable: 'data'}),

      initialize: function () {
        console.log("Item List Init");
        this.collection.on('add', this.appendItem, this)
      },


      appendItem: function(fruit) {
        var fruitListItem = new fruitListItem({model: fruit});
        this.$el.append(this.render().el);
      }

      render: function(){
        this.collection.forEach(this.appendItem, this)
      },


//      render: function(){
//        var attributes = this.model.toJSON();
//        this.$el.append(this.template(attributes));
//      },

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

//     var OldListView = Backbone.View.extend({
//       el: document.getElementById('listHost'),
//       template: _.template(templateHtml, null, {variable: 'data'}),
//       render: function(){
//         this.collection.forEach(fuction(singleFruit){
//           var singleFruitView = new 
// 
//         });
// //        var attributes = this.model.toJSON();
// //        this.$el.append(this.template(attributes));
//       },
//       initialize: function () {
//         console.log("Item List Init");
//       },
// 
//       // VIEW EVENTS =================================================
// 
//       events: {
//         'keypress .editorInput': 'openDescription',
//       },
// 
//       openDescription: function (e) {
//         console.log('openDescription View event fired!');
//         this.model.openDescription(e);
//   //        $('#contentBlock-0').append('1');
//         $('#contentBlock-0').html();
//       }

    });


    return ListView;
  });