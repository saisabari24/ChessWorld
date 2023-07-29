import Image from "next/image";
import React from "react";

const imageStyle = {
  // borderRadius: "50%",
  border: "1px solid #fff",
  height: "80vh",
  width: "80vw",
};
export const VideoPlayer = () => {
  return (
    <div>
      VideoPlayer
      <Image
        src="/VideoPlayer.png"
        width={350}
        height={200}
        alt="VideoPlayer"
        style={imageStyle}
      />
    </div>
  );
};
