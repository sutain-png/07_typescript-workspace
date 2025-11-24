export {};

// 두 객체 타입의 데이터를 전달 받아서 병합해서 반환하는 함수
function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const mergedObj = merge({ name: "홍길동" }, { age: 40 });
console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj.age);
