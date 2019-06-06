const path = require('path');
// const pro = argv.mode == 'production' ? true : false;  //  区别是生产环境和开发环境
// 插件都是一个类，所以我们命名的时候尽量用大写开头
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css样式的插件
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 正常写入的less
let styleLess = new ExtractTextWebpackPlugin('css/style.css');
// reset
let resetCss = new ExtractTextWebpackPlugin('css/reset.css');
// let CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack'); // to access built-in plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    devtool: false ? '' : 'inline-source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {   // 抽离第三方插件
                    test: /node_modules/,   // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor',  // 打包后的文件名，任意命名
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10
                },
                utils: {
                    // 抽离自己写的公共代码，utils里面是一个公共类库
                    chunks: 'initial',
                    name: 'utils',  //  任意命名
                    minSize: 0    // 只要超出0字节就生成一个新包
                }
            }
        }
    },
	entry: {
	    main1:'./src/index.js'
    },
    output: {
        // // 添加hash可以防止文件缓存，每次都会生成4位的hash串
        // filename: '[name][chunkhash].js',
        // path: path.resolve('dist')
        filename: false ? '[name].[chunkhash].js' : '[name].js',      // 打包后的文件名称
        path: path.resolve('dist'),  // 打包后的目录，必须是绝对路径
        publicPath: "/"
    },
    plugins: [
        // 打包前先清空
        // new webpack.ProgressPlugin(),
        // new CleanWebpackPlugin(),
        // 通过new一下这个类来使用插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['vendor', 'main1', 'utils']  //  引入需要的chunk
        }),
        new ExtractTextWebpackPlugin('css/style.[chunkhash].css'),
        new ExtractTextWebpackPlugin('css/reset.[chunkhash].css'),
        new webpack.HotModuleReplacementPlugin()  // 热更新，热更新不是刷新
    ], 						 // 对应的插件
    module: {
        rules: [
            {
                test:/\.js$/,
                use: 'babel-loader',
                include: /src/,          // 只转化src目录下的js
                exclude: /node_modules/  // 排除掉node_modules，优化打包速度
            },
            {test:/\.tsx?$/,loader:"ts-loader"},
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                            outputPath: 'images/'   // 图片打包后存放的目录
                        }
                    }
                ]
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-withimg-loader'
            },
            {
                test: /\.(eot|ttf|woff|svg)$/,
                use: 'file-loader'
            },
            {
                test: /\.less$/,     // 解析less
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader', 'less-loader'] // 从右向左解析
                })
            },
            {
                test: /\.scss$/,     // 解析scss
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader', 'sass-loader'] // 从右向左解析
                })
            },
            {
                test: /\.css$/,     // 解析css
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader']
                })
            },
        ]
    },              // 处理对应模块
    devServer: {
        port: 3000,             // 端口
        open: false,             // 自动打开浏览器
        hot: true,               // 开启热更新
        overlay: true, // 浏览器页面上显示错误
        historyApiFallback: true
    },           // 开发服务器配置
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        // 别名
        alias: {
            pages:path.join(__dirname,'src/pages'),
            // component:path.join(__dirname,'src/component'),
            actions:path.join(__dirname,'src/redux/actions'),
            reducers:path.join(__dirname,'src/redux/reducers'),
        },
        // 省略后缀
        // extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
    },
    mode: 'development'      // 模式配置
}
//  在入口文件index.js
// 还需要在主要的js文件里写入下面这段代码
if (module.hot) {
    // 实现热更新
    module.hot.accept();
}
