import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';

class Typer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150,
      heading: "Hi,",
      dataText: ["my name is Clara", "I'm a developer, ", "I'm a committed developer, ", "I love to make web pages"]
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

  render() {
    return (
      <div className="home" id={'home'}>
        <div className="home-heading">
          <span>{this.state.heading}</span>
          </div>
          <div className="home-text">
          <span>{this.state.text}</span>
          <span className="home-cursor"></span>
        </div>
      </div>
    );

  }
}

export default withRouter(Typer)