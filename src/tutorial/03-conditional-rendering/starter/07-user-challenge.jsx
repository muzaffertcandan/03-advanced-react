import { useEffect, useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   console.log("user durumu", user);
  // }, [user]);
  const Login = () => {
    //normalde apiye bağlı
    setUser({ name: "muzaffer" });
  };
  const LogOut = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <div>
          <h4>hello there {user && user.name}</h4>
          <button className="btn" onClick={LogOut}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button className="btn" onClick={Login}>
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
