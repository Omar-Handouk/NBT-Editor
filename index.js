'use strict';

const fileOps = require('./file_operations');
const parser = require('./parser');

let byteArray = fileOps.read('C:\\Users\\Omar I. Handouk\\Downloads\\compound_test.txt');
parser.decode(byteArray);