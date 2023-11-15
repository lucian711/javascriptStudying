// --------------------------------------------------------------------------------------
//논리연산자
const falsy = [null, undefined, 0, 0n, -0, NaN, ''] /** 거짓 같은 값 */

/** not 은 ! 그리고 !! 이 있음  ! 한개는 Negation 두개는 double negation operator*/
/** && (AND) 는 모두가 참이어야 함 */
/** || (OR) 은 둘중 하나라도 참이면 참 */
/** ~ (Tilde) 1개이면 -( K + 1 ) ~~(Tilde) 두개이면 소수점을 버림 */
/** 옵셔널 체이닝 연산자(?.)는 객체의 중첩 속성에 접근할 때, 해당 속성이 없는 경우 undefined를 반환하는 연산자입니다.  */

// 물음표 한 개 - 삼항 연산자와 옵셔널 체이닝 연산자
// 물음표 두 개 - 프로퍼티 접근 시에 undefined 에러를 방지

// 느낌표 한 개 - 논리 부정 연산자로, Boolean 값의 반대 값을 반환
// 느낌표 두 개 - 일치하지 않는 값인 경우 true를, 일치하는 값인 경우 false를 반환

// 물결 한 개 - 피연산자의 비트를 반전, -(K+1)
// 물결 두 개 - Math.floor()와 같이 소수점 버림
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// 원본 배열을 수정하는 메서드:

const arr = [1, 2, 3]

// push(): 배열의 끝에 요소를 추가합니다.
arr.push(4) // [1, 2, 3, 4]

// pop(): 배열의 끝에서 요소를 제거합니다.
arr.pop() // [1, 2, 3]

// shift(): 배열의 시작에서 요소를 제거하고 나머지 요소들을 앞으로 이동시킵니다.
arr.shift() // [2, 3]

// unshift(): 배열의 시작에 요소를 추가하고 나머지 요소들을 뒤로 이동시킵니다.
arr.unshift() // [1, 2, 3]

// splice(): 배열의 특정 위치에서 요소를 추가하거나 제거합니다.
// array.splice(startIndex, deleteCount, item1, item2, ...)
// startIndex: 배열에서 변경을 시작할 인덱스를 나타냅니다.
// deleteCount: 제거할 요소의 수를 나타냅니다.
// item1, item2, ...: 필요한 경우 배열에 추가될 요소들입니다.
arr.splice(1, 1) // [1, 3]

// 원본 배열을 수정하지 않는 메서드:

// concat(): 두 개 이상의 배열을 결합하여 새로운 배열을 생성합니다.
arr.concat([4, 5, 6]) // [1, 2, 3, 4, 5, 6]
// slice(): 배열의 일부분을 추출하여 새로운 배열을 반환합니다.
// array.slice(startIndex, endIndex)
// startIndex: 추출을 시작할 인덱스를 나타냅니다.
// endIndex: 추출을 종료할 인덱스를 나타냅니다. (이 인덱스에 해당하는 요소는 포함되지 않음)

arr.slice(1, 2) // [2]
// filter(): 주어진 함수의 조건을 만족하는 요소들로 이루어진 새로운 배열을 반환합니다.
arr.filter((item) => item > 1) // [2, 3]

// map(): 주어진 함수를 사용하여 배열의 각 요소를 변환하고, 새로운 배열을 반환합니다.
arr.map((item) => item * 2) // [2, 4, 6]

//유사배열객체는 Array.prototype에 상속받지 않음으로 배열메서드를 사용할수없다.
//유사배열객체는 Array.from()을 사용하여 배열로 변환할 수 있고 [...] 스프레드 연산자를 사용할 수도 있다.

// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// function과 arrow function의 차이점
// 자바스크립트에서 모든 함수는 실행될 때마다 함수 내부에 this라는 객체가 추가된다.

// 일반함수(function)
// 함수 실행시에는 전역(window) 객체를 가리킨다.
// 1. 메소드 실행시에는 메소드를 소유하고 있는 객체를 가리킨다.
// 2. 생성자 실행시에는 새롭게 만들어진 객체를 가리킨다.
// 3. 일반 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고,
// 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.

