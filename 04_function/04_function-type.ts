export {};

/*
  📌 Call Signature (함수 타입 선언 구문)
  1. 함수 타입을 정의할 때 매개변수와 반환값의 타입을 명시적으로 지정하는 방법
  2. 작성법
     (매개변수: 타입) => 반환값 타입;
  3. 재사용을 위해 타입별칭 사용하는 것이 좋음 
*/

// 두 수를 전달받아서 결과값(숫자)을 반환하는 덧셈, 뺼셈, 곱셈, 나누셈 함수 정의

const sum: (a: number, b: number) => number = (a, b) => a + b;

type Operation = (a: number, b: number) => number;

const subtract: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;

const divide: Operation = (a) => a / 10;
console.log(divide(100, 20));
