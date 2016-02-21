module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    },
    devtool: "#inline-source-map"

};