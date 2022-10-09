import React from "react";
import useSWR from "swr";
import Secret from "../components/Secret";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Home() {
  const { data, error } = useSWR("http://localhost:3000/secrets", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);

  return (
    <div className="grid grid-cols-1 content-evenly 	">
      {data.map((secret) => {
        return (
          <div key={secret.id}>
            <Secret {...secret} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
