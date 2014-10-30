define([
  'jquery',
  'backbone',
  'collections/fruitsCollection',
  'views/fruitListView',
  'views/fruitDetailView',
], function ($, Backbone, fruitsCollection, FruitListView, FruitDetailView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      '/*': 'showItemsList', // Add a blank index view at some point.
      'fruit/:id': 'showFruitDetail'
    },

    // Route: Items List
    showItemsList: function () {
      console.log('Route to Item List');
      var fruitListView = new FruitListView({collection: fruitsCollection});
      fruitListView.render();
    },

    // Route: Items Details
    showFruitDetail: function (id) {
      console.log('Route to Fruit Detail');
      var fruitDetailView = new FruitDetailView({model: fruitsCollection.models[id]});
      fruitDetailView.render();
    }

  });

  var initialize = function(){
	console.log('Router was fired');
    var appRouter = new AppRouter;
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
