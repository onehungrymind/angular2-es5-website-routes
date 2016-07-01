(function (app) {
  app.HomeComponent = ng.core
    .Component({
      selector: 'home',
      templateUrl: 'app/home/home.component.html'
    })
    .Class({
      constructor: [app.StateService, function(stateService) {
        this.title = 'Home Page';
        this.body =  'This is the about home body';
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
