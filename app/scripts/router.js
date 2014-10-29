// Filename: router.js

define([
  'jquery',
  'backbone',
  'collections/fruitsCollection',
  'views/fruitList',
  'views/fruitDetail',
], function ($, Backbone, fruitsCollection, FruitListView, FruitDetailView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      'fruit/:id': 'showFruitDetail',
      // TODO: 404 route
      '/*': 'showItemsList' // Add a blank index view at some point.
    },
    // Route: Items List
    showItemsList: function () {
      console.log('Route to Item List');
      var fruitListView = new FruitListView({collection: fruitsCollection});
      console.log(fruitsCollection);
      fruitListView.render();

    },

    showFruitDetail: function (id) {
      console.log('Route to Fruit Detail');
      console.log(fruitsCollection.models[id]);
      var fruitDetailView = new FruitDetailView({model: fruitsCollection.models[id]});
      fruitDetailView.render();
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
