import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <h2>{text || "default value"}</h2>
      {text && (
        <div>
          <h1>hey</h1>
          <h1>my {name}</h1>
        </div>
      )}
      {/* {!text && (
        <div>
          <h1>hey</h1>
        </div>
      )} */}
      {user && <SomeComponent name={name} />}
      <h2 style={{ margin: "1.5rem 0" }}>Ternary operator</h2>
      <button className="btn"> {isEditing ? "edit" : "add"}</button>
      {user ? (
        <div>
          <h4>hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
        </div>
      )}
    </>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h1>component</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default ShortCircuitExamples;
