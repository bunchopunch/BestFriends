/*global define*/

define([
    'underscore',
    'backbone',
    'models/itemsCollection'
], function (_, Backbone, ItemscollectionModel) {
    'use strict';

    var ItemscollectionCollection = Backbone.Collection.extend({
        model: ItemscollectionModel
    });

    return ItemscollectionCollection;
});
