import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 26,
    hobby: "playing games",
  });

  const displayPerson = () => {
    // setPerson(
    //   {name: "john",age: 44, hobby: "n0thing"}
    // )
    setPerson({...person, name: "kayle"})
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Hobby: {person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
