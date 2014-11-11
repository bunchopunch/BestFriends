define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
  'modernizr',
  'foundation'
], function($, _, Backbone, Router, Modernizr, Foundation){

  var initialize = function(){
    $(document).foundation();
    console.log('App was fired');

    Backbone.View.prototype.close = function() {
        if (this.onClose) {
            this.onClose();
        }
        this.remove();
    };

    Router.initialize();
  }

  return {
    initialize: initialize
  };
});