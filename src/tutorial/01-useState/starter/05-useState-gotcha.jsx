import { useState } from "react";
const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setTimeout(() => {
      setCount((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h3>{count}</h3>
      <button onClick={increaseCount}>Increase</button>
    </>
  );
};

export default UseStateGotcha;
