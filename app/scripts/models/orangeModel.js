/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var OrangeModel = Backbone.Model.extend({
        defaults: {
            'name': 'Orange', 
            'description': 'Did you know that oranges are orange?'
        }
    });

    return OrangeModel;
});
