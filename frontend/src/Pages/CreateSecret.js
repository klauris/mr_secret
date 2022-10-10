import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function CreateSecret() {
  const navigate = useNavigate();
  const formRef = useRef();
  const nameRef = useRef();
  const secretRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newSecret = {
      name: nameRef.current.value,
      secret: secretRef.current.value,
    };

    await fetch("http://localhost:3000/post_secret", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSecret),
    });

    console.log(newSecret);

    formRef.current.reset();

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-full ">
      <div className=" w-2/3 h-3/4  sm:w-1/3 bg-form-img rounded-lg pt-6 ">
        <p className="text-center pt-4 text-2xl pb-4 text-maximum-yellow ">
          Create Your Secret
        </p>

        <form className="px-6" onSubmit={submitHandler} ref={formRef}>
          <span className="block text-xl font-medium text-white">
            Your Name
          </span>

          <input
            required
            ref={nameRef}
            type="text"
            placeholder="Enter Your Name"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-maximum-yellow focus:ring-1 focus:ring-maximum-yellow 
    
    "
          />
          <span className="block text-xl font-medium text-white pt-4">
            Secret
          </span>
          <textarea
            required
            type="text"
            ref={secretRef}
            id="message"
            rows="5"
            className="block p-2.5 w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-maximum-yellow focus:ring-1 focus:ring-maximum-yellow"
            placeholder="Your message..."
            maxLength="150"
          ></textarea>

          <div className="pt-6 flex justify-center">
            <button
              className="bg-violet-500 px-8 py-2 rounded hover:bg-violet-400 text-2xl text-white "
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateSecret;
