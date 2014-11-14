require.config({
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
//  paths: {
//    jquery: '../bower_components/jquery/dist/jquery',
//    modernizr: '../bower_components/modernizr/modernizr',
//    foundation: '../bower_components/foundation/js/foundation',
//    backbone: '../bower_components/backbone/backbone',
//    underscore: '../bower_components/underscore/underscore',
//    text: '../bower_components/text/text'
//  }
});

console.log('Main was fired');

require(['app'], function (App) {
  App.initialize();
});
