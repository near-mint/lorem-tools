module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
          options: {
            // define a string to put between each file in the concatenated output
            separator: ';'
          },
          dist: {
            // the files to concatenate
            src: ['src/**/*.js'],
            // the location of the resulting JS file
            dest: 'dest/js/<%= pkg.name %>.js'
          }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    "dest/css/skeleton.css": "src/scss/skeleton.scss"
                }
            }
        },
        embed: {
          home: {
            options: {
              threshold: '15KB'
            },
            files: {
              'dest/index.html': 'src/index.html'
            }
          }
        },
        watch: {
            options: {
                livereload: true,
            },
            styles: {
                files: ['src/scss/**/*.scss','src/*.html','src/js/**/*.js'], // which files to watch
                tasks: ['sass','embed','concat'],
                options: {
                    nospawn: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-embed');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['concat','sass','embed','watch']);
};
