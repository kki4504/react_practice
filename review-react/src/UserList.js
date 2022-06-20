import React from "react";

const User = React.memo(function User({user, onRemove, onToggle}) {
    // useEffect(() => {
    //     console.log('user 컴포넌트 마운트');
    //     console.log(user);
    //     return () => {
    //         console.log('user 컴포넌트 언마운트');
    //         console.log(user);
    //     };
    //     }, [user]);
    return(
        <div>
            <b style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
            }}
                onClick={()=> onToggle(user.id)}
            >{user.username}</b> 
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
    });

function UserList ({users, onRemove, onToggle}) {

    return (
        <>
            {users.map((user) => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
            
        </>
    );
}

export default React.memo(UserList);