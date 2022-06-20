// import logo from './logo.svg';
import React, {useRef, useState, useMemo, useCallback} from 'react';
import './App.css';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs; // 구조분해

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  }, []);

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active : true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active : false
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active : false
    }
  ]);

  // const name = "react";
  // const style = {
  //   backgroundColor : 'black',
  //   color : 'aqua',
  //   fontSize : '24', // 기본단위 px
  //   padding : '1rem' // 다른단위사용시 문자열로 설정
  // }
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = { 
      id : nextId.current,
      username,
      email
    };
    // 배열 추가 방법 1.
    setUsers(users => users.concat(user));
    // 배열 추가 방법 2.
    // setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
    }, [username, email]);

  const onRemove = useCallback((id) => {
      setUsers(users => users.filter(user => user.id !== id));
    }, []);

  const onToggle = useCallback((id) => {
    setUsers(users =>
      users.map(user => 
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, [])

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username = { username }
        email = { email }
        onChange = { onChange }
        onCreate = { onCreate }
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      {/* <Counter />
      <InputSample />
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true} />
        <Hello color="pink" />
      </Wrapper> */}
      <div>활성사용자 수 : {count}</div>
      {/* <div style={style}>{name}</div>
      <div className="gray-box"></div> */}
    </>
  );
}

export default App;
