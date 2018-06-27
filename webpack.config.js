/**
 * Created by owhat on 2018/4/23.
 */
var path = require('path');
module.exports={
    entry:path.resolve(__dirname,'app/main.js'),
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    }
}