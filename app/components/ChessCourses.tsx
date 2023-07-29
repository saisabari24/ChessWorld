import Image from "next/image";
import React from "react";

export const ChessCourses = () => {
  return (
    <div>
      ChessCourses
      <div className="flex-col align-right">
        <section>
          {`" className="absolute inset-y-20 right-80 w-300"`}
          <Image
            src="/ChessCoursesThumbnail.jpg"
            width={350}
            height={200}
            alt="ChessCoursesThumbnail"
          />
        </section>
      </div>
      <button className="text-ramport-one rounded-xl text-lg transition ease-in-out delay-120 bg-yellow-300 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 text-semibold w-32">
        Get Started
      </button>
    </div>
  );
};
