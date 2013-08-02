
/*!
 * @description GRUNT! (.js)
 */

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '// <%= pkg.name %> v<%= pkg.version %> \n// <%= pkg.homepage %>\n'
      },
      build: {
        src: 'dist/blend-<%= pkg.version %>.js',
        dest: 'dist/blend-<%= pkg.version %>.min.js'
      }
    },
    jshint: {
      options: {
        browser: true
      },
      files: {
        src: ['src/blend.js']
      }
    },
    concat: {
      options: {
      },
      dist: {
        src: ['src/blend.js'],
        dest: 'dist/blend-<%= pkg.version %>.js'
      }
    },
    watch: {
      scripts: {
        files: [
          'Gruntfile.js',
          'src/**/*.js'
        ],
        tasks: ['jshint','concat']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['jshint','concat','uglify']);
  grunt.registerTask('default', ['jshint','concat','watch']);

};

/* EOF */