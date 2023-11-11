import { useState } from 'react';

const ShortCircuitOverview = () => {

  const [text, setText] = useState("") //falsy
  const [name, setName] = useState("muzaffer") //truthy

  

  return (
    <>
      <h4>Falsy OR: {text || "hello world"}</h4> 
      {/* hello world */}
      <h4>Falsy AND: {text && "hello world"}</h4>
      {/* "boş string" */}
      <h4>Truthy OR: {name || "hello world"}</h4>
      {/* Muzaffer */}
      <h4>Truthy AND: {name && "hello world"}</h4>
      {/* hello world */}

    </>
  )
};
export default ShortCircuitOverview;
