module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },
	concat: {

	  dist: {
		// the files to concatenate / we only need jquery in the vendors folder
		src: ['js/*.js'],
		// the location of the resulting JS file
		dest: 'dist/killix-all.js'
	  }
	},
	uglify: {
	  options: {
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
	  },
	  dist: {
		files: {
		  'dist/kilix.min.js': ['dist/killix-all.js']
		}
	  }
	},
    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
	  js: {
        files: 'js/*.js',
        tasks: ['concat','uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}