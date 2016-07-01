(function(app) {
  app.ExperimentsComponent = ng.core
    .Component({
      selector: 'experiments',
      templateUrl: 'app/experiments/experiments.component.html',
      directives: [app.ExperimentDetailComponent]
    })
    .Class({
      constructor: [app.StateService, app.ExperimentsService, function(stateService, experimentsService) {
        this.title = 'Experiments Page';
        this.body =  'This is the about experiments body';
        this.message = '';
        this.experiments = [];
        this.stateService = stateService;
        this.experimentsService = experimentsService;
      }],
      ngOnInit: function() {
        this.experiments = this.experimentsService.getExperiments();
        this.message = this.stateService.getMessage();
      },
      updateMessage: function(m) {
        this.stateService.setMessage(m);
      }
    });
})(window.app || (window.app = {}));
