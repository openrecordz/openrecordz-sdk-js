/*global OpenrecordzSdkJs, Backbone*/

OpenrecordzSdkJs.Models = OpenrecordzSdkJs.Models || {};

(function () {
  'use strict';

  OpenrecordzSdkJs.Models.Dataset = Backbone.Model.extend({



    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
