import Image from "next/image";
import React from "react";

const imageStyle = {
  // borderRadius: "50%",
  border: "1px solid #fff",
  height: "40vh",
  width: "40vw",
};
export const InfoFooter = () => {
  return (
    <div>
      InfoFooter
      <Image
        src="/InfoFooter.png"
        width={350}
        height={200}
        alt="InfoFooter"
        style={imageStyle}
      />
    </div>
  );
};
