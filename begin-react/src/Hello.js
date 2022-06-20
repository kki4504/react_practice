import React from "react";

function Hello({color, name, isSpecial}) {
    // const style = {
    //     color : props.color,
    // }
    return (
    <div /*style={style}*/ style={{ color : color }}>{ isSpecial && <b>*</b> } 안녕하세요 {name} </div>
    )
}
Hello.defaultProps = {
    name : '이름없음',
}

export default Hello;