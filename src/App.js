import React, { useState } from "react";
import "./styles.css";
const moviesDb = {
  Comedy: [
    { name: "Deewana Mastana", rating: "4.5/5" },
    { name: "Hungama", rating: "5/5" }
  ],
  Horror: [
    { name: "King Kong(1933)", rating: "3.5/5" },
    { name: "it follows", rating: "5/5" }
  ],
  Action: [
    { name: "Blockbuster", rating: "5/5" },
    { name: "Zinda", rating: "4/5" }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("Action");
  weKnowGenre = Object.keys(moviesDb);

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> 🎥 goodmovies's </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite movies. Select a genre to get started
      </p>
      <div>
        {weKnowGenre.map((genre) => {
          return (
            <button
              onClick={() => genreClickHandler(genre)}
              style={{
                padding: "0.5rem",
                margin: "1rem 0.3rem",
                borderRadius: "0.5rem",
                border: "1px solid black",
                backgroundColor: "dodgerblue"
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDb[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "large", color: "blue" }}>
                Name: <span style={{ color: "red" }}>{movie.name}</span>
              </div>
              <div style={{ fontSize: "smaller" }}>
                Rating: <span style={{ color: "#ff4545" }}>{movie.rating}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 *
 * VISER --. View -> Interact -> State in Event handler  -> Render
 */
