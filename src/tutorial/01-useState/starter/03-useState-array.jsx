import { useState } from "react";
import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person)=> person.id !== id)
    setPeople(newPeople)
  };
  const reomveAllItems = () => {
    setPeople([])
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={()=>{removeItem(id)}}>remove</button>
          </div>
        );
      })}
      <button type="button" className="btn" style={{marginTop:"20px"}} onClick={reomveAllItems}>Clear All Items</button>
    </div>
  );
};

export default UseStateArray;
