import React from "react";
import "./index.css";

export function App() {
  return (
    <div className="banner">
      <div
        className="slider"
        style={{ "--quantity": "10" } as React.CSSProperties}
      >
        <div
          className="item"
          style={{ "--position": "1" } as React.CSSProperties}
        >
          //The image is a link to my github profile
          <a href="https://github.com/Oscar-r-s">
            <img src="/images/pic1.jpg" alt="" />
          </a>
        </div>
        <div
          className="item"
          style={{ "--position": "2" } as React.CSSProperties}
        >
          <img src="/images/pic2.jpg" alt="" />
        </div>
        <div
          className="item"
          style={{ "--position": "3" } as React.CSSProperties}
        >
          <img src="/images/pic3.jpg" alt="" />
        </div>
        <div
          className="item"
          style={{ "--position": "4" } as React.CSSProperties}
        >
          <img src="/images/pic4.jpg" alt="" />
        </div>
        <div
          className="item"
          style={{ "--position": "5" } as React.CSSProperties}
        >
          <img src="/images/pic5.jpg" alt="" />
        </div>
        <div
          className="item"
          style={{ "--position": "6" } as React.CSSProperties}
        >
          <img src="/images/pic6.jpg" alt="" />
        </div>
        <div
          className="item"
          style={{ "--position": "7" } as React.CSSProperties}
        >
          <img src="/images/pic7.jpg" alt="" />
        </div>
        <div
          className="item"
          style={{ "--position": "8" } as React.CSSProperties}
        >
          <img src="/images/pic8.jpg" alt="" />
        </div>
        <div
          className="item"
          style={{ "--position": "9" } as React.CSSProperties}
        >
          <img src="/images/pic9.jpg" alt="" />
        </div>
        <div
          className="item"
          style={{ "--position": "10" } as React.CSSProperties}
        >
          <img src="/images/pic10.jpg" alt="" />
        </div>
      </div>
      <div className="content">
        <h1 data-content="PORTFOLIO TESTING" className="oswald-font txt">
          <b>OSCAR RODRIGUEZ</b>
        </h1>
        <div className="author txt">
          <h2>WEB DESIGNER (Coruña)</h2>
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
}

export default App;
