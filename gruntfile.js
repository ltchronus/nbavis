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
                    // importPath: 'dev/components/box/src'
                }
            }
        },

    };

    grunt.file.expand('dev/components/*/src').forEach(function(path) {
        config.compass[path] = { options: { sassDir: path, cssDir: path } };
    });
    grunt.initConfig(config);

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    // grunt.loadNpmTasks('grunt-compass-multiple');

    // Default task(s).
    grunt.registerTask('default', ['compass']);
    // grunt.registerTask('compass', ['compassMultiple']);

};
