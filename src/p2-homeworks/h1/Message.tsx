import React from 'react'
import './Message.css'

type propsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: propsType) {
    return (
        <div className="message">
            <img className="message__avatar" src={props.avatar}/>
            <div className="message__data">
                <h3 className="message__author">{props.name}</h3>
                <p className="message__text">{props.message}</p>
                <span className="message__time">{props.time}</span>
            </div>
        </div>
    )
}

export default Message
