import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventBus from 'vertx3-eventbus-client'


class App extends Component {

constructor(){
	super();

	this.state = {
		
		content : ''
	};
}


  render() {

let getContents = (str) => {

	return "some text "+ str;
}
  	let eb = new EventBus('http://localhost:8080/eventbus/');
  	eb.onopen = () => {
	  eb.registerHandler('feed',  (err, msg) => {
	    console.log(msg.body.now);
	    this.setState({content : msg.body.now});
	  });	
	};
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            	{getContents(this.state.content)}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default App;
