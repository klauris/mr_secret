import useSWR from "swr";
import Secret from "../components/Secret";
import ClipLoader from "react-spinners/ClipLoader";
import FailedToLoad from "./FailedToLoad";

import fetcher from "../utils/fetcher";

function Home() {
  const { data, error } = useSWR(`http://localhost:3000/secrets`, fetcher);

  if (error)
    return (
      <div className="flex h-full items-center justify-center bg-slate-100">
        <FailedToLoad />
      </div>
    );
  if (!data)
    return (
      <div className="flex items-center justify-center h-full">
        <ClipLoader size={100} />
      </div>
    );

  return (
    <>
      <div>
        <h1 className="text-center text-3xl p-2 font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Share your secrets with the internet
        </h1>
      </div>
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
