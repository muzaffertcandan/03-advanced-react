import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const users = await response.json();
        setUser(users);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  console.log(user);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error</h2>;
  }
  
  const {login, id, html_url ,avatar_url, bio,company,name} = user  
  return (
    <>
    <img src={avatar_url} alt={name}></img>
      <h2>{login}</h2>
      <h3>Works at {company}</h3>
      <h4>{bio}</h4>
    </>
  );
};
export default MultipleReturnsFetchData;
