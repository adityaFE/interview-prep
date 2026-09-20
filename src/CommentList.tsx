import { data } from "./data";
import Comment from "./Comment";
import { useState } from "react";

export interface CommentData {
  id: string;
  author: string;
  text: string;
  timestamp: number;
  upvotes: number;
  replies: CommentData[];
}

const CommentList = () => {
const [comments, setComments] = useState(data);

  function handleUpvote(id: string) {
    console.log("Upvote:", id);
  }

  return (
    <>
      {comments.map((item) => (
        <div key={item.id}>
          <div className="comment-container row">
            <Comment comment={item} onUpvote={handleUpvote} />
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentList;
