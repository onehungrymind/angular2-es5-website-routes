(function(app) {
	app.StateService = function () {
		this.message = 'Hello Message';
	};

	app.StateService.prototype.getMessage = function () {
		return this.message;
	};

	app.StateService.prototype.setMessage = function (newMessage) {
		this.message = newMessage;
	};
})(window.app || (window.app = {}));
