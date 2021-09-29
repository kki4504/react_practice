const React = require('react');
const {Component} = React;

class RenderText extends Component {
    state = {
        counter: 0,
    };
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.state.counter !== nextState.counter) {
            return true;
        } 
        return false;
    } 
    onClick = () => {
        this.setState( {
            
        });
    }
    render() {
        console.log('랜더링', this.state);
        return (<di>
            <button onClick={this.onClick}>Click</button>
        </di>)
    }
}

module.exports = RenderText;