import React, { useState } from "react";

const ReviewsPage = () => {
  const [title, setTitle] = useState("");
  const [revName, setRevName] = useState("");

  return (
    <>
      <h1 className="text-center">Submit a Review</h1>
      <div className="container">
        <label>Enter Name:</label>
        <input
          value={revName}
          onChange={(e) => setRevName(e.target.value)}
          type="text"
        ></input>
        <label>Enter Movie/TV Show Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        ></input>
        <form>
          <p>
            Write a review:
            <br />
            <textarea cols="83" rows="15"></textarea>
          </p>
        </form>
        <button>Submit</button>
        <hr />
      </div>
    </>
  );
};

export default ReviewsPage;
