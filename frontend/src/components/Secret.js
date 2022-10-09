import React from "react";

function Secret(props) {
  const { name, secret, id } = props;
  return (
    <div key={id} className="w-[150px] h-[200px] p-4 m-4 bg-red-500">
      <p>{secret}</p>
      <p>{name}</p>
    </div>
  );
}

export default Secret;
