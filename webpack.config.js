/**
 * Created by ryan on 2016/5/20.
 */
var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack'),
    LiveReloadPlugin = require('webpack-livereload-plugin');

var PATH = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
}


module.exports = {
    devtool:'eval',
    entry: {
        main: [
            './app/index'
        ]
    },
    output: {
        path: PATH.build,
        publicPath: '/',  // 资源的路径前缀
        filename: 'bundle.[hash].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', 'es6'],
        root: path.resolve('./')
    },

    plugins:[
        new LiveReloadPlugin(),  //  这个得和下面一起用，然后在谷歌里下载个liveReload的浏览器插件
        new HtmlWebpackPlugin({
            template: './app/index.html',
            // favicon: './webapp/main/icon.jpg',
            inject: 'body',
            minify: {    //压缩HTML文件
                removeAttributeQuotes: true,
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true    //删除空白符与换行符
            }
        }),
        new ExtractTextPlugin('style.[hash].css'), //把各个组件的样式何必
    ],
    module: {

        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.less/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') },
            { test: /\.json/, loader: 'json-loader'},
            {
              test: /.*\.(gif|png|jpg|jpeg|svg)$/i,
                 loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]']
            },
        ]
    }
}