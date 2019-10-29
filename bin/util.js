const path = require('path');
exports.loader = (reg,use)=>({
    test:reg,
    exclude:path.join(__dirname,"../node_modules"),
    use:use,
})