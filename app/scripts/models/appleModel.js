/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var AppleModel = Backbone.Model.extend({
        defaults: {
            'name': 'Apple', 
            'description': 'Yum! Apples are made of apple.'
        }
    });

    return AppleModel;
});
