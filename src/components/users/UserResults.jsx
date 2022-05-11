import { useEffect } from "react";

// useEffect takes in a function and a dependency(props or state values) in this case
// empty

function UserResults() {
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUG_TOKEN}`,
      },
    });

    const data = await response.json();
    console.log(data);
  };

  return <div>UserResults</div>;
}

export default UserResults;
