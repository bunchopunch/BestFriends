//- web/app/config.js
 
require.config({
 
   baseUrl: 'scripts',
 
   paths: {
      'jquery': '../../bower_components/jquery/dist/jquery',
      'modernizr': '../../bower_components/modernizr/modernizr',
      'backbone': '../../bower_components/backbone/backbone',
      'underscore': '../../bower_components/underscore/underscore',
      'foundation': '../../bower_components/foundation/js/foundation',
      'text': '../../bower_components/text/text',
      'vendor': '../../vendor_components'
   },
 
   shim: {
     underscore: {
       exports: '_'
     },
     backbone: {
       deps: [
         'underscore',
         'jquery'
       ],
       exports: 'Backbone'
     },
     foundation: {
       deps: [
         'jquery',
         'modernizr'
       ],
       exports: 'Foundation'
     },
     modernizr: {
       exports: 'Modernizr'
     },
   },
 
});
 
require(['main'], function() {});