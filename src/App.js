import Card from "./components/Card";


// import Counter from "./components/Counter";
// import Counter2 from "./components/Counter2";
// import Login from "./pages/Login";
import React, { useState } from 'react'
import ThemeButton from "./components/ThemeButton";

function App() {

// const handleClick = () => {

//   console.log("App 클릭!!!")

// }

  /**
   * 1.ThemeButton에 온클릭 이벤트를 만든다.
   * 2.버튼이 눌려졌다는 이벤트를 부모 컴포넌트에 전송한다.
   * (onTheme) 이벤트
   * 3.이벤트를 받으면 div 클래스를 변환하는 함수를 생성한다.
   * (handleTheme)
   * 4.부모 컴포넌트의 div 클래스 부분을 변수처리 한다.
   * [state] isDarkMode라는 state를 생성한다.
   * 5.isDarkMode state를 wrap 클래스가 있는 div에 className의 속성을 다르게 넣어준다.
   * 5-1.다크모드인 경우엔 'dark-mode'를 준다
   * 5-2.다크모드가 아닌 경우엔 'light-mode'라는 클래스를 준다
   * 6.handleTheme함수에서 isDarkMode의 값을 토글로 변경해준다
   * 7. ThemeButton 컴포넌트에  isDarkMode라는 props를 내려준다.
   * 7-1. 이 props에는 isDarkMode의 값을 넣어준다.
   * 8. ThemeButton 컴포넌트에 isDarkMode의 값을 받아서 true인 경우엔 "다크모드" false인 경우엔 "라이트모드"
   * 버튼을 클릭한다. 
   * 작동이 잘 되어 바뀌는걸 확인한다. 
   * 
   */

  const [isDarkMode, setDarkmode] = useState(false);

const [isLoggedIn,setIsLoggedIn] = useState(false);
const [message, setMessage] = useState([{text: "안녕하세요", id: 21},{text: 15, id: 22}]);

  const handleTheme = () => {

    setDarkmode(!isDarkMode)
  }

  return <>
          
        <div className={`App wrap ${isDarkMode?"dark-mode":"light-mode"}`}>
          
          {isLoggedIn? "환영합니다" : "로그인해주세요"}
          {message.length && <h2>새로운 메시지가 {message.length}개 있습니다.</h2>}
          {/* <Counter2 />
          <Login />
          <Counter /> */}
          <Card title={"에일리짱"}
          subText={"에일리짱짱"}  
          onCardClick={() => console.log("App 클릭")}/>
          <Card title={"구글SEO"}
          subText={"떠먹여드립니다"}
          onCardClick={() => console.log("App 클릭")}/> 

          <ThemeButton isDarkmode={isDarkMode} onTheme={handleTheme} />




          </div>
          </>
          
  };

  export default App;

















  //logic
    // console.log("App.js")

  // const name = '장현재';
  // const age = 35;



  // const greetingMessage = `안녕하세요. ${name}님! 나이가 ${age}세 시군요. 
  // 환영합니다!`

  // console.log("🚀greetingMessage:", greetingMessage)

// Logical operators
// 단축 평가 논리 계산법


  // const user = {
  //   isLoggedIn: true,
  //   role: 'admin', // 'guest' 'user'
  // };

  //   if (user.isLoggedIn && user.role === 'admin') {
  //     console.log("관리자 페이지에 접근이 가능합니다.");
  //   } else {
  //     console.log("관리자 페이지에 접근이 불가능합니다!");
  //   }



// const userInput = '입력값?' //true
// if (!userInput) {

//   console.log("사용자의 입력값이 없는 경우");

// }

// const user2 = {
//   id : "guswo57",
//   password : 'password',
//   isLoggedIn : false
// };

// if (user2.id==="guswo57" && user2.password==='password') {
//   // 1차 조건 판별
//   user2.isLoggedIn = true; 

// }


  // view

//    <Card /> 가 컴포넌트를 호출하는 문법임.






//Default parameter 매개변수 - 

// const greet = (input = '고객') => {

//   return `${input}님, 반갑습니다`;

// };

// console.log(greet());


// //구조분해 할당

// const studentName = ['김태욱','김현호','장현재'];

// const addStudent = () => {
//   studentName.push("박건영");
//   console.log("studentList",studentName);

  
// }

// addStudent();



// const [name1, name2] = studentName;


// // 위에 함수를 여러줄로 나타내면 이렇게 된다구 
// // const name1 = studentName[0]
// // const name2 = studentName[1]
// // const name3 = studentName[2]

// console.log("name1",name1);
// console.log("name2",name2);



// // 객체 구조분해 할당

// const person = {
//   name : "장현재",
//   age : 35,
//   email : "allpredance@gmail.com"

// };

// const messageItem = {
//   messagenumber : 1,
//   message : "하이요"
// };


// const {name, age, email} = person;
// console.log("🚀 ~ name:", name);
// console.log("🚀 ~ age:", age);
// console.log("🚀 ~ email:", email);


// const copyPerson = {
//     ...person,
//     ...messageItem,
//     name:"쎄오",
//     nickName: "로봇트" };
// console.log("🚀copyPerson", copyPerson);



