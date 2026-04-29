import { useEffect, useRef } from "react";

export default function ProjectPreviewVideo({ poster, src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.play().catch(() => {});
  }, [src]);

  const playWhenReady = event => {
    event.currentTarget.play().catch(() => {});
  };

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onCanPlay={playWhenReady}
    />
  );
}
