const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // 引入插件
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : "./", // 默认'/'，部署应用包时的基本 URL
    // outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
    // assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
    lintOnSave: false,
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: !IS_PROD, // 生产环境的 source map
    parallel: require("os").cpus().length > 1,
    pwa: {},
    // configureWebpack: config => {},
    chainWebpack: config => {
        config.resolve.alias
            // .set("@", resolve("src"))
            /* .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("base", resolve("baseConfig"))*/
            .set("public", resolve("public"))
    },
    devServer: {
        /* proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        } */
    },
    configureWebpack: {
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true, //console
                            drop_debugger: false,
                            pure_funcs: ["console.log"] //移除console
                        }
                    }
                })
            ]
        }
    },
    //解决报错:
    // Inline JavaScript is not enabled. Is it set in your options?       in D:\lyy\github\vueCli3.0\node_modules\view-design\src\styles\color\bezierEasing.less (line 110, column 0)
    /* 1.降低less的版本号
    2.javascriptEnabled: true */
    css:{
        loaderOptions:{
            less:{
                javascriptEnabled: true  
            }
        }
    }
};