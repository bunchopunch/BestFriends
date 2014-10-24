// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
  'modernizr',
  'foundation'
], function($, _, Backbone, Router, Modernizr, Foundation){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    $(document).foundation();
    console.log('App was fired');
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});