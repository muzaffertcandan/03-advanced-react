import { Personn } from './Personn';
import React from "react";
import { data, people } from "../../../data";
const List = () => {
  console.log(people);
  return (
    <>
      <div>List</div>
      <h1>Names:</h1>
        <div>{people.map((person)=>{
            return <Personn key={person.name} {...person}   />
        })}</div>
    </>
  );
};

export default List;
