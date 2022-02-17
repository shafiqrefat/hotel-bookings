import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {posts.map(({ hotel_name, present_price, hotelsNg_link }) => (
        <ol key={posts._id}>
          <a target="_blank" href={hotelsNg_link}>
            <ul key={posts._id}>Hotel Name: {hotel_name}</ul>
          </a>
          <ul key={posts._id}>Price: {present_price}</ul>
        </ol>
      ))}
    </div>
  );
};

export default Posts;
