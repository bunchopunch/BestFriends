/* Item List View */

define([
  'jquery',
  'underscore',
  'backbone',
  'text',
  'text!templates/itemList.html',
  'models/appleModel',
  'models/bananaModel',
  'models/orangeModel',
  'models/otherModel',
  ], function ($, _, Backbone, text, templateHtml, AppleModel, BananaModel, OrangeModel, OtherModel) {

    var FruitsCollection = Backbone.Collection.extend({
      model: Fruit
    });

    var fruit1 = new AppleModel();
    var fruit2 = new BananaModel();
    var fruit3 = new OrangeModel();
    var fruit4 = new OtherModel();

    fruitsBasket = new FruitsCollection(fruit1, fruit2, fruit3, fruit4);

    return fruitsBasket;
  });