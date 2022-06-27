const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
    //state 선언
    const [word, setWord] = useState('Spring');
    // const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const inputRef = useRef(null);

    // const onChangeInput = (e) => {
    //     setValue(e.target.value);
    // };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length - 1] === e.target.children[0].value[0]) {
            setResult('딩동댕');
            setWord(e.target.children[0].value);
            e.target.children[0].value = ''
            inputRef.current.focus();
        } else {
            setResult('땡');
            e.target.children[0].value = ''
            inputRef.current.focus();
        }
    };

    return (
        <>
            <div>{ word }</div>
            <form onSubmit={ onSubmitForm }>
                <input ref={ inputRef } />
                <button>Submit</button>
            </form>
            <div>{ result }</div>
        </>
    );
}



module.exports = WordRelay;