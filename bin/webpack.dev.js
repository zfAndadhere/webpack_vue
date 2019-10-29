//relative module
const loader = require('./util').loader;
//custom var



module.exports = {
    module : {
        rules:[
            loader(/\.less$/,[
                'vue-style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader'
            ])
        ]
    },
}