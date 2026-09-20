import type { CommentData } from "./CommentList";
import "./App.css";
import { useState } from "react";

interface CommentProps {
  comment: CommentData;
  onUpvote: (id: string) => void;
}

const now = Date.now();

const Comment = ({ comment, onUpvote }: CommentProps) => {
  const isCommentedByAlice = comment.author === "alice";
  const [showComment, setShowComment] = useState(true);

  function getTimeAgo(timestamp: number, now: number) {
    const diff = now - timestamp;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `${seconds} sec ago`;
    }

    if (minutes < 60) {
      return `${minutes} min ago`;
    }

    if (hours < 24) {
      return `${hours} hr ago`;
    }

    return `${days} day ago`;
  }

  function handleShowComment() {
    setShowComment(!showComment);
  }

  function countReplies(replies: CommentData[]) {
    let count = 0;

    for (const reply of replies) {
      count++;

      count += countReplies(reply.replies);
    }

    return count;
  }

  return (
    <div className="column">
      <div className="header row">
        <button className="collapse button" onClick={handleShowComment}>
          -
        </button>
        <div>{comment.author}</div>
        <div className="time-stamp">{getTimeAgo(comment.timestamp, now)}</div>
        {!showComment && countReplies(comment.replies) > 0 && (
          <div>{"[" + countReplies(comment.replies) + " hidden" + "]"}</div>
        )}
      </div>

      {showComment && (
        <div className="content">
          <div>{comment.text}</div>

          <div className="metrics row">
            <button className="button" onClick={() => onUpvote(comment.id)}>
              ⬆️
            </button>
            <div>{comment.upvotes}</div>
            <button className="button">⬇️</button>
            <button className="button primary">Reply</button>
            {isCommentedByAlice && (
              <>
                <button className="button primary">Edit</button>
                <button className="button danger">Delete</button>
              </>
            )}
          </div>

          {comment.replies.length > 0 &&
            comment.replies.map((reply) => (
              <div className="comment-container ">
                <Comment key={reply.id} comment={reply} onUpvote={onUpvote} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
