import React from 'react';
import {useEffect, useState} from 'react';
import './chatbot.css';

const ChatBot = () => {
    const [message, setMessage] = useState(null)
    const [value, setValue] = useState(null)
    const [previous, setPrevious] = useState([])
    const [title, SetTitle] = useState(null)
  
  
    const newChat = () => {
      setMessage(null)
      setValue("")
      SetTitle(null)
    }
    const handleClick = (uniqueTitle) =>{
      SetTitle(uniqueTitle)
      setMessage(null)
      
    }
  
    const getMessages = async () =>{
      const options = {
         method:'POST',
         body: JSON.stringify({
          message: value
         }),
         headers:{
          "Content-Type" : "application/json"
         }
      }
      try {
        const response= await fetch('http://localhost:3000/completion', options);
        const data = await response.json()
        setMessage(data.choices[0].message)
      } catch (error) {
        console.log(error)
      }
    }
      useEffect(()=>{
        if(!title && value && message){
          SetTitle(value)
        }
        if(title && value && message){
          setPrevious(previous => (
            [...previous,
            {
              title: title,
              role: "user",
              content: value
            },{
              title: title,
              role: message.role,
              content: message.content
            }
            ]
          ))
        }
      },[message, title])
      
  
      const uniqueTitle = Array.from(new Set(previous.map(prevChat => prevChat.title)))  
     
    const currentChat= previous.filter(prevChat => prevChat.title === title)
    return (
      <div className="App">
        <section className="side-bar">
          <button  onClick={newChat}>+ New Chat</button>
          <ul className="history">
            {uniqueTitle?.map((uniqetitle ,index)=> <li key={index} onClick={handleClick}>{uniqetitle}</li> )  }
          </ul>
          <nav>
            <p>Made by Ahtesham</p>
          </nav>
        </section>
        <section className="main">
          {!title && <h1>SerenitySphere</h1>}
          <ul className="feed">
              {currentChat.map((chatmsg,index) => <li key={index}> 
                <p className='role'>{chatmsg.role}</p>
                <p>{chatmsg.content}</p>
              </li>)}
          </ul>
          <div className="bottom-section">
            <div className="input-container">
              <input value={value} onChange={(e)=> setValue(e.target.value)} />
              <div id="submit" onClick={getMessages} >➢ </div>
            </div>
            <p className="info">
              Chat GBT Mar Version. Free Research Preview.
              Our goal is to make AI systems more natural and safe to interact with.
            </p>
  
          </div>
        </section>
      </div>
    );
  }
  
  

export default ChatBot
