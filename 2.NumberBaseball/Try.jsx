const React = require('react');
const { Component } = React;

class Try extends Component {
    render() {
        const { tryInfo, index } = this.props;
        return (
            <li>
                <div>{`${index + 1} 번째 시도 : ${tryInfo.try}`}</div>
                <div>{tryInfo.result}</div>
                
            </li>
        )
    }
}

module.exports = Try;