import React from "react";
import "./styles.css";
import { useState } from "react";

const moviesDB = {
  "1980": [
    { name: "The Shining", rating: "9.5/10" },
    { name: "The Thing", rating: "8.5/10" },
    { name: "Aliens", rating: "8.9/10" },
    { name: "Possesion", rating: "8/10" },
    { name: "A Night on Elm Street", rating: "9/10" }
  ],
  "1990": [
    { name: "Scream", rating: "9/10" },
    { name: "The Sixth Sense", rating: "9.5/10" },
    { name: "The Silence of th Lambs", rating: "9.2/10" },
    { name: "The Blair witch project", rating: "8.5/10" },
    { name: "from Dusk till Dawn", rating: "8/10" }
  ],
  "2000": [
    { name: "Final Destination", rating: "7.9/10" },
    { name: "The Exorcism of EmilyRose", rating: "7.5/10" },
    { name: "Saw", rating: "9/10" },
    { name: "Orphan", rating: "8.5/10" },
    { name: "Eden Lake", rating: "6.9/10" }
  ],
  "2010": [
    { name: "Black Swan", rating: "9/10" },
    { name: "The Haunted House project", rating: "6/10" },
    { name: "Resident Evil: After life ", rating: "7.2/10" },
    { name: "The wolfman", rating: "6.4/10" },
    { name: "Paranormal Activity 2", rating: "8.1/10" }
  ]
};

export default function App() {
  const [selectedDecade, setDecade] = useState("2010");
  function DecadeClickHandler(Decade) {
    setDecade(Decade);
  }
  return (
    <div className="App">
      <h1>
        Horror Films of the Decade <span className="role">👻</span>
      </h1>
      <p style={{ fontSize: "large", color: "white" }}>
        {" "}
        Here are some the best horror movies in the world. Select the decade
        from below...{" "}
      </p>

      <div>
        {Object.keys(moviesDB).map((Decade) => (
          <button className="btn" onClick={() => DecadeClickHandler(Decade)}>
            {Decade}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedDecade].map((movie) => (
            <li className="list-items" key={movie.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
