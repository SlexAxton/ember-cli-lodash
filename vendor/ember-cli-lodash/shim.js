/* globals Lo-Dash */
// https://github.com/rwjblue/ember-cli-pretender

define('lodash', [], function() {
  "use strict";

  var out = {
    'default': _
  };

  for(var key in _) {
    if (_.hasOwnProperty(key)) {
      out[key] = _[key];
    }
  }

  return out;
});
