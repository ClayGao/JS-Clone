/**
 * 最基本的淺拷貝案例
 */

const obj = {
    a: 1,
    b: 2,
}

const objCopy = obj

objCopy.a = 5

console.log(obj)
