import React, { useEffect, useState } from "react";
import Data2 from "../Data2";
import Data3 from "../Data3";
import Data4 from "../Data4";
import Data5 from "../Data5";
import Data6 from "../Data6";
import Data7 from "../Data7";
import Data8 from "../Data8";
import Data9 from "../Data9";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Hotels = () => {
  const [posts, setPosts] = useState([]);
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

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="my-3">Hotels Reservation with TripGuru</h1>
      {posts.map(({ hotel_name, present_price, hotelsNg_link }, index) => (
        <ol key={index}>
          <a target="_blank" href={hotelsNg_link}>
            <ul>Hotel Name: {hotel_name}</ul>
          </a>
          <ul>Price: {present_price}</ul>
        </ol>
      ))}
      <LazyLoadComponent>
        <Data2></Data2>
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Data3></Data3>
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Data4></Data4>
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Data5></Data5>
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Data6></Data6>
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Data7></Data7>
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Data8></Data8>
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Data9></Data9>
      </LazyLoadComponent>
    </div>
  );
};

export default Hotels;
