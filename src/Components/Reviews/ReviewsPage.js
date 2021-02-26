import React from "react";

const ReviewsPage = () => {
  return (
    <>
      <h1 className="text-center">Submit a Review</h1>
      <div className="container">
        <label>Enter Name:</label>
        <input type="text"></input>
        <label>Enter Movie/TV Show Title:</label>
        <input type="text"></input>
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
