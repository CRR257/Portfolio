import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';
import { Typing, TypingSpeed } from '../../models/type';


function TypeWriter() {
  const CONSTANTS = {
    DELETING_SPEED: 150,
    // DELETING_SPEED: 30,
    TYPING_SPEED: 150,
  }
  
  // let messages = ["Clara","I'm a committed developer","I \u2665 to make web pages"];
  let messages = ["I'm Clara, ", "I'm a developer, ", "I'm a committed developer, ","I \u2665 to make web apps! "];
  // let messages = ["WELCOME TO MY WORLD","THIS IS MY WEBSITE","I AM AT YOUR SERVICE"];
  let heading="Hi,";
  // let heading="Things I want to type:";
  
    const [state, setState] = useState({
      text: "",
      message: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: CONSTANTS.TYPING_SPEED,
    });
    
    useEffect(() => {
      let timer: any = "";
      const handleType = () => {
        setState(cs => ({
          ...cs, // cs means currentState
          text: getCurrentText(cs),
          typingSpeed: getTypingSpeed(cs)
        }));
        timer = setTimeout(handleType, state.typingSpeed);
      };
      handleType();
      return () => clearTimeout(timer);
    }, [state.isDeleting]);
    
    useEffect(() => {
      if (!state.isDeleting && state.text === state.message) {
        setTimeout(() => {
          setState(cs => ({
            ...cs,
            isDeleting: true
          }))
        }, 500);
      } else if (state.isDeleting && state.text === "") {
        // let timer: any = "";
        // const handleType2 = () => {
          setState(cs => ({
            ...cs, // cs means currentState
            isDeleting: false,
            loopNum: cs.loopNum + 1,
            message: getMessage(cs, messages)
          }));
        //   timer = setTimeout(handleType2, state.typingSpeed);
        // }
        // handleType2();
        // return () => clearTimeout(timer);
      }
    }, [state.text, state.message, state.isDeleting, messages]);
    
    function getCurrentText(currentState: any) {
      return currentState.isDeleting
        ? currentState.message.substring(0, currentState.text.length - 1)
        : currentState.message.substring(0, currentState.text.length + 1);
    }
    
    function getMessage(currentState: any, data: any) {
      // if(currentState.loopNum < 1) {
      //   console.log('currentState.loopNum', currentState.loopNum)
      //   console.log(data[0])
      //   return data[0]}
      //
      return data[Number(currentState.loopNum) % Number(data.length)];
    }
    
    function getTypingSpeed(currentState: any) {
      return currentState.isDeleting
        ? CONSTANTS.TYPING_SPEED
        : CONSTANTS.DELETING_SPEED;
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
//   const messages = ["I'm Clara,", "I'm a developer, ", "I'm a committed developer, ", "I \u2665 to make web apps"]
//   const heading = 'Hi,';
//
//   const initialType: Typing = {
//     text: '',
//     message: '',
//     isDeleting: false,
//     loopNum: 0,
//     typingSpeed: TypingSpeed.Typing,
//   }
//
//   const [typeState, setTypeState] = useState<Typing>(initialType);
//
//   useEffect(() => {
//   let timer: NodeJS.Timeout | string = ''; ////
//   const handleType = () => {
//     setTypeState(typeState => ({
//       ...typeState, // typeState means currentState
//       text: getCurrentText(typeState),
//       typingSpeed: getTypingSpeed(typeState)
//     }));
//     timer = setTimeout(handleType, typeState.typingSpeed);
//   };
//   handleType();
//   return () => clearTimeout(timer);
// }, [typeState.isDeleting]);
//
//   useEffect(() => {
//     if (!typeState.isDeleting && typeState.text === typeState.message) {
//       setTimeout(() => {
//         setTypeState(typeState => ({
//           ...typeState,
//           isDeleting: true
//         }))
//       }, 500);
//     } else if (typeState.isDeleting && typeState.text === "") {
//       setTypeState(typeState => ({
//         ...typeState, // typeState means currentState
//         isDeleting: false,
//         loopNum: typeState.loopNum + 1,
//         message: getMessage(typeState, messages)
//       }));
//     }
//   }, [typeState.text, typeState.message, typeState.isDeleting, messages]);
//
//   function getCurrentText(currentState: Typing) {
//     return currentState.isDeleting
//       ? currentState.message.substring(0, currentState.text.length - 1)
//       : currentState.message.substring(0, currentState.text.length + 1);
//   }
//
//   function getTypingSpeed(currentState: Typing) {
//     return currentState.isDeleting
//       ? TypingSpeed.Typing
//       : TypingSpeed.Delete;
//   }
//
//   function getMessage(currentState: Typing, data: string[]) {
//     console.log('currentState.loopNum', currentState.loopNum)
//     console.log('data[Number(currentState.loopNum) % Number(data.length)]', data[Number(currentState.loopNum) % Number(data.length)])
//     return data[Number(currentState.loopNum) % Number(data.length)];
//   }
//   // useEffect(() => {
//   //   const timeOut = setTimeout(() => {
//   //     setTypeState(initialType);
//   //     handleType();
//   //     return () => clearTimeout(timeOut);
//   //   }, 1000)
//   //
//   //
//   // }, [typeState])
//
//   {/*const handleType = () => {*/}
//   {/*  console.log('initialType', initialType)*/}
//   {/*  console.log('typeState', typeState)*/}
//   {/*  const { isDeleting, loopNum, text, typingSpeed } = typeState;*/}
//   {/*  const i = loopNum % typeState.dataText.length;*/}
//   //   console.log('i', i)
//   //   const fullText = typeState.dataText[i];
//   //   console.log('fullText', fullText)
//   //   setTypeState({
//   //     ...typeState,
//   //     text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
//   {/*    typingSpeed: isDeleting ? 30 : 150*/}
//   {/*  });*/}
//   {/*  console.log('typeState_____2', typeState)*/}
//   {/*  if (!isDeleting && text === fullText) {*/}
//   {/*    // setTypeState({ ...typeState, isDeleting: true, text: '' })*/}
//   //     // setTimeout(() => setTypeState({ ...typeState, isDeleting: true }), 500);
//   //     // setTimeout(() => setTypeState({ ...typeState, isDeleting: true }), 0);
//   //     const timeOut = setTimeout(() => {
//   {/*      setTypeState({ ...typeState, isDeleting: true })*/}
//   {/*      return () => clearTimeout(timeOut);*/}
//   {/*    }, 500)*/}
//   //     console.log('typeState_____3', typeState)
//   //   } else if (isDeleting) {
//   //   // } else if (isDeleting && text === '') {
//   //     setTypeState({
//   {/*      ...typeState,*/}
//   //       isDeleting: false,
//   //       loopNum: loopNum + 1
//   {/*    });*/}
//   //     console.log('typeState_____4', typeState)
//   //   }
//   //   const timeOut = setTimeout(() => {
//   //     handleType();
//   //     return () => clearTimeout(timeOut);
//   //   }, typingSpeed)
//   //   // setTimeout(handleType, typingSpeed);
//   //   // setTimeout(handleType, typingSpeed);
//   //
//   // };
//
//     return (
//       <div className="home" id={'home'}>
//         <div className="home-heading">
//           <h5>{heading}</h5>
//         </div>
//         <div className="home-text">
//           <h6>{typeState.text}</h6>
//           <span className="home-cursor"></span>
//         </div>
//       </div>
//     );
//   }

// export default withRouter(Typer);class Typer extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       text: '',
//       isDeleting: false,
//       loopNum: 0,
//       typingSpeed: 150,
//       heading: "Hi,",
//       dataText: ["I'm Clara,", "I'm a developer, ", "I'm a committed developer, ", "I \u2665 to make web apps"]
//     }
//   }
//
//   componentDidMount() {
//     this.handleType();
//   }
//
//   handleType = () => {
//     const { isDeleting, loopNum, text, typingSpeed } = this.state;
//     const i = loopNum % this.state.dataText.length;
//     const fullText = this.state.dataText[i];
//     this.setState({
//       text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
//       typingSpeed: isDeleting ? 30 : 150
//     });
//
//     if (!isDeleting && text === fullText) {
//       setTimeout(() => this.setState({ isDeleting: true }), 500);
//     } else if (isDeleting && text === '') {
//       this.setState({
//         isDeleting: false,
//         loopNum: loopNum + 1
//       });
//     }
//     setTimeout(this.handleType, typingSpeed);
//
//   };
//
//   render() {
//     return (
//       <div className="home" id={'home'}>
//         <div className="home-heading">
//           <h5>{this.state.heading}</h5>
//         </div>
//         <div className="home-text">
//           <h6>{this.state.text}</h6>
//           <span className="home-cursor"></span>
//         </div>
//       </div>
//     );
//   }
// }

export default TypeWriter;
// export default withRouter(TypeWriter);
