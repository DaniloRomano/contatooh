module.exports = function (grunt) {

    grunt.initConfig({
        copy: { //faz uma copia do projeto para a pasta dist
            project: {
                expand: true,
                cwd: '.',
                src: ['**', '!Gruntfile.js', '!package.json', '!bower.json', '!mondod-service-start.sh'],
                dest: 'dist'
            }
        }, //configuração da tarefa do grunt-contrib-copy
        clean: { //limpa a pasta dist antes de copiar novamente o projeto
            dist: {
                src: 'dist'
            }
        },
        usemin: {
            html: 'dist/app/views/**/*.ejs'
        },
        useminPrepare: {
            options: {
                root: 'dist/public',
                dest: 'dist/public'
            },
            html: 'dist/app/views/**/*.ejs'
        },
        ngAnnotate: {
            scripts: {
                expand: true,
                src: ['dist/public/js/**/*.js']
            }
        }
    })

    grunt.registerTask('default', ['dist', 'minifica']); //registra a tarefa como default, para executar grunt sem parametros
    grunt.registerTask('dist', ['clean', 'copy']); //atalho para as duas tarefas chamando apenas uma
    grunt.registerTask('minifica', ['useminPrepare', 'ngAnnotate', 'concat',
        'uglify', 'cssmin', 'usemin']);
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-ng-annotate');
}