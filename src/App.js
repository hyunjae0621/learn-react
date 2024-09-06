
function App() {
  //logic
    console.log("App.js")

  // const name = '장현재';
  // const age = 35;

  // const greetingMessage = `안녕하세요. ${name}님! 나이가 ${age}세 시군요. 
  // 환영합니다!`

  // console.log("🚀greetingMessage:", greetingMessage)

// Logical operators
// 단축 평가 논리 계산법


  const user = {
    isLoggedIn: true,
    role: 'admin', // 'guest' 'user'
  };

    if (user.isLoggedIn && user.role === 'admin') {
      console.log("관리자 페이지에 접근이 가능합니다.");
    } else {
      console.log("관리자 페이지에 접근이 불가능합니다!");
    }



// const userInput = '입력값?' //true
// if (!userInput) {

//   console.log("사용자의 입력값이 없는 경우");

// }

const user2 = {
  id : "guswo57",
  password : 'password',
  isLoggedIn : false
}

if (user2.id==="guswo57" && user2.password==='password') {
  // 1차 조건 판별
  user2.isLoggedIn = true; 

}


  // view
  return <div>Hello World!!!!</div>;
};

export default App;
