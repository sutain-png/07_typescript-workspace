export {};

/*
  📌 인터섹션 타입 (Intersection Types)
  1. 여러 타입을 "교집합"으로 표현할 때 사용
  2. 타입들을 모두 만족해야 하는 새로운 타입을 만들어줌 
  3. 작성법
     타입1 & 타입2 & 타입3 
*/
type Person = {
  name: string;
  age: number;
  job?: string;
};

type Worker = {
  company: string;
  position: string;
};

type Empolyee = Person & Worker; // 두 타입을 속성을 모두 포함하는 타입

/*
type Employee = {
name: string,
age: number,
job?: string,
company: string,
position: string

}

*/

let emp: Empolyee = {
  name: "홍길동",
  age: 30,
  job: "개발자",
  company: "구글",
  position: "CTO",
};
