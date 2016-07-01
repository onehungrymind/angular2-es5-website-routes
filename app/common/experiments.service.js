(function(app) {
	app.ExperimentsService = function () {
		this.experiments = [
      {name: 'Experiment 1', description: 'This is an experiment', completed: 0},
      {name: 'Experiment 2', description: 'This is an experiment', completed: 0},
      {name: 'Experiment 3', description: 'This is an experiment', completed: 0},
      {name: 'Experiment 4', description: 'This is an experiment', completed: 0}
    ];
	};

	app.ExperimentsService.prototype.getExperiments = function () {
		return this.experiments;
	};
})(window.app || (window.app = {}));
