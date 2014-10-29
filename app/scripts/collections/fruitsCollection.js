/* Item List View */

define([
  'jquery',
  'underscore',
  'backbone',
  'text',
//  'text!templates/itemList.html',
  'models/fruitModel',
  ], function ($, _, Backbone, text, FruitModel) {

    var FruitsCollection = Backbone.Collection.extend({
      model: FruitModel,
      url: 'localhost/fruitkeeper'
    });

    fruitsCollection = new FruitsCollection();

    fruitsCollection.add({name: 'Orange', description: 'Did you know that oranges are orange?'});
    fruitsCollection.add({name: 'Apple', description: 'Yum! Apples are made of apple.'});
    fruitsCollection.add({name: 'Banana', description: 'Orange who? WAIT... what?'});
    fruitsCollection.add({name: 'Some other common fruit', description: 'You know... those ones.'});

    return fruitsCollection;
  });