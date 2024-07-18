type Props = {};
function Slider({}: Props) {
  return (
    <div
      className="slider"
      style={{ "--quantity": "10" } as React.CSSProperties}
    >
      <div
        className="item"
        style={{ "--position": "1" } as React.CSSProperties}
      >
        <a href="https://github.com/Oscar-r-s" target="_blank">
          <img src="/images/Slider/pic1.jpg" alt="" />
        </a>
      </div>
      <div
        className="item"
        style={{ "--position": "2" } as React.CSSProperties}
      >
        <a href="https://github.com/Oscar-r-s" target="_blank">
          <img src="/images/Slider/pic2.jpg" alt="" />
        </a>
      </div>
      <div
        className="item"
        style={{ "--position": "3" } as React.CSSProperties}
      >
        <a href="https://github.com/Oscar-r-s" target="_blank">
          <img src="/images/Slider/pic3.jpg" alt="" />
        </a>
      </div>
      <div
        className="item"
        style={{ "--position": "4" } as React.CSSProperties}
      >
        <a href="https://github.com/Oscar-r-s" target="_blank">
          <img src="/images/Slider/pic4.jpg" alt="" />
        </a>
      </div>
      <div
        className="item"
        style={{ "--position": "5" } as React.CSSProperties}
      >
        <a href="https://github.com/Oscar-r-s" target="_blank">
          <img src="/images/Slider/pic5.jpg" alt="" />
        </a>
      </div>
      <div
        className="item"
        style={{ "--position": "6" } as React.CSSProperties}
      >
        <a href="https://github.com/Oscar-r-s" target="_blank">
          <img src="/images/Slider/pic6.jpg" alt="" />
        </a>
      </div>
      <div
        className="item"
        style={{ "--position": "7" } as React.CSSProperties}
      >
        <a href="https://github.com/Oscar-r-s" target="_blank">
          <img src="/images/Slider/pic7.jpg" alt="" />
        </a>
      </div>
      <div
        className="item"
        style={{ "--position": "8" } as React.CSSProperties}
      >
        <a href="https://github.com/Oscar-r-s" target="_blank">
          <img src="/images/Slider/pic8.jpg" alt="" />
        </a>
      </div>
      <div
        className="item"
        style={{ "--position": "9" } as React.CSSProperties}
      >
        <a href="https://github.com/Oscar-r-s" target="_blank">
          <img src="/images/Slider/pic9.jpg" alt="" />
        </a>
      </div>
      <div
        className="item"
        style={{ "--position": "10" } as React.CSSProperties}
      >
        <a href="https://github.com/Oscar-r-s" target="_blank">
          <img src="/images/Slider/pic10.jpg" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Slider;
