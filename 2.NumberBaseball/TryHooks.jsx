const React = require('react');

const TryHooks = ({ tryInfo }) => {
    return (
        <li>
            <div>{`${index + 1} 번째 시도 : ${tryInfo.try}`}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
};

module.exports = TryHooks;