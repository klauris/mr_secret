import React, { useState } from "react";
import useSWR from "swr";
import Secret from "../components/Secret";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Home() {
  const [page, setPage] = useState(1);
  const { data, error } = useSWR(`http://localhost:3000/secrets`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);

  return (
    <>
      <div
        className="bg-slate-100 grid grid-cols-1 justify-items-center mt-4

    sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6
 h-[calc(100vh-90px)] overflow-y-auto pb-20
    
    "
      >
        {data.map((secret) => {
          return (
            <div key={secret.id}>
              <Secret {...secret} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
