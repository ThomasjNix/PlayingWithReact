// Create React class component

// Define button class component with access to parent function incrementValue through alias onClickFunc
// Pass in the incrementVal passed by parent component to pass to incrementValue function on parent through alias onClickFun
class Button extends React.Component{
	render(){
  	return (
    	<button onClick={() => this.props.onClickFunc(this.props.incrementVal)}>
      	Increment by {this.props.incrementVal}
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
    
    // Set state object property 
    state = {buttonValue : 0}
  
    // Update state with passed in value from button (value passed to button when rendered in incrementVal below)
    incrementValue = (valToIncrement) => {
        this.setState((prevState) => ({
            // Increment based off previous state and passed in value
            buttonValue : prevState.buttonValue + valToIncrement
        }));
    };
  
  // Render multiple buttons with different incrementVal values for demonstration as well as a Result class component
  // Buttons have onClickFunc alias to this component's incrementValue function, and incrementVal alias to a number
	render(){
  	return (
        <div>
            <Button incrementVal={1} onClickFunc={this.incrementValue} />
            <Button incrementVal={5} onClickFunc={this.incrementValue} />
            <Button incrementVal={10} onClickFunc={this.incrementValue} />
            <Button incrementVal={20} onClickFunc={this.incrementValue} />
            <Result incrementedValue={this.state.buttonValue} />
        </div>
    )
  }
}

// Render App class component to mountNode (used in online REPL)
ReactDOM.render(<App />, mountNode);

{/*
*   Following the flow of this JSX code:
*   1. App class is rendered with incrementValue function and state object, renders child components (step 2)
*   2. Buttons are rendered with incrementVal and onClickFunc properties/methods, respective to App class incrementValue function and a hard coded number
*   3. On click, the incrementValue function on the App component is called (through the button's onClickFunc function alias), and the incrementVal passed to the button is passed
*   4. incrementValue is called from the App class component, passed in value from button is added to the previous state button value
*   5. Render class component is updated with incrementedValue alias (passed in from App class component state object buttonValue, which was just incremented)
*/}