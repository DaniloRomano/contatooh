angular.module('contatooh')
    .controller('ContatosController', function ($scope, Contato) {
            $scope.contatos = [];
            $scope.filtro = '';
            $scope.mensagem = {texto: ''};

            $scope.remove = function (contato) {
                Contato.delete(
                    {
                        id: contato._id
                    },
                    buscaContatos
                    , function (erro) {
                        $scope.mensagem.texto = "Não foi possível remover o contato";
                    });
            }

            function buscaContatos() {
                Contato.query(
                    function (contatos) {
                        $scope.contatos = contatos;
                    },
                    function (erro) {
                        $scope.mensagem.texto = "Não foi possível objter a lista de contatos";
                    }
                )
            };

            buscaContatos();
        }
    );

