import videoBg from "/public/images/background.mp4";

type Props = {};

function BackgroundVideo({}: Props) {
  return (
    <div className="background-video-container">
      <video
        src={videoBg}
        className="background-video"
        autoPlay
        playsInline
        loop
        muted
      ></video>
    </div>
  );
}

export default BackgroundVideo;
