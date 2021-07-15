describe('ContatoController', function () {
    var $scope;
    var $httpBackend;
    var $injector;
    var $controller;

    beforeEach(function () {
        module('contatooh');
    })

    function initController(routeParams) {
        $controller('ContatoController', {
            '$scope': $scope,
            '$routeParams': routeParams
        });
        console.log($controller);
    }

    // beforeEach(function () {
    //     module('contatooh');
    //     inject(function ($injector, _$httpBackend_) {
    //         $scope = $injector.get('$rootScope').$new();
    //         $httpBackend = _$httpBackend_;
    //         $httpBackend.when('GET', '/contatos/1').respond({_id: 1});
    //         $httpBackend.when('GET', '/contatos').respond([{}]);
    //     });
    // });

    beforeEach(inject(function (_$injector_) {
        $injector = _$injector_;
        $scope = $injector.get("$rootScope").$new();
        $httpBackend = $injector.get("$httpBackend");
        // $httpBackend.expectGET('/contatos/1').respond({_id: 1});
        // $httpBackend.expectGET('/contatos').respond([{}]);
        $httpBackend.when('GET', '/contatos/1').respond({_id: 1});
        $httpBackend.when('GET', '/contatos').respond([{}]);
        $controller = $injector.get("$controller");
    }));

    it("Deve o controller estar definido", function () {
        initController({});

        expect($controller).toBeDefined();
    })

    it(
        "Deve criar um Contato vazio quando nenhum parâmetro de rota for passado",
        // inject(function ($controller) {
        function () {
            // $controller('ContatoController', {"$scope": $scope});
            initController({});
            expect($scope.contato._id).toBeUndefined();
        });

    it("Deve preencher o Contato quando parâmetro  de rota for passado",
        // inject(function ($controller) {
        // $controller('ContatoController', {
        //     $routeParams: {contatoId: 1},
        //     '$scope': $scope
        // });
        function () {
            initController({contatoId: 1});
            // $httpBackend.expectGET('/contatos/1').respond({_id: 1});
            $httpBackend.flush();
            expect($scope.contato._id).toBeDefined();
        });
});
