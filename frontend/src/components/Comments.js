import useSWR, { useSWRConfig } from "swr";
import moment from "moment";
import AddComment from "./AddComment";
import ClipLoader from "react-spinners/ClipLoader";
import FailedToLoad from "../Pages/FailedToLoad";
import fetcher from "../utils/fetcher";

function Comments({ id }) {
  const { mutate } = useSWRConfig();

  const { data, error } = useSWR(
    `http://localhost:3000/commentList/${id}`,
    fetcher
  );

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

  if (data.length === 0) {
    return (
      <>
        <div>
          <p>Comments</p>
          <div className="h-2 border-b-2 border-grey"></div>
          <div>
            <p>No comments yet</p>
          </div>
          <div className="pt-6">
            <AddComment id={id} mutate={mutate} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className=" w-2/3 ">
        <p>Comments</p>
        <div className="h-2 border-b-2 border-grey"></div>

        <div className="overflow-auto h-[250px]">
          {data.map((comment) => {
            return (
              <div className="m-2" key={comment.id}>
                <div className="flex gap-2">
                  <p className="font-bold">{comment.name}</p>
                  <p> {moment(comment.createdAt).format("YYYY-MM-DD")}</p>
                </div>
                <div>
                  <p>{comment.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div>
        <button
          onClick={() => mutate(`http://localhost:3000/commentList/${id}`)}
        >
          Refetch comments
        </button>
      </div> */}
      <div className="pt-6">
        <AddComment id={id} mutate={mutate} />
      </div>
    </>
  );
}

export default Comments;
