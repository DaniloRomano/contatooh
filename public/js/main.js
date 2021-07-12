angular.module('contatooh',
    [
        'ngRoute',
        'ngResource'
    ])
    .config(function ($locationProvider,$routeProvider, $httpProvider) {
        $locationProvider.hashPrefix(''); //Volta a ser # na url e não !#
        //Adicionando o meuInterceptor para interceptar as requisições
        $httpProvider.interceptors.push('meuInterceptor');

        $routeProvider.when('/auth', {
            templateUrl: 'partials/auth.html'
        });
        $routeProvider.when("/contatos", {
            templateUrl: 'partials/contatos.html',
            controller: 'ContatosController'
        });
        $routeProvider.when("/contato/:contatoId", {
            templateUrl: 'partials/contato.html',
            controller: 'ContatoController'
        });
        $routeProvider.when('/contato', {
            templateUrl: 'partials/contato.html',
            controller: 'ContatoController'
        });
        $routeProvider.otherwise({
            redirectTo: '/contatos'
        });
    });