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
        <div className="message__sended">
          <img className="message__avatar" src={props.avatar}/>
          <div className="message__data">
            <h3 className="message__author">{props.name}</h3>
            <p className="message__text">{props.message}</p>
            <span className="message__time">{props.time}</span>
          </div>
        </div>
        <Textarea/>
      </div>
    )
}

const Textarea = () => {
  return (
    <div>
      <input/>
      <button>Send</button>
    </div>
  )
}

export default Message