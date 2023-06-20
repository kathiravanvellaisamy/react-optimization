import React from "react";

const ComponentB = () => {
  return (
    <div>
      {" "}
      <ul>
        {[...Array.from(Array(5000).keys())].map((key) => (
          <li>No. {key}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentB;
