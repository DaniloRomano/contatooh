var contatosPage = function () {

    this.visitar = visitar;
    this.obterUsuarioLogado = obterUsuarioLogado;
    this.obterTotalDeItensDaLista = obterTotalDeItensDaLista;
    this.removerPrimeiroItemDaLista = removerPrimeiroItemDaLista;

    function visitar() {
        browser.get('http://localhost:3000/#/contatos');
    }

    function obterUsuarioLogado() {
        return element(by.id('usuario-logado')).getText();
    }

    function obterTotalDeItensDaLista() {
        return element.all(by.repeater('contato in contatos'))
            .count();
    }

    function removerPrimeiroItemDaLista() {
        element(by.repeater('contato in contatos').row(0))
            .element(by.css('.btn'))
            .click();
    }
}

module.exports = contatosPage;