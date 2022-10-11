import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import moment from "moment";
import ClipLoader from "react-spinners/ClipLoader";
import Comments from "../components/Comments";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function SingleSecret() {
  const { id } = useParams();
  const { data, error } = useSWR(
    `http://localhost:3000/secrets/${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div className="flex  items-center justify-center h-full">
        <ClipLoader size={100} />
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        key={id}
        className="w-[300px] h-[400px] p-4 m-4 bg-blue-200 rounded-lg flex flex-col justify-center drop-shadow-l
      
      
      
      "
      >
        <p
          className="text-center text-xl bg-neutral-50 h-2/3 rounded-lg drop-shadow-xl pt-4

"
        >
          {data.secret}
        </p>
        <span
          className="border-t-4 border-indigo-200 mt-2 

"
        ></span>
        <div className="flex items-center justify-center bg-sky-50 rounded-lg h-[50px] mt-3">
          <p>{data.name}</p>
        </div>
        <div className="flex items-center justify-center bg-sky-50 rounded-lg h-[50px] mt-3">
          <p> {moment(data.createdAt).format("YYYY-MM-DD")}</p>
        </div>
      </div>

      <Comments />
    </div>
  );
}

export default SingleSecret;
