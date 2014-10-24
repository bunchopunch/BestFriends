/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var OtherModel = Backbone.Model.extend({
        defaults: {
            'name': 'Some other common fruit', 
            'description': 'You know... those ones.'
        }
    });

    return OtherModel;
});
