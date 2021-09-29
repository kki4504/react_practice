const React = require('react');
const { Component } = React;
const Try = require('./Try');

function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}


class NumberBaseballClass extends Component{
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    // {/* 화살표 함수를 안쓰면 function 안에서 this 를 못씀 */}
    onSubmitFrom = (e) => {
        const { value, tries, answer } = this.state;
        console.log(answer.join(''))
        e.preventDefault();
        if (value === answer.join('')) {
            this.setState( {
                result: '홈런!',
                tries: [...tries, { try: value, result: '홈런!'}]
            });
            alert('게임을 다시 시작합니다!');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: []
            })
        } else {
            const answerArray = value.split('').map( (v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                this.setState( {
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
                });
                alert('게임을 다시 시작합니다!');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for (let i = 0 ; i <4 ; i += 1) {
                    if(answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState( {
                    tries: [...tries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
                    value: '',
                })
            }
        }
    };

    onChangeInput = (e) => {
        this.setState({
            value : e.target.value
        })
    };
    
    // {/* 주석방법 ^^7 */}
    // hi = [
    //     { hi: '안녕', bye: '잘가'},
    //     { hi: 'hi', bye: 'bye'},
    //     { hi: 'hello', bye: 'goodbye'},
    //     { hi: '안녕d', bye: '잘가d'},
    //     { hi: '안녕a', bye: '잘가a'},
    //     { hi: '안녕c', bye: '잘가c'},
    // ];

    render () {
        const { result, value, tries } = this.state;
        return (
            <>
                <h1>{ result }</h1>
                <form onSubmit={this.onSubmitFrom}>
                    <input maxLength={4} value={value} 
                            onChange={this.onChangeInput} />
                </form>
                <div>시도: {tries.length}</div> 
                <ul>
                    {tries.map( (v, i) => {
                        return (
                            <Try key={ `${i + 1 }차 시도 : `} 
                                 tryInfo={v} 
                                 index={i} />
                        );
                    })}
                </ul>
            </>
        )
    }
}

module.exports = NumberBaseballClass;