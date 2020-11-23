import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  //var [a,b] = [10,100];
  let [문제번호, 문제번호변경] = useState(['1번', '2번']);
  let [따봉 ,따봉변경]=useState(0);
 
  return (
    <div className="App">
      <div className="black-nav">
        <div>Online Judge 개발중...</div>
        <div className='login'>
          <a href="http://naver.com">login</a>
        </div>
      </div>
      <div className='list'>
        <h4>문제 목록 </h4>
        <p>{문제번호[1]} <span onClick={ () => {따봉변경(따봉+1)} }> 👍</span> {따봉}</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;

