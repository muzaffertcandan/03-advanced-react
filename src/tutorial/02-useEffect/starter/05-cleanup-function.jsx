import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Button
      </button>
      {toggle && <SecondComponent />}
    </>
  );
};

const SecondComponent = () => {
  // useEffect(() => {
  //   console.log("hey this is interesting");
  //   const intId = setInterval(() => {
  //     console.log("hey this is interval");
  //   }, 1000);
  //   return () =>{
  //     clearInterval(intId)
  //   }
  // }, []);
  useEffect(()=>{
    const someFunc = ()=>{
      //some logic
    }
    window.addEventListener(scroll, someFunc)
    return ()=> window.removeEventListener(scroll, someFunc)
  },[])
  return (
    <>
      <h2>hey</h2>
    </>
  );
};

export default CleanupFunction;
