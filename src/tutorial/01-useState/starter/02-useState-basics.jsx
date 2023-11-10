import React,{ useState } from "react";
const UseStateBasics = () => {
  // we are using use state because it re renders
  // use state is a function
  const [count, setCount] = useState(0)


  const handleClick = () =>{
    setCount(count + 1)
  }
  return (
    <>
      <div> you clicked {count} times</div>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </>
  )  
};

export default UseStateBasics;
