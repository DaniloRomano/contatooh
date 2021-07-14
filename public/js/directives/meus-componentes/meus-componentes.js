angular.module('meusComponentes', [])
    .directive('meuPainel', function () {
        var directive = {};

        //E - expression / A - attribute
        directive.restrict = "EA";

        directive.scope = {
            titulo: '@' //quando é o mesmo nome da diretiva da propriedade que vai ser passada
        };

        directive.transclude = true;

        directive.templateUrl = 'js/directives/meus-componentes/meu-painel.html';

        return directive;
    })
    .directive('meuBotaoAviso', function () {
        var directive = {};

        directive.restrict = "E";
        directive.scope = {
            nome: '@',
            acao: '&'
        };

        directive.templateUrl = 'js/directives/meus-componentes/meu-botao-aviso.html';

        return directive
    })
    .directive(
        'meuFocus',
        function () {
            var directive = {};
            directive.restrict = 'A';

            directive.scope = {
                evento: '@'
            }

            directive.link = function (scope, element) {
                // scope.$watch(
                //     'focus',
                //     function () {
                //         if (scope.focus) {
                //             element[0].focus();
                //             scope.focus = false;
                //         }
                //     });
                scope.$on(
                    scope.evento,
                    function () {
                        element[0].focus();
                    });
            };

            return directive;
        }
    );