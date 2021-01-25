const Benchmark = require('Benchmark')
const _ = require('lodash')
const cloneDeep = require('lodash/cloneDeep') // 效能較優 ?
const suite = new Benchmark.Suite()

/**
 * origin object
 */
const obj = {
    period: 'Month',
    start_date: '2012-06',
    end_date: '2012-07',
    attributes: [1, 2, 3, 4, 5],
    measures: {
        Visits: {
            a: {
                aa: function () {
                    console.log(123)
                },
            },
        },
    },
}

const copyByJsonParse = () => JSON.parse(JSON.stringify(obj))

const copyByLodashClone = () => _.cloneDeep(obj)

const testForLoop = () => {
    const arr = []
    for (let i = 1; i <= 999; i += 1) {
        arr.push(i)
    }
}

/**
 * Performance Test:
 */

suite
    .add('JSON.parse Copy', copyByJsonParse)
    .add('lodash deep clone', copyByLodashClone)
    .add('for loop', testForLoop)
    .on('cycle', function (event) {
        console.log(String(event.target))
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'))
    })
    .run({ async: false })

return

/**
 * 怎麼看？
 * https://stackoverflow.com/questions/4986245/how-does-jsperf-work
 */

/**
 * function copy ?
 */

const objCopy = copyByJsonParse()
// const objCopy = copyByLodashClone()

objCopy.measures.Visits.a.aa()

/**
 * Another obj : [https://www.measurethat.net/Benchmarks/Show/5306/0/lodash-clonedeep-vs-jsonparsestringify-vs-recursivecopy]
 */

//  const obj = {
//      description: 'Creates a deep copy of source, which should be an object or an array.',
//      myNumber: 123456789,
//      myBoolean: true,
//      jayson: {
//          stringify: 'JSON.stringify() method converts a JavaScript value to a JSON string....',
//          parse: 'JSON.parse() method parses a JSON string...',
//      },
//  }

/**
 * _.cloneDeep 性能討論 : [https://github.com/lodash/lodash/issues/1984]
 */
