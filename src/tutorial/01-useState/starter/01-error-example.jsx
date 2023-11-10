import { useState } from "react";

const ErrorExample = () => {
  let count = 0;
  const increaseCount = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={increaseCount}>
        Increase
      </button>
      <button>Decrease</button>
      <h1>hey</h1>
    </>
  );
};

export default ErrorExample;
