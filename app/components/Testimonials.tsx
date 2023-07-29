import Image from "next/image";
import React from "react";

const imageStyle = {
  // borderRadius: "50%",
  border: "1px solid #fff",
  height: "80vh",
  width: "80vw",
};
export const Testimonials = () => {
  return (
    <div>
      Testimonials
      <Image
        src="/Testimonials.png"
        width={350}
        height={200}
        alt="Testimonials"
        style={imageStyle}
      />
    </div>
  );
};
