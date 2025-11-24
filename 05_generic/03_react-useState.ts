export {};

/* 
const [ count, setCount ] = useState(0); // [ 초기상태값, 상태변경용함수 ]
cosnt [ value, setValue ] = useState('');
*/

function useState<T>(initialState: T): [T, (newState: T) => void] {
  // ...상태관련 코드

  return [
    initialState,
    (newState) => {
      // 상태 업데이트 로직
    },
  ];
}
const [count, setCount] = useState<number>(0);

interface User {
  id: number;
  name: string;
  age: number;
}

const [user, setUser] = useState<User | null>(null);
