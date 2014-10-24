// Filename: router.js

var demoData = {
  "id": 1337
};

define([
  'jquery',
  'backbone',
  'collections/fruitsCollection',
  'views/itemList',
], function ($, Backbone, FruitsModel, ItemList) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      'item/:id': 'showModeView',
      // TODO: 404 route
      '/*': 'showItemsList' // Add a blank index view at some point.
    },
    // Route: Items List
    showItemsList: function () {
      console.log('Route to Item List');
      var itemsModel = new FruitsModel();
      var itemListView = new ItemList({model: itemsModel});
      itemListView.render();

    }
  });

  var initialize = function(){
	console.log('Router was fired');
    // Init editor model here!!!!!!!!!
    var appRouter = new AppRouter;
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
