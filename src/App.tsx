import BackgroundVideo from "./components/BackgroundVideo";
import Slider from "./components/Slider";
import Content from "./components/Content";
import "./index.css";

export function App() {
  return (
    <div className="banner">
      <BackgroundVideo></BackgroundVideo>
      <Slider></Slider>
      <Content></Content>
    </div>
  );
}

export default App;
