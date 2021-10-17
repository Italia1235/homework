import React from 'react'
import style from "./Message.module.css";
type MessagePropsType={
    avatar:string;
    name:string;
    message:string;
    time:string
}

function Message(props:MessagePropsType) {
  const  {avatar,name,message,time} = props
    return (
        <div className={style.message}>

            <img  src={avatar}/>
<div className={style.dialog}>
    <div className={style.name}>{name}</div>

    <div className={style.textMessage}>{message}   </div>



                <div className={style.time}>{time}</div>
</div>

        </div>
    )
}

export default Message;
