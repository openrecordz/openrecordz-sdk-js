/*global OpenrecordzSdkJs, Backbone*/

OpenrecordzSdkJs.Collections = OpenrecordzSdkJs.Collections || {};

(function () {
  'use strict';

  OpenrecordzSdkJs.Collections.Datasets = Backbone.Collection.extend({

    model: OpenrecordzSdkJs.Models.Dataset,
    url: 'http://lecce.api.openrecordz.com/service/v1/datasets'

  });

})();
