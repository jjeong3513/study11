
const a = 100;

const b = 200;

const hi ='안녕하세요';

//export default b; // 여기서 내보낸 값만 받을 수 있음.
//-> export default : 한개의 값만 내보내기 할 수 있다.
//모듈에서 import 시 새로운 이름으로 받을 수 있다.


export {a,b,hi}
//여러개를 내보낼때는 받는 파일에 해당 이름이 꼭 일치해야함.
//export {a,b,hi} 이렇게 여러개를 담아서 내보내기 할 수 있다.
//모듈에서 import 시 이름을 일치시켜줘야 한다.