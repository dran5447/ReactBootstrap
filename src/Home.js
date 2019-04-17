import React, { Component } from 'react';
import './App.css';


class Home extends Component {

    render() {
        return (
            <div class="home-content">
                <span>
                <h2>Welcome!</h2>
                <p>This app is being used to try out various features of React, 
                    including using it in conjuction with other technologies (such as
                    react-router, bootstrap-react, etc.). See package.json for the full list. 
                </p>
                <p>Tab through the items above to see current demo functionality. </p>
                </span>
            </div>
        );
    }
}

export default Home;