const React = require('react');
const { useState } = require('react');

const ResponseCheckHooks = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);

    const onClickScreen = () => {

    };
    const onReset = () => {

    };
    return (
        <>
            <div>
                hello
            </div>
        </>
    );
}