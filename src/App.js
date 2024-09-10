//import Card from "./components/Card";

// import Card from "./components/Card";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Login from "./pages/Login";
import React from 'react'

function App() {

// const handleClick = () => {

//   console.log("App 클릭!!!")

// }

  return <>
          
        <div className="App">
          <Counter2 />
          <Login />
          <Counter />
          {/* <Card title={"에일리짱"}
          subText={"에일리짱짱"}  
          onCardClick={handleClick}/>
          <Card title={"구글SEO"}
          subText={"떠먹여드립니다"}
          onCardClick={() => console.log("App 클릭")}/> */}
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



