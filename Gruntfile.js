// Gruntfile.js
module.exports = function (grunt) {
    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
        development: {
          options: {
            paths: ["assets/css"]
          },
          files: {
            "css/style.css": "css/less/style.less"
          }
        }
      },
        watch: {
            css: {
                files: '**/*.less',
                tasks: ['less']
            }
        }
    });

    grunt.registerTask('default', ['watch']);
};
