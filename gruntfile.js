module.exports = function(grunt) {

    // Project configuration.
    var config = {
        compass: {
            dist: {
                options: {
                    cssDir: "public/stylesheets",
                    sassDir: "public/sass",
                    imagesDir: "public/images",
                    javascriptsDir: "public/javascripts",
                    force: true,
                }
            }
        },
        watch:{
            sass:{
                files: '**/*.sass',
                tasks: ['compass']
            }
        }

    };

    grunt.file.expand(['dev/components/*/src','public/*/sass']).forEach(function(path) {
        config.compass[path] = { options: { sassDir: path, cssDir: path.replace('sass','stylesheets') } };
    });
    grunt.initConfig(config);

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
    // grunt.registerTask('compass', ['compassMultiple']);

};
