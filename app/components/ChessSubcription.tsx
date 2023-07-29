import Image from "next/image";
import React from "react";

const imageStyle = {
  // borderRadius: "50%",
  border: "1px solid #fff",
  height: "80vh",
  width: "80vw",
};
export const ChessSubcription = () => {
  return (
    <div>
      ChessSubscription
      <Image
        src="/ChessSubscription.png"
        width={350}
        height={200}
        alt="ChessSubscription"
        style={imageStyle}
      />
    </div>
  );
};
