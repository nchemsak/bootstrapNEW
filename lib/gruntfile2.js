'use strict';
module.exports = function(grunt) {

    grunt.initConfig({


        jshint: {
            files: ['../main.js'], //this is the folder where all JS code should be located.
            //It looks for ANY file that ends in '.js' in the 'javascripts' folder
            options: {
                predef: ["document", "console", "Module", "$", "module", "require", ], //predefined
                esnext: true,
                globalstrict: true,
                globals: { "angular": true, "app": true, "module": true, "require": true, }, //put global variables here ex: {"Sandwich": true, "require": true}
                browserify: true
            }
        },


        sass: {
            dist: {
                files: {
                    '../css/main.css': '../sass/styles.scss' //if your scss files is named something different, you’ll have to change this path.
                        //this creates a file called main.css FROM sass/styles.scss
                }
            }
        },


        uglify: {
            js: { //target
                src: ['../main.js'],
                dest: '../main.min.js'
            }
        },

        watch: {
            javascripts: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint', 'uglify', 'quint']
            },
            sass: {
                files: ['../sass/*.scss'],
                tasks: ['sass']
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['jshint', 'sass', 'qunit', 'uglify', 'watch']);
    //now, just typing 'grunt' will run this and the watch task will take over.
};
