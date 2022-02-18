import React, { useEffect, useState } from "react";

const Data5 = () => {
  const [posts5, setPosts5] = useState([]);
  useEffect(() => {
    const url = `https://beta.extranet.tripguru.com.bd/api/hotels/data/5`;
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
        setPosts5(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {posts5.map(({ hotel_name, present_price, hotelsNg_link }, index) => (
        <ol key={index}>
          <a target="_blank" href={hotelsNg_link}>
            <ul>Hotel Name: {hotel_name}</ul>
          </a>
          <ul>Price: {present_price}</ul>
        </ol>
      ))}
    </div>
  );
};

export default Data5;
