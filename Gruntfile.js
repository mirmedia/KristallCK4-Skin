module.exports = function (grunt) {
    "use strict";

    var KristallCK4Skin;

    var resourcesPath = 'skins/kristallck/';

    KristallCK4Skin = {
        'scss':     ['skins/kristallck/scss/**/*.scss']
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            KristallCK4SkinScss: {
                files: KristallCK4Skin.scss,
                tasks: ['sass', 'cssmin']
            },
            livereload: {
                files: ['skins/kristallck/*.css'],
                options: {
                    livereload: true
                }
            }
        },

        sass: {
            KristallCK4Skin: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    'skins/kristallck/.temp/css/editor.css': 'skins/kristallck/scss/components/editor.scss',
                    'skins/kristallck/.temp/css/dialog.css': 'skins/kristallck/scss/dialog/dialog.scss',
                    'skins/kristallck/.temp/css/editor_ie.css': 'skins/kristallck/scss/browser-specific/ie/editor_ie.scss',
                    'skins/kristallck/.temp/css/dialog_ie.css': 'skins/kristallck/scss/browser-specific/ie/dialog_ie.scss',
                    'skins/kristallck/.temp/css/editor_ie8.css': 'skins/kristallck/scss/browser-specific/ie8/editor_ie8.scss',
                    'skins/kristallck/.temp/css/dialog_ie8.css': 'skins/kristallck/scss/browser-specific/ie8/dialog_ie8.scss',
                    'skins/kristallck/.temp/css/editor_ie7.css': 'skins/kristallck/scss/browser-specific/ie7/editor_ie7.scss',
                    'skins/kristallck/.temp/css/dialog_ie7.css': 'skins/kristallck/scss/browser-specific/ie7/dialog_ie7.scss',
                    'skins/kristallck/.temp/css/editor_iequirks.css': 'skins/kristallck/scss/browser-specific/iequirks/editor_iequirks.scss',
                    'skins/kristallck/.temp/css/dialog_iequirks.css': 'skins/kristallck/scss/browser-specific/iequirks/dialog_iequirks.scss',
                    'skins/kristallck/.temp/css/editor_gecko.css': 'skins/kristallck/scss/browser-specific/gecko/editor_gecko.scss',
                    'skins/kristallck/.temp/css/dialog_opera.css': 'skins/kristallck/scss/browser-specific/opera/dialog_opera.scss'
                }]
            }
        },

        cssmin: {
            KristallCK4Skin: {
                files: {
                    'skins/kristallck/editor.css': [
                        'skins/kristallck/.temp/css/editor.css'
                    ],
                    'skins/kristallck/dialog.css': [
                        'skins/kristallck/.temp/css/dialog.css'
                    ],
                    'skins/kristallck/editor_ie.css': [
                        'skins/kristallck/.temp/css/editor_ie.css'
                    ],
                    'skins/kristallck/dialog_ie.css': [
                        'skins/kristallck/.temp/css/dialog_ie.css'
                    ],
                    'skins/kristallck/editor_ie8.css': [
                        'skins/kristallck/.temp/css/editor_ie8.css'
                    ],
                    'skins/kristallck/dialog_ie8.css': [
                        'skins/kristallck/.temp/css/dialog_ie8.css'
                    ],
                    'skins/kristallck/editor_ie7.css': [
                        'skins/kristallck/.temp/css/editor_ie7.css'
                    ],
                    'skins/kristallck/dialog_ie7.css': [
                        'skins/kristallck/.temp/css/dialog_ie7.css'
                    ],
                    'skins/kristallck/editor_iequirks.css': [
                        'skins/kristallck/.temp/css/editor_iequirks.css'
                    ],
                    'skins/kristallck/dialog_iequirks.css': [
                        'skins/kristallck/.temp/css/dialog_iequirks.css'
                    ],
                    'skins/kristallck/editor_gecko.css': [
                        'skins/kristallck/.temp/css/editor_gecko.css'
                    ],
                    'skins/kristallck/dialog_opera.css': [
                        'skins/kristallck/.temp/css/dialog_opera.css'
                    ]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass', 'cssmin']);
};
