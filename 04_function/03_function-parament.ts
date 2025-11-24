export {};

/* 1) 기본 매개변수 타입 지정 */

function getUserInfo(name: string, age: number): string {
  return `${name}은 ${age}살 입니다.`;
}

console.log(getUserInfo("홍길동", 20));

// 배열의 순서 일치해야함. 개수도 일치해야함.

// 2) 옵셔널 매개변수
// 매개변수명 뒤에 ?를 붙여 인자를 생략할 수 있도록 지정
// 유의 사항 : 반드시 필수 매개변수 뒤에 위치해야됨.
function getMessage(name: string, message?: string): string {
  return `${message || "hello"}, ${name}`;
}

console.log(getMessage("hong", "goodbye"));
console.log(getMessage("hong"));
// 3) 기본값 매개변수
// 유의사항 : 옵셔널 키워드 '?' 작성하면 안됨

function printMessage(message: string = "안녕하세요"): void {
  console.log(message);
}

printMessage("안녕 모두들! 이한위다");
printMessage();

// 4) 유니언, 리터럴 적용가능
function setStatus(status: "success" | "error" | "pending"): void {
  console.log(status);
}

setStatus("success");
setStatus("error");
setStatus("pending");

// 5) 나머지 매개변수 (Rest Parameter)
// 매개변수명 앞에 ...를 붙여 인자를 배열로 받음
// 유의사항: 필수 매개변수 뒤에 위치해야됨

function joinString(separator: string, ...string: string[]): string {
  console.log(string.length);
  return string.join(separator);
}

console.log(joinString("-", "헬로우", "월드", "입니다"));
console.log(joinString("", "헬로우", "월드", "!"));

// 릭에트에서 실전 예시
interface User {
  name: string;
  age: number;
}

interface UserDetailProps {
  user: User;
  color: string;
}

// 사용자 정보를 전달받아서 ui 구성하는 함수형 컴포넌트라고 생각
function UserDetailComponent(props: UserDetailProps) {
  // props === {user: user타입 객체, color: string}
  console.log(`${props.user.name}는 ${props.user.age}살 입니당`);
}
// <UserDetailComponet user={User객체} color={'red'} />
UserDetailComponent({
  user: {
    name: "박상학",
    age: 72,
  },
  color: "pink",
});
