import React from "react";
import AddComment from "./AddComment";

const commentList = [
  { name: "john", comment: "first comment", date: "2022/10/10" },
  { name: "tom", comment: "second comment", date: "2022/10/10" },
  { name: "jimmy", comment: "third comment", date: "2022/10/10" },
  { name: "jimmy", comment: "third comment", date: "2022/10/10" },
  { name: "jimmy", comment: "third comment", date: "2022/10/10" },
  { name: "jimmy", comment: "third comment", date: "2022/10/10" },
  { name: "jimmy", comment: "third comment", date: "2022/10/10" },
  { name: "jimmy", comment: "third comment", date: "2022/10/10" },
  { name: "jimmy", comment: "third comment", date: "2022/10/10" },
  { name: "jimmy", comment: "third comment", date: "2022/10/10" },
  { name: "jimmy", comment: "third comment", date: "2022/10/10" },
];

function Comments() {
  return (
    <div className=" w-2/3 ">
      <p>Comments</p>
      <div class="h-2 border-b-2 border-grey"></div>

      <div className="overflow-auto h-[250px]">
        {commentList.map((comment) => {
          return (
            <div className="m-2">
              <div className="flex gap-2">
                <p className="font-bold">{comment.name}</p>
                <p>{comment.date}</p>
              </div>
              <div>
                <p>{comment.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pt-6">
        <AddComment />
      </div>
    </div>
  );
}

export default Comments;
