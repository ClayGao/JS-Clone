const obj = {
    a: function () {
        console.log('function copy success!')
    },
}

/**
 * 你看過的深拷貝案例：
 */

/**
 *  1. JSON.parse(JSON.stringify)
 *      可以確保所有層數的元素都是 reference copy
 */

// console.log('JSON.parse(JSON.stringify):')

// const objCopy = JSON.parse(JSON.stringify(obj))

/**
 * 2. Object.assign()
 *      只能保證第一層的元素是 reference copy
 */

// console.log('Object.assign():')

// const objCopy = Object.assign({}, obj)

/**
 * 3. 解構 Destructuring assignment
 *      也只能保證第一層的元素是 reference copy
 */

// console.log('Destructuring assignment:')

// const objCopy = { ...obj }

/**
 * 結果處理: 看看原本 objCopy 的值
 */

objCopy.a()
