// eslint-disable-next-line
import React, {useState} from 'react'
import './App.css'

const ChatRoom = () => {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')

  const handleMessageInputChange = event => {
    setInputMessage(event.target.value)
  }

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([
        ...messages,
        {id: messages.length, text: inputMessage, sender: 'Me'},
      ])
      setInputMessage('')
    }
  }

  return (
    <div className="chat-room">
      <div className="chat-window">
        {messages.map(message => (
          <div key={message.id} className="message">
            <span className="sender">{message.sender}</span>: {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={handleMessageInputChange}
        />
        <button type="button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  )
}

const App = () => (
  <div className="app">
    <h1>Chat Room</h1>
    <ChatRoom />
  </div>
)

export default App
