/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var BananaModel = Backbone.Model.extend({
        defaults: {
            'name': 'Banana', 
            'description': 'Orange who? WAIT... what?'
        }
    });

    return BananaModel;
});
