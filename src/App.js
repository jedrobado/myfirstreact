import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.state = { statement: '' }
  }
  myChangeHandlerUser = (event) => {
    this.setState({username: event.target.value});
  }

  myChangeHandlerStatement = (event) =>{
    this.setState({ statement: event.target.value });
  }
  render() {
    return (
      <center>
      <div className="App">
        <h1>Hello React!</h1>
        <p>React is a JavaScript library for building user interfaces.</p>
        <form onSubmit={this.mySubmitHandler}>
          <h1>Hello {this.state.username}</h1>
          <h2>Hows React? { this.state.statement }</h2>
          <p>Enter your name, and submit:</p>
          <input className='form-txt' type='text' name='username' id='username' placeholder='Enter username' onChange={this.myChangeHandlerUser} /><br/>
          <input className='form-txt' type='text' name='statement' id='statement' placeholder='Enter statement' onChange={this.myChangeHandlerStatement} /><br/>
          <input type='submit' name='submit'/>
        </form>
      </div>
      </center>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
export default App;