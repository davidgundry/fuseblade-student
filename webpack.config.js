var path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry:
    {
        main: "./src/main.ts"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"],
        modules: ['node_modules', path.resolve(__dirname, "src")]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [],
    optimization: {
        minimizer: [new TerserPlugin({terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {},
            mangle: { keep_fnames: false, toplevel: true }, // Note `mangle.properties` is `false` by default.
            module: false,
            output: null,
            toplevel: true,
            nameCache: null,
            ie8: false,
            keep_classnames: undefined,
            keep_fnames: false,
            safari10: false}})],
        },
    mode: "development",
};
