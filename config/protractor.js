var config = require('./config.js')();

exports.config = {
    sauceUser: config.sauceUser,
    saudeKey: config.saudeKey,
    capabilities: {
        'name': config.sauceTestName,
        'browserName': 'chrome',
        'tunnel-identifier': config.travisJobNumber,
        'build': config.travisBuild
    },
    specs: ['../test/e2e/**/*.js'],
    onPrepare: function () {
        browser.driver.get('http://localhost:3000')
            .then(function () {
                console.log(config);
                console.log(process.env);
                browser.driver.findElement(by.id('entrar')).click();
                browser.driver.findElement(by.id('login_field'))
                    .sendKeys(config.seleniumUser);
                browser.driver.findElement(by.id('password'))
                    .sendKeys(config.seleniumUserPassword);
                browser.driver.findElement(by.name('commit')).click();
            });
    }
};