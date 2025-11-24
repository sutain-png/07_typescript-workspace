export {};

// 두 객체 타입의 데이터를 전달 받아서 병합해서 반환하는 함수
function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const mergedObj = merge({ name: "홍길동" }, { age: 40 });
console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj.age);

// 제네릭 제약: length property가 포함되어있는 타입으로 제한
// 즉, {length: number} 타입을 만족하는 타입을 제한
function printLength<T extends { length: number }>(data: T): void {
  console.log(data.length);
}

printLength("hello");
printLength([1, 2, 3, 4, 5]);
// printLength(mergedObj);
