//3rd
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//relative module
const util = require('./util');
//custom var
let loader = util.loader;



module.exports = {
    module : {
        rules:[
            loader(/\.less$/,[
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'less-loader'
            ])
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].css'
        }),
    ]
}