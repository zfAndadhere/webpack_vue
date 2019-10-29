//3rd
//rel 
const merge = require("webpack-merge");
const dev = require('./webpack.dev');
const pro = require('./webpack.pro');
const base = require('./webpack.base');
const logger = require('../lib/logger')(__filename);



const NODE_ENV = process.env.NODE_ENV;

module.exports = ()=>{
    if(NODE_ENV == 'production'){
        logger.info('NODE_ENV_pro: ', NODE_ENV);
        return merge(base,pro,{
            mode:NODE_ENV
        })
    }else {
        logger.info('NODE_ENV_development: ', NODE_ENV);
        return merge(base,dev,{
            mode:NODE_ENV
        })
    }
}

