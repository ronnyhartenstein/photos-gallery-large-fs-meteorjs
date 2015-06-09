Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'appMain',

  // the appNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'appNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'appLoading',

  // wait on the following subscriptions before rendering the page to ensure
  // the data it's expecting is present
  waitOn: function() {
    return [
      Meteor.subscribe('imageLists')
    ];
  }
});

dataReadyHold = null;

if (Meteor.isClient) {
  // Keep showing the launch screen on mobile devices until we have loaded
  // the app's data
  dataReadyHold = LaunchScreen.hold();

  // Show the loading screen on desktop
  Router.onBeforeAction('loading');
  Router.onBeforeAction('dataNotFound');
}

Router.map(function() {

  this.route('imagesShow', {
    path: '/images/:_path',
    onBeforeAction: function () {
      this.imagesHandle = Meteor.subscribe('imageList', this.params._path);

      if (this.ready()) {
        // Handle for launch screen defined in app-body.js
        dataReadyHold.release();
      }
    },
    data: function () {
      return this.params._path;
    },
    action: function () {
      this.render();
    }
  });

  this.route('home', {
    path: '/',
    action: function() {
      Router.go('imagesShow');
    }
  });
});
