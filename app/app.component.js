(function(app) {
  app.AppComponent = ng.core
    .Component({
      selector: 'app',
      templateUrl: 'app/app.component.html',
      styleUrls: ['app/app.component.css'],
      directives: [ ng.router.ROUTER_DIRECTIVES ],
      providers: [ app.StateService, app.ExperimentsService ]
    })
    .Class({
      constructor: function() {}
    });

  app.AppComponent = ng.router.Routes([
    {path: '/',            component: app.HomeComponent},
    {path: '/home',        component: app.HomeComponent},
    {path: '/about',       component: app.AboutComponent},
    {path: '/experiments', component: app.ExperimentsComponent},
    {path: '/*',           component: app.HomeComponent }
  ])(app.AppComponent);
})(window.app || (window.app = {}));
