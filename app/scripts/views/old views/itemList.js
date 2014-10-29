/* Item List View */

define([
  'jquery',
  'underscore',
  'backbone',
  'text',
  'text!templates/itemList.html'
  ], function ($, _, Backbone, text, templateHtml) {

    var ListView = Backbone.View.extend({
      el: document.getElementById('applicationHost'),
      template: _.template(templateHtml, null, {variable: 'data'}),
      render: function(){
        var attributes = this.model.toJSON();
        this.$el.append(this.template(attributes));
      },
      initialize: function () {
        console.log("Item List Init");
      },

      // VIEW EVENTS =================================================

      events: {
        'keypress .editorInput': 'openDescription',
      },

      openDescription: function (e) {
        console.log('openDescription View event fired!');
        this.model.openDescription(e);
  //        $('#contentBlock-0').append('1');
        $('#contentBlock-0').html();
      }

    });


    return ListView;
  });