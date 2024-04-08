import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Account = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <div>Please Login First!!!</div>;
  } else {
    return (
      <>
        <h1> Account Details : </h1>
        <div>Welcome : {user.username}</div>
      </>
    );
  }
};

export default Account;
