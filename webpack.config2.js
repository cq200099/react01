const path = require('path');
// 插件都是一个类，所以我们命名的时候尽量用大写开头
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css样式的插件
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	entry: {
	    main1:'./src/index.js',
        login:'./src/login.js',
    },
    output: {
        // 添加hash可以防止文件缓存，每次都会生成4位的hash串
        filename: '[name][chunkhash:3].js',
        path: path.resolve('dist')
    },
    plugins: [
        // 通过new一下这个类来使用插件
        new HtmlWebpackPlugin({
            // 用哪个html作为模板
            // 在src目录下创建一个index.html页面当做模板来用
            template: './src/index.html',
            hash: true, // 会在打包好的bundle.js后面加上hash串
            chunks: ['main1']   // 对应关系,login.js对应的是login.html
        }),
        new HtmlWebpackPlugin({
            template: './src/index2.html',
            filename: 'login.html',
            chunks: ['login']   // 对应关系,login.js对应的是login.html
        }),
        new ExtractTextWebpackPlugin('css/style.css'),
        new MiniCssExtractPlugin({
            filename: 'css/a.css'   // 指定打包后的css
        })
    ], 						 // 对应的插件
    module: {
        rules: [
            {
                test: /\.less$/,     // 解析less
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback: "style-loader",
                    use: ['css-loader', 'less-loader'] // 从右向左解析
                })
            },
            {
                test: /\.scss$/,     // 解析scss
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader'] // 从右向左解析
                })
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },              // 处理对应模块
    devServer: {},           // 开发服务器配置
    mode: 'development'      // 模式配置
}
