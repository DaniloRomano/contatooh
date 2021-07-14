var contatoPage = function () {
    this.visitar = visitar;
    this.digitarNome = digitarNome;
    this.digitarEmail = digitarEmail;
    this.salvar = salvar;
    this.obterMensagem = obterMensagem;
    this.selecionarPrimeiraEmergenciaDaLista = selecionarPrimeiraEmerenciaDaLista;

    function visitar() {
        browser.get("http://localhost:3000/#/contato");
    }

    function digitarNome(nome) {
        element(by.model('contato.nome')).sendKeys(nome);
    }

    function digitarEmail(email) {
        element(by.model('contato.email')).sendKeys(email);
    }

    function salvar() {
        element(by.css('.btn-primary')).click();
    }

    function obterMensagem() {
        return element(by.binding('mensagem.texto')).getText();
    }

    function selecionarPrimeiraEmerenciaDaLista() {
        element(by.css('option:first-child')).click();
    }
}

module.exports = contatoPage;