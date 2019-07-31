import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

// STEPS
// 1. import Hook useState method that we're using like a fn
  // -useState returns an array. b/c it isn't a class we need to grab what it returns to us
  // 2. Create variable




function App() {
  const [lightOn, setLightOn] = useState(false) //initial state light on is equal false
  const toggleLight = () => {
    setLightOn(true)
  }
  console.log('current state:', !lightOn)


  // const [state, setState fn] = useState()  <---- follow this patter to create setState()
  // const stateArray = useState(); <----lines 20-22 are the same as line 19
  // const state = stateArray[0]
  // const setState = stateArray[1]
  // console.log('useState returns:', stateArray)
  //returns array with current state and fn;  b/c we didn't give it any args it is undefined, the fn is like the new setState, the fn that we pass is going to change the state
  return (
    // Imported variable name from above
    <div className="App">
    {/* to write actual JS use {} */}
    {
      // could also be writteh at lightOn === true
      lightOn   ?  (
      <img src={yellow} alt='bulb on' /> 
      ) :  (
      <img src={white}  alt = 'bulb off' />
      )}
       {/* calls function when that button is clicked  */}
       {/* like saying this.setState = this.state.lighOn */}
      <button onClick={() => {setLightOn(!lightOn)}}> Toggle Light on</button> 
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

