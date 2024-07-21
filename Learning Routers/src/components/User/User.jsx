import React from "react";
import { useParams } from "react-router-dom";
function User() {
  let { userID } = useParams();
  return (
    <>
      <h1 className="text-center w-full bg-teal-600 text-white p-4  ">
        Hello: {userID}
      </h1>
    </>
  );
}

export default User;
