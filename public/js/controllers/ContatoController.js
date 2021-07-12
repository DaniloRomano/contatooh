angular.module('contatooh')
    .controller('ContatoController',
        function ($scope, $routeParams, Contato) {
            var id = $routeParams.contatoId;
            $scope.mensagem = {texto: ''};
            $scope.contato = new Contato();
            if (id) {
                Contato.get({id: id}, loadContato,
                    function () {
                        $scope.mensagem.texto = 'Não foi possível carregar o contato';
                    });

                function loadContato(contato) {
                    $scope.contato = contato;
                }
            }

            $scope.salva = salvaContato;

            function salvaContato() {
                $scope.contato.$save()
                    .then(function () {
                        $scope.mensagem.texto = "Salvo com sucesso";
                        $scope.contato = new Contato();
                    }).catch(function (erro) {
                    $scope.mensagem.texto = "Não foi possível salvar";
                });
            }

            Contato.query((contatos) => {
                $scope.contatos = contatos;
            });
        });