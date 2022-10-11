import React from "react";

function AddComment() {
  return (
    <div>
      <form className="px-6">
        <input
          required
          type="text"
          placeholder="Enter Your Name"
          className="mt-6 block w-full px-3 py-2 bg-white   rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-maximum-yellow focus:ring-1 focus:ring-maximum-yellow 
      border-b-4
    
    "
        />
        <span className="block text-xl font-medium text-white pt-4">
          Secret
        </span>
        <textarea
          required
          type="text"
          id="message"
          rows="5"
          className="block p-2.5 w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-maximum-yellow focus:ring-1 focus:ring-maximum-yellow"
          placeholder="Your comment..."
          maxLength="150"
        ></textarea>

        <div className="pt-6 flex justify-center">
          <button
            className="bg-violet-500 px-8 py-2 rounded hover:bg-violet-400 text-2xl text-white "
            type="submit"
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddComment;
