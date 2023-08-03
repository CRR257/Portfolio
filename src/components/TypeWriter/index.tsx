import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';
import { TypeMessage, TypingSpeed } from '../../models/type';


export default function TypeWriter() {
  const messages = ["I'm Clara, ", "I'm a committed developer, ","I \u2665 to make web apps! "];
  const heading="Hi,";
  
  const typeMessage: TypeMessage = {
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: TypingSpeed.TYPING_SPEED,
  }
    const [state, setState] = useState(typeMessage);
    
    useEffect(() => {
      let timer: any = null;
    
      const handleType = () => {
        setState(currentState => ({
          ...currentState,
          text: getCurrentText(currentState),
          typingSpeed: getTypingSpeed(currentState)
        }));
        timer = setTimeout(handleType, state.typingSpeed);
      };
    
      handleType();
    
      return () => clearTimeout(timer);
    }, [state.isDeleting]);
    
    useEffect(() => {
      if (!state.isDeleting && state.text === state.message) {
        setTimeout(() => {
          setState(currentState => ({
            ...currentState,
            isDeleting: true
          }))
        }, 500);
      } else if (state.isDeleting && state.text === "") {
          setState(currentState => ({
            ...currentState,
            isDeleting: false,
            loopNum: currentState.loopNum + 1,
            message: getMessage(currentState, messages)
          }));
      }
    }, [state.text, state.message, state.isDeleting, messages]);
    
    function getCurrentText(currentState: any) {
      return currentState.isDeleting
        ? currentState.message.substring(0, currentState.text.length - 1)
        : currentState.message.substring(0, currentState.text.length + 1);
    }
    
    function getMessage(currentState: any, data: any) {
      return data[Number(currentState.loopNum) % Number(data.length)];
    }
    
    function getTypingSpeed(currentState: any) {
      return currentState.isDeleting
        ? TypingSpeed.TYPING_SPEED
        : TypingSpeed.DELETING_SPEED;
    }
  
  return (
    <div className="home" id={'home'}>
      <div className="home-heading">
        <h5>{heading}</h5>
      </div>
      <div className="home-text">
        <h6>{state.text}</h6>
        <span className="home-cursor"></span>
      </div>
    </div>
  );
}