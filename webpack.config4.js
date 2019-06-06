const path = require('path');
// 插件都是一个类，所以我们命名的时候尽量用大写开头
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css样式的插件
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 正常写入的less
let styleLess = new ExtractTextWebpackPlugin('css/style.css');
// reset
let resetCss = new ExtractTextWebpackPlugin('css/reset.css');
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
        styleLess,
        resetCss
    ], 						 // 对应的插件
    module: {
        rules: [
            {
                test: /\.(eot|ttf|woff|svg)$/,
                use: 'file-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                            outputPath: '/images/'   // 图片打包后存放的目录
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: resetCss.extract({
                    fallback: "style-loader",
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                use: styleLess.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'less-loader'] // 从右向左解析
                })
            }
        ]
    },              // 处理对应模块
    devServer: {},           // 开发服务器配置
    mode: 'development'      // 模式配置
}
