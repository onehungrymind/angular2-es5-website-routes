(function (app) {
  app.AboutComponent = ng.core
    .Component({
      selector: 'about',
      templateUrl: 'app/about/about.component.html'
    })
    .Class({
      constructor: [app.StateService, function(stateService) {
        this.title = 'About Page';
        this.body =  'This is the about page body';
        this.message = '';
        this.stateService = stateService;
      }],
      ngOnInit: function() {
        this.message = this.stateService.getMessage();
      },
      updateMessage: function(m) {
        this.stateService.setMessage(m);
      }
    });
})(window.app || (window.app = {}));
