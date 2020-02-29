import React from 'react';
import { withRouter } from 'react-router-dom';

import './index.scss';

class Typer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150,
      heading: "Hi,",
      dataText: ["I'm Clara,", "I'm a developer, ", "I'm a committed developer, ", "I \u2665 to make web pages"]
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
          <h5>{this.state.heading}</h5>
          </div>
          <div className="home-text">
          <h6>{this.state.text}</h6>
          <span className="home-cursor"></span>
        </div>
      </div>
    );
  }
}

export default withRouter(Typer);