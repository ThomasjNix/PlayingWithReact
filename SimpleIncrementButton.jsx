// Create React class component
class Button extends React.Component{

	// Set state object with propery 
	state = {buttonValue : 0};
  
	// Define function to increment value of state property on click event
  incrementValue = () => {
  	this.setState((prevState) => ({
    	buttonValue : prevState.buttonValue + 1
    }));
  };

	// Render button with onClick handler set to the function
	render(){
  	return (
    	<button onClick={this.incrementValue}>
     		{/* Set value of button to state buttonValue property   */}
      	{this.state.buttonValue}
      </button>
    )
  }
}

// render button using ReactDOM.render() on mountNode (used on online REPL) 
ReactDOM.render(<Button />, mountNode);