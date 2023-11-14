const falsy = [null, undefined, '', 0, NaN, false, 0n, 0] //거짓 같은 값

const data = [1, 2, 3]

//퓨어함수
function add(arr) {
  return arr.map((item) => {
    return item + 1
  })
}

//고차함수
function add2(arr) {
  return arr.filter((item) => {
    return item > this.number
  })
}

const num = {
  number: 1,
}

//일급함수
function add3(func, arr) {
  return func(arr)
}

function getFunction() {
  return add
}

const myfunc = getFunction()

//클로저

function createCounter(params) {
  let counter = 0
  return function () {
    counter += 1
    return counter + params
  }
}

function outerFunction() {
  const outerVariable = 'I am from outer!'

  function innerFunction() {
    console.log(outerVariable) // outerVariable에 접근 가능
  }

  return innerFunction
}
const closureExample = outerFunction()

console.log('counter', closureExample())
