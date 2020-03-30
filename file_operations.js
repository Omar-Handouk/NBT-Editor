'use strict';

const fs = require('fs');

let read = (path) => {
    let data = fs
                .readFileSync(path)
                .toString('hex');

    let bytes = [];

    for (let i = 0; i < data.length; i += 2) {
        bytes.push(data[i] + data[i + 1]);
    }

    return bytes;
};

module.exports = {
    read
};