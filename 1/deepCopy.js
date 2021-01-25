const obj = {
    a: 1,
    b: 2,
}

/**
 * 你看過的深拷貝案例：
 */

/**
 *  1. JSON.parse(JSON.stringify)
 */

console.log('JSON.parse(JSON.stringify):')

const objCopy = JSON.parse(JSON.stringify(obj))

/**
 * 2. Object.assign()
 */

// console.log('Object.assign():')

// const objCopy = Object.assign({}, obj)

/**
 * 3. 解構 Destructuring assignment
 */

// console.log('Destructuring assignment:')

// const objCopy = { ...obj }

/**
 * 結果處理: 看看原本 obj 的值
 */

objCopy.a = 5

console.log(obj)
