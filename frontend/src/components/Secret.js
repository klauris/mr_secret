import React from "react";

function Secret(props) {
  const { name, secret, id } = props;
  return (
    <div
      key={id}
      className="w-[200px] h-[250px] p-4 m-4 bg-white rounded-lg flex flex-col justify-center drop-shadow-l
      hover:drop-shadow-xl hover:scale-105	 focus: scale-95 cursor-pointer
      
      
      "
    >
      <p
        className="text-center text-xl bg-neutral-50 h-2/3 rounded-lg drop-shadow-xl pt-4

"
      >
        {secret}
      </p>
      <span
        className="border-t-4 border-indigo-200 mt-2 

"
      ></span>
      <div className="flex items-center justify-center bg-sky-50 rounded-lg h-[50px] mt-3">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Secret;
