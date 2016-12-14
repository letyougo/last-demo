/**
 * Created by surui on 2016/5/20.
 */

process.env.NODE_ENV = 'development';
var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config'),
    port = 4000;


new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(port, 'localhost', function (err, result){
    if(err) return console.log(err);
    console.log('Redmine is listening at http://localhost:' + port);
});