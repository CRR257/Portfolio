import React from 'react';
import {withRouter} from 'react-router-dom';
import Main from './Main';

class Typer extends React.Component {


    constructor(props) {
      super(props);
  
      this.state = {
        text: '',
        isDeleting: false,
        loopNum: 0,
        typingSpeed: 150,
        heading:'Welcome:',
        dataText:["I'm a developer, ", "I love to make pages"] 
        }  
    }
  
    componentDidMount() {
      this.handleType();
    }
  
    handleType = () => {
      const { isDeleting, loopNum, text, typingSpeed } = this.state;
      const i = loopNum % this.state.dataText.length;
      const fullText = this.state.dataText[i];
  
      this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? 30 : 150
      });
  
      if (!isDeleting && text === fullText) {
        
        setTimeout(() => this.setState({ isDeleting: true }), 500);
        
      } else if (isDeleting && text === '') {
        
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });
        
      }
  
      setTimeout(this.handleType, typingSpeed);

    };

    handleGoMain = event => {
      event.preventDefault()
      this.props.history.push('/main')
    }
  
    render() {    
      return (
        <div className="home">
          <div className="typer">
            <h1>{this.state.heading}&nbsp;
            <span>{this.state.text}</span>
            <span id="cursor" />
            </h1>
            <button className="goToMain" onClick={this.handleGoMain}></button>
          </div>
        </div>
      );
      
    }
  }


  export default withRouter(Typer)