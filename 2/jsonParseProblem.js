/**
 * function in object
 */

const obj = {
    a: function () {
        console.log('function copy success!')
    },
}

/**
 * Symbol in object
 */

// const obj = {
//     a: Symbol('111'),
// }

/**
 * Infinity, undefined, NaN or new Date() in object
 */

// const obj = {
//     a: undefined,
// }

/**
 * 看輸出結果
 */

const objCopy = JSON.parse(JSON.stringify(obj))

console.table({ obj, objCopy })
