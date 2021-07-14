// Karma configuration
// Generated on Mon Jul 12 2021 14:18:47 GMT-0400 (Horário Padrão do Amazonas)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            '../public/vendor/angular/angular.js',
            '../public/vendor/angular-mocks/angular-mocks.js',
            '../public/vendor/angular-resource/angular-resource.js',
            '../public/vendor/angular-route/angular-route.js',
            '../public/js/main.js',
            '../public/js/controllers/**/*.js',
            '../public/js/services/**/*.js',
            '../public/js/directives/**/*.js',
            '../test/spec/**/*Spec.js',
            '../public/js/directives/meus-componentes/*.html'
        ],


        // list of files / patterns to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
        preprocessors: {
            '../public/js/directives/**/*.html': 'ng-html2js'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
        browsers: ['PhantomJS','Chrome'],

        plugins: [
            require('karma-ng-html2js-preprocessor'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher'),
            require('karma-jasmine')
        ],

        ngHtml2JsPreprocessor:{
            moduleName: 'templates',
            stripPrefix: '.*/public/'
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser instances should be started simultaneously
        concurrency: Infinity
    })
}
