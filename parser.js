'use strict';

/*
 * NBT Hexadecimal parser
 * The purpose of this file is to be able to encode JSON to NBT, and decode an incoming byte array to JSON.
 * The file does not contain means of knowing if the NBT file is compressed or not (GZip/ZLib).
 */

const TAG_END = 0x00, TAG_END_SIZE = 0;
const TAG_BYTE = 0x01, TAG_BYTE_SIZE = 1;
const TAG_SHORT = 0x02, TAG_SHORT_SIZE = 2;
const TAG_INT = 0x03, TAG_INT_SIZE = 4;
const TAG_LONG = 0x04, TAG_LONG_SIZE = 8;
const TAG_FLOAT = 0x05, TAG_FLOAT_SIZE = 4;
const TAG_DOUBLE = 0x06, TAG_DOUBLE_SIZE = 8;
const TAG_BYTE_ARRAY = 0x07;
const TAG_STRING = 0x08;
const TAG_LIST = 0x09;
const TAG_COMPOUND = 0x0A;
const TAG_INT_ARRAY = 0x0B;
const TAG_LONG_ARRAY = 0x0C;

let encode = () => {

};

let decode = (byteArray) => {
    let decoded = {};

    let openedCompound = false; // Variable to keep track of open Compound tag, replaces a stack.
    let rootCompound = '';

    for (let i = 0; i < byteArray.length;) {
        console.log(byteArray.length, decoded);
        switch (parseInt(byteArray[i], 16)) {
            case TAG_END: {
                openedCompound = false;
                return {subJSON: decoded, stoppedIndex: i};
            }
            case TAG_BYTE: {
                let state = getKey(byteArray, i);

                decoded[rootCompound][state.key ? state.key : ''] = parseInt('0x' + byteArray[state.index]);
                i = state.index + 1;
                break;
            }
            case TAG_SHORT: {
                break;
            }
            case TAG_INT: {
                break;
            }
            case TAG_LONG: {
                break;
            }
            case TAG_FLOAT: {
                break;
            }
            case TAG_DOUBLE: {
                break;
            }
            case TAG_BYTE_ARRAY: {
                break;
            }
            case TAG_STRING: {
                break;
            }
            case TAG_LIST: {
                break;
            }
            case TAG_COMPOUND: {
                if (!openedCompound) {
                    openedCompound = true;
                    // TODO: Replace passing array with slicing or making array global/class
                    let state = getKey(byteArray, i);

                    rootCompound = state.key;

                    decoded[rootCompound] = {};
                    i = state.index;
                } else {
                    let call = decode(byteArray.slice(i));
                    let subCompoundKey = Object.keys(call.subJSON)[0];

                    decoded[rootCompound][subCompoundKey && subCompoundKey !== '' ? subCompoundKey : '']
                        = call.subJSON[subCompoundKey]; // Check if sub-compound is not null/undefined nor empty

                    i = i + call.stoppedIndex + 1;
                }
                break;
            }
            case TAG_INT_ARRAY: {
                break;
            }
            case TAG_LONG_ARRAY: {
                break;
            }
            default:
                throw new Error('Invalid tag');
        }
    }

    return decoded;
};

let getKey = (byteArray, index) => {
    let hexString = '0x' + byteArray[index + 1] + byteArray[index + 2];
    let count = parseInt(hexString);

    if (count) {
        let key = '';
        let j = index + 3, base = j;
        for (; j < base + count; ++j) {
            key += String.fromCharCode(parseInt('0x' + byteArray[j]));
        }

        return {key, index: j};
    } else {
        return {key: '', index: index + 3}
    }
};

module.exports = {
    encode,
    decode
};