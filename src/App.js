import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
	return (
	  <div className="App">
		<header className="App-header">
		  <img src={logo} className="App-logo" alt="logo"/>

		  <a
			className="App-link"
			href="https://www.yuque.com/docs/share/df6522f1-88f9-4977-a583-84d65250a5db"
			target="_blank"
			rel="noopener noreferrer"
		  >
			Use Mango React to build your web
		  </a>
		</header>
	  </div>
	)
  }
}

export default App
