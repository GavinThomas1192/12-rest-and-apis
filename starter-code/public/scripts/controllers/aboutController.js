'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    console.log('aboutcont')
    $('#about').show().siblings().hide(); // REVIEW: We have a slight refactor in selectors here, which has reduced the amount of code from the last lab.
    app.repos.requestRepos(app.repoView.index);
    // TODO: Call a function to load all the data.
    // Pass a view function as a callback, so the view will render after the data is loaded.

  };

  module.aboutController = aboutController;
})(app);
