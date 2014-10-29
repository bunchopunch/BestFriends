/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var FruitModel = Backbone.Model.extend({
        defaults: {
            'name': 'Not Defined', 
            'description': 'Not Defined.'
        }
    });

    return FruitModel;
});
