export {};

/*
  📌 타입 별칭 (Type Alias)
  1. 복잡하거나 반복되는 타입에 이름을 부여하고자 할 때 사용 (커스텀 타입)
  2. 다양한 타입 조합에 사용
  3. 장점
    1) 타입 중복 정의를 피할 수 있음 (코드 중복 제거)
    2) 타입 변경 시 일괄 수정 가능 (유지보수 용이)
    3) 타입 구조를 명확하게 표현 가능 (가독성 향상)
  4. 작성법
     type 타입별칭 = 타입정의;
  5. 타입별칭은 변수명과의 구분을 위해 대문자로 시작하는걸 권장
*/
// 1) 기본 타입 별칭(참조)
type Age = number;

let userAge: Age = 30;

type Name = "Kim" | "Lee" | "Park";
let userName: Name = "Kim";
userName = "Lee";

type Names = "Kim" | "Lee" | "Park"; // Kim, Lee, Park 셋 중 하나만 허용
type GreetingMessage = `Hello ${Names}`;
// 이 변수 타입은 'Hello Kim' | 'Hello Lee' | 'Hello Park' 셋 중 하나만 허용합니다.

let msg1: GreetingMessage = "Hello Kim"; // ✅ 성공
let msg2: GreetingMessage = "Hello Park"; // ✅ 성공

type StatusCode = 200 | 301 | 404 | 500;

// 3) 객체 타입 별칭
type User = {
  id: number | string;
  name: Name;
  email: string;
  isAdmin: boolean;
};

let user1: User = {
  id: 1,
  name: "Kim",
  email: "kim@exaple.com",
  isAdmin: false,
};
console.log(user1);

let users: User[] = [
  { id: 1, name: "Kim", email: "kim@exaple.com", isAdmin: false },
];

type Person = {
  name: string;
  age: number;
  job?: string;
};

let person1: Person = {
  name: "강개순",
  age: 20,
  // 홈프로텍터라서 직업이 판명할 수 없음
};

type ApiKey = {
  readonly apiName: string; // readonly 속성: 속성 수정 불가, 읽기 전용
  readonly apiKey: string;
};

let kakaoApi: ApiKey = {
  apiName: "카카오",
  apiKey: "232424254002020a3040",
};