// 화살표함수 (arrow function)
// 화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다.
// 화살표 함수의 this 언제나 상위 스코프의 this를 가리킨다.(Lexical this)
// 또한 call, apply, bind 메소드를 사용하여 this를 변경할 수 없다.

function fun() {
  this.name = '하이'
  return {
    name: '바이',
    speak: function () {
      console.log(this.name)
    },
  }
}

function arrFun() {
  this.name = '하이'
  return {
    name: '바이',
    speak: () => {
      console.log(this.name)
    },
  }
}

const fun1 = new fun()
fun1.speak() // 바이

const fun2 = new arrFun()
fun2.speak() // 하이

//call apply bind의 차이점
//call apply bind 모두 this를 바인딩할 객체를 인수로 전달할 수 있다.
//call과 apply는 함수를 호출하지만 bind는 함수를 반환한다.
//call과 bind는 함수를 호출할 때 인수를 전달할 수 있지만 apply는 두 번째 인수를 배열로 전달해야 한다.
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`)
}

const person = {
  name: 'John',
}

// apply 메서드를 사용하여 함수 호출
greet.apply(person, ['Hello']) // Hello, John!
// call은 매개변수를 직접 나열
greet.call(person, 'Hi') // Hi, John!

// bind는 새로운 함수를 생성 this를 영구지정
const newGreet = greet.bind(person)

newGreet('Hola') // Hola, John!

// 2. 생성자 함수로 사용 가능 여부
// 일반함수는 생성자 함수로 사용할수 있다 ex) new fun()
// 화살표함수는 생성자 함수로 사용할수 없다 ex) new arrFun() // TypeError: arrFun is not a constructor 이유 :prototype 프로퍼티를 가지고 있지 않기 때문이다.

function fun() {
  this.num = 1234
}
const arrFun = () => {
  this.num = 1234
}

const funA = new fun()
console.log(funA.num) // 1234

const funB = new arrFun() // Error

// 3.arguments 사용 가능 여부
// 일반 함수 에서는 함수가 실행 될때 암묵적으로 arguments 변수가 전달되어 사용할 수 있다.
// 화살표 함수에서는 arguments 변수가 전달되지 않는다.

function fun() {
  console.log(arguments) // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}

fun(1, 2, 3)

const arrFun = () => {
  console.log(arguments) // Uncaught ReferenceError: arguments is not defined
}

fun(1, 2, 3)

// --------------------------------------------------------------------------------------

// 순수함수(Pure Function)와 일급함수(Frist Class Function)
// 부수 효과(side effect)가 없는 함수를 말합니다.
// 순수함수는 동일한 인수를 전달하면 항상 동일한 값을 반환하는 함수이다.
// 순수함수는 외부 상태를 변경하지 않는다.
// 순수 함수
function add(a, b) {
  return a + b
}

// 일급함수(Frist Class Function)는 함수를 값으로 다룰 수 있다.
// 일급함수는 함수를 변수에 할당할 수 있다.
// 일급함수는 함수를 객체에 저장할 수 있다.
// 일급함수는 함수를 함수의 반환값으로 사용할 수 있다.
// 일급 함수
const greet = function (name) {
  return `Hello, ${name}!`
}

const higherOrderFunction = function (func, value) {
  return func(value)
}

// --------------------------------------------------------------------------------------

// 클로저(Closure)는 함수가 자신의 환경 외부에서 선언된 변수에 접근할 수 있는 특성을 나타냅니다.
// 함수가 선언될 때의 환경을 기억하고, 이 함수가 나중에 호출될 때에도 해당 환경에 접근할 수 있게 해주는 메커니즘입니다.
// 클로저를 사용하면 은닉과 캡슐화를 보장받을수있고, 변수를 함수 내부에서 구현함으로써 독립적으로 사용할수있으며, 모듈화와 재사용성에 용이합니다.

function closure() {
  const name = 'kimseyoung'

  function displayName() {
    console.log(name)
  }

  return displayName
}

const closureFunc = closure()
