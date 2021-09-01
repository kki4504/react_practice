const React = require('react');
const { useState } = require('react');

const NumBaseBall = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);

    const getNumbers = () => {

    }
    const onSubmitForm = () => {

    }
    const onChangeInput = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <div>
                <form onSubmit={ onSubmitForm }>
                    <input maxLength={4} value={ value } onChange={ onChangeInput } />
                </form>
            </div>
            <div>시도 : { tries.length }</div>
            <ul>
                {[].map( () => {
                    return (
                        <li></li>
                    );
                })}
                <li />
            </ul>
        </>
    );
}