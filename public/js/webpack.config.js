module.exports = {
    entry : './playingplan.js',
    output : {
        path : '.',
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /(node_modules|bower_components)/,
                loader : 'babel-loader',
                query : {
                    presets : ['es2015']
                }
            }
        ]
    }
}
