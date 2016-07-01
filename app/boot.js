(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(app.AppComponent, [ng.router.ROUTER_PROVIDERS]);
  });
})(window.app || (window.app = {}));
