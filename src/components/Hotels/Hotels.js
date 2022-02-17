import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import Posts from "../Posts/Posts";

const Hotels = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  useEffect(() => {
    const url = `https://beta.extranet.tripguru.com.bd/api/hotels/data/1`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hotels Reservation with TripGuru</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Hotels;
