import React from "react";

const CompenentA = () => {
  return (
    <div>
      <div>
        {[...Array.from(Array(10000).keys())].map((key) => (
          <li>{key}s</li>
        ))}
      </div>
    </div>
  );
};

export default CompenentA;
