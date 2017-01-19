/*global openrecordz-sdk-js, $*/


window.OpenrecordzSdkJs = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Openrecordz!');
  }
};

$(document).ready(function () {
  'use strict';
  OpenrecordzSdkJs.init();
});
