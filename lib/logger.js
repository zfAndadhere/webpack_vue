/**
 * create by zf 
 */

// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Comté.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');

var log4js = require('log4js');
module.exports = function(category, level) {
    let logger = log4js.getLogger(category);
    logger.level = level || 'info';
    return logger;
}