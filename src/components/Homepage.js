import React from 'react';
// import Nav from './Nav';
// import clara from '../img/';
import Typer from './Typer';
import vineyard from '../img/vineyard.jpg'


class HomePage extends React.Component {


    render() {
        return (
            <div>
                <Typer />
                <image src={vineyard} alt="picture about me" />
            </div>
        )
    }
}

export default HomePage;
