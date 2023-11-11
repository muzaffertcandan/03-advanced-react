import { useState } from "react";

const ToggleChallenge = () => {
  const [state, setState] = useState(true)
  // const Changer = () =>{
  //   // state ? (setState(false)): (setState(true))
  //   if(state){
  //     setState(false)
  //     return
  //   }
  //   setState(true)
  // }
  return (<>
    <button className="btn" onClick={()=> setState(!state)}>Click me to change</button>
    {/* {state ? (<h1>here is a true element</h1>): <MyComponent/>} */}
    {state && <MyComponent/>}
  </>)
};
const MyComponent = ()=>{
  return(
    <h2>state false sooo I am returning a component YEYYYY</h2>
  )
}
export default ToggleChallenge;
