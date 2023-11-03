import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const colors = [
    "#FF69B4",
    "#81FBB8",
    "#70CFE1",
    "#A3D2EE",
    "#DBADFF",
    "#81479b",
    "#5CACBC",
    "#FA7D6A",
    "#FECD5B",
    "#FFCEAB",
    "#FBDE7E",
    "#FFBEAA"
  ];
  const [background, setBackground] = useState("#071415");
  const [show, setShow] = useState(false);

  const handleColorPick = (color) => {
    setBackground(color);
    setShow(false);
  };

  return (
    <div className="background-container" style={{ background: background }}>
      <div className="App">
        {show && (
          <div className="container">
            {colors.map((color, index) => (
              <div
                key={index}
                className="card"
                onClick={() => handleColorPick(color)}
              >
                <div
                  style={{
                    background: color,
                    filter: "brightness(85%)",
                    boxShadow: color === background ? "0 0 5px #000" : ""
                  }}
                  className="box"
                />
              </div>
            ))}
          </div>
        )}
        <div className="button-container">
          <button className="button" onClick={() => setShow(!show)}>
            {show === true ? "Choose a color" : " Pick a Colour"}
          </button>
        </div>
      </div>
    </div>
  );
}
