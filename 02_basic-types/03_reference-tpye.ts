// 참조 타입: object, array, tuple, function

export {} 

/*
  📌 객체 타입 
  1. 자바스크립트의 객체(원시값 제외)를 표현하는 타입
  2. 종류
    1) object : 타입 단순 지정
    2) {속성: 타입, ..} : 객체 리터럴 타입 지정
*/
// 1). object : 모든 객체 타입 가능 , 원시 타입 불가
let obj1: object
obj1 = { name:'홍길동'};
obj1 = [1,2,3];
obj1 = () => console.log('hi)');
// obj1 = 42;

// ✴️ 2) {} : 객체 리터럴 타입
let obj2: {name: string, age: number}
obj2= {name: '홍길동', age: 20}
obj2= {age: 30, name: '김현규'}


/*
  📌 배열 타입 (Array Types)
  1. 자바스크립트의 배열을 표현하는 타입
  2. 종류
    1) [] : 타입 단순 지정
    2) Array<타입> :제네릭 타입 Array<> 사용
*/

let nums1: number[] = [1,2,3];
let strs1: string[] = ['hello', 'world'];

// Array<타입> : 제레릭 타입
let nums2: Array<number> = [1,2,3];
let strs2: Array<string> = ['hello', 'world']

// 번외) 객체 배열
let users: {name: string, age: number}[];
users = [{name: '홍길동', age: 20}, 
    {name: '김현규', age: 30}
]

// 🟢 올바른 코드: 2차원 배열로 타입 수정
let dimensionArr: number[][]; // 'number' 타입의 배열을 담은 배열 (2차원)

dimensionArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 이제 오류 없이 정상적으로 작동합니다.
console.log(dimensionArr[1][0]); // 출력: 4 (두 번째 줄의 첫 번째 요소)



/*
  📌 튜플 타입 (Tuple Types)
  1. 고정 길이, 각 요소마다의 타입을 지정 할 때 사용
  2. 작성법
    [타입, 타입, ..]
  3. 유의사항
    튜플 타입 지정 시 각 요소의 순서와 타입이 중요
*/

let tuple1: [number, string, boolean] = [1, 'hello', true]
tuple1 = [1, 'hello', true]

let tuple2: [number, string] = [1, 'hello']
tuple2 = [1, 'hello']
// tuple2 = ['hello', 1]        


/*
퀴즈
[true, 'hello'. 1]
[false, 'hi', 1,2]
[true, 'good' , 1,2,3]
[false, 'bye' , 1,2,3, 숫자들..]

이 모든 값을 허용할 수있는 타입은?

let quiz1: [boolean, string, []] ?

*/

let tuple3: [boolean, string, ...number[]] = [true, 'good' , 1,2,3]
let tuple4: [boolean, string, ...unknown[]] = [false, 'bye' , 1,2,3, 4]   // unknow 추천


