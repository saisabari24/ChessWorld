import React from "react";
import { ChessCourses } from "./components/ChessCourses";
import { VideoPlayer } from "./components/VideoPlayer";
import { ChessSubcription } from "./components/ChessSubcription";
import { Testimonials } from "./components/Testimonials";
import { InfoFooter } from "./components/InfoFooter";

const Home = () => {
  return (
    <div>
      <section className="flex-start paddings mb-16 flex-col">
        <ChessCourses />
        <VideoPlayer />
        <ChessSubcription />
        <Testimonials />
        <InfoFooter />
      </section>
    </div>
  );
};

export default Home;
