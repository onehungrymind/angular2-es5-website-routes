(function (app) {
  app.ExperimentDetailComponent = ng.core
    .Component({
      selector: 'experiment',
      templateUrl: 'app/experiments/experiment-details/experiment.detail.component.html',
      styles: [
        [
          '.experiment {',
            'cursor: pointer;',
            'outline: 1px lightgray solid;',
            'padding: 5px;',
            'margin: 5px;',
          '}'
        ].join('')
      ],
      inputs: ['experiment']
    })
    .Class({
      constructor: function () {},
      doExperiment: function () {
        this.experiment.completed += 1;
      }
    });
})(window.app || (window.app = {}));
