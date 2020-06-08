/**
 * @update: 2020-06-08 12:54
 * @author: 361388904@qq.com
 * @desc: webpack配置文件
 */

'use strict';

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'production'
};