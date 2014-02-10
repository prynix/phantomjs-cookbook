module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      recipe04: {
        src: '../lib/string-utils.js',
        options: {
          specs: '../lib/*-spec.js'
        }
      }
    },
    watch: {
      scripts: {
        files: ['../lib/*.js'],
        tasks: ['jasmine']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('test', ['jasmine']);
};