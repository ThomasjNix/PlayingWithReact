// Create React class component
class Button extends React.Component{

	// Define button class component with access to parent function incrementValue through alias onClickFunc
	render(){
  	return (
    	<button onClick={this.props.onClickFunc}>
     		{/* Set value of button to state buttonValue property   */}
      	Increment
      </button>
    )
  }
}

// Define result class component with access to parent state.incrementedValue property through alias incrementedValue (on passed in props element)
const Result = (props) => {
	return(
  	<div>{props.incrementedValue}</div>
  )
}

// Define application class
class App extends React.Component{

	// Set state object with propery 
	state = {buttonValue : 0};
  
	// Update state to increment counter on function call (onclick triggers this function in the Button class component)
  incrementValue = () => {
  	this.setState((prevState) => ({
			// Increment based off previous state
    	buttonValue : prevState.buttonValue + 1
    }));
  };
  
  
	render(){
  	return (
			// React allows for one parent-level element to be defined in the return call     
      
			// Render both Button and Result class components as child components/elements with needed access to parent (App component) properties/methods
    	<div>
    	  <Button onClickFunc={this.incrementValue} />
          <Result incrementedValue={this.state.buttonValue} />
    	</div>
    )
  }
}

// Render App class component to mountNode (used in online REPL)
ReactDOM.render(<App />, mountNode);