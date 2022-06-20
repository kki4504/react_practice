import React, { useState, useRef, useMemo, useCallback } from 'react';
import './App.css';
// import InputSample from './InputSample';
import UserList from './UserList';
import CreatUser from './CreateUser';
import useInputs from './Hooks/useInputs';


function countActiveUsers (users) {
  console.log('사용자 세는중');
  console.log(users.filter(user => user.active).length);
  return users.filter(user => user.active).length;
}

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = inputs; // 구조분해
  const [users, setUsers] = useState([
        {
            id : 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]);
    const onChange = useCallback( e => {
      const {name, value} = e.target;
      setInputs(inputs => ({
        ...inputs,
        [name]: value
      }));
    }, []);
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    // 배열 맨 뒤에 새 항목 추가
    // 1. 
    // setUsers([...users, user]);
    // 2.
    setUsers(users => users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email ]);
  const onRemove = useCallback((id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  // 15. 배열에 항목 수정
  const onToggle = useCallback((id) => {
    setUsers(users =>
      users.map(user => user.id === id ? {...user, active: !user.active } : user)
    );
  }, []);
  // const countActiveUsers = (users) => {
  //   console.log ('세는중..')
  //   let count = 0;
  //   users.map(user => {
  //     if(user.active) {
  //       count += 1;
  //     };
  //   })
  //   return count;
  // }
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div style={{margin: "10px"}}>
      {/* <InputSample/> */}
      <CreatUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>사용자 수 : {count}</div>
    </div>
  );

  
}

export default App;
