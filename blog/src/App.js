import React, { useState } from 'react'
// import logo from './logo.svg';
import './App.css';


function App() {

  let [a, b] = useState(['남자 코트 추천', '남자 코트 추천', '남자 코트 추천']); // [a, b]
  let [like, likeChanged] = useState(0);

  function rename() {
    var newArray = [...a];
    newArray[0] = '여자코트추천';
    b(newArray);
  }
  // let posts = '고기'
  return (
    <div className="App">
      <div className="black-nav">
          <div>Blog</div>
      </div>
      <button onClick={ rename }>변경</button>
      <div className="list">
        <h3>{a[0]} <span onClick={() => { likeChanged(like + 1) }}>♡</span>{ like }</h3>
        <p>11월 05일</p>
        <hr />
      </div>
      <div className="list">
        <h3>{a[1]}</h3>
        <p>11월 05일</p>
        <hr />
      </div>
      <div className="list">
        <h3>{a[2]}</h3>
        <p>11월 05일</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
