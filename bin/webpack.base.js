//3rd
const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


//relative module
const loader = require('./util').loader;
//custom var


module.exports = {
    entry:{
        main:path.join(__dirname,"../main.js"),
    },
    output:{
        filename:`[name].[chunkhash:8].js`,
        chunkFilename:`[name].[chunkhash:8].js`,
        path:path.join(__dirname,"../dist"),
    },
    resolve:{
        extensions:['.js','.vue','.json'],
        alias:{
            "@util":path.join(__dirname,"../utils"),
            "@pages":path.join(__dirname,"../src/pages"),
            'vue': "vue/dist/vue.common",
        }
    },
    module:{
        rules:[
            loader(/\.vue$/,[{
                loader:"vue-loader",
            }]),
            loader(/\.js$/,[{
                loader:"babel-loader",
                options:{
                    presets:[
                        [ "@babel/preset-env",{
                            // "modules": false
                        }]
                    ],
                    plugins:["@babel/plugin-transform-runtime"]
                }
            }]),
            loader(/\.(png|jpe?g|gif|svg)$/,[{
                loader:"file-loader",
                options:{
                    name:'[name].[hash:8].[ext]'
                }
            }]),
        ]
    },
    optimization:{
        runtimeChunk:{
            name:"runtime"
        },

        splitChunks:{
            chunks:"all",
            automaticNameDelimiter:"_",  
            // minChunks:2,
            // maxSize:4000,
            // maxInitialRequests:2,
            // maxAsyncRequests: 2,  
            cacheGroups:{
                vendors: {
                    chunks: 'initial',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: "vendors",
                },
            }
        }
    },
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new VueLoaderPlugin(), 
        new HtmlWebpackPlugin({
            title:"this is title",
            template: path.join(__dirname,"../index.html"),
        })
    ]
}