import React, { useState, useRef } from "react";

function InputSample () {
    
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })

    const nameInput = useRef(); 
    //  컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 것 입니다.

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs, // 기존 input객체 복사
            [name] : value  // name 키를 가진 값을 value로 설정
        })
    }

    const onReset = () => {
        setInputs({
            name : '',
            nickname : ''
        })
        nameInput.current.focus();  // 초기화 누르고 포커스
    }
    const {name, nickname} = inputs; // 비구조 할당
    return (
        <div>
            <input placeholder="이름" name="name" onChange={onChange} value={name} ref={nameInput} />
            <input placeholder="닉네임" name="nickname" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {inputs.name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;