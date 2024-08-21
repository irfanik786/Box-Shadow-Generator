import { useState } from "react";
import "./App.css";

function App() {
  const [Hori, setHori] = useState(10);
  const [Veri, setVeri] = useState(10);
  const [Blur, setBlur] = useState(10);
  const [Color, setColor] = useState("black");
  const [bgColor, setBgColor] = useState("blueviolet");
  const [checkOn, setCheckOn] = useState(false);

  return (
    <div className="App">
      <div className="controls">
        <label>Horizontal length</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={Hori}
          onChange={(e) => setHori(e.target.value)}
        />
        <label>Vertical length</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={Veri}
          onChange={(e) => setVeri(e.target.value)}
        />
        <label>Blur</label>
        <input
          type="range"
          min="0"
          max="200"
          value={Blur}
          onChange={(e) => setBlur(e.target.value)}
        />
        <label>Color</label>
        <input
          type="color"
          value={Color}
          onChange={(e) => setColor(e.target.value)}
        />
        <label>backgroundColor</label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
        <div className="switch">
          <label>
            Outline
            <input
              type="checkbox"
              checked={checkOn}
              onChange={(e) => setCheckOn(!checkOn)}
            />
            <span className="lever"></span>
            Inset
          </label>
        </div>
      </div>
      <div className="output">
        <div
          className="box"
          style={{
            boxShadow: `${
              checkOn ? "inset" : ""
            } ${Hori}px ${Veri}px ${Blur}px ${Color}`,
            backgroundColor: `${bgColor}`,
          }}
        >
          <p>
            boxShadow: {Hori}px {Veri}px {Blur}px {Color}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;


// used materializecss.com cdn