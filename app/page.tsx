import React from "react";
import { ChessCourses } from "./components/ChessCourses";
import { VideoPlayer } from "./components/VideoPlayer";
import { ChessSubcription } from "./components/ChessSubcription";
import { Testimonials } from "./components/Testimonials";
import { InfoFooter } from "./components/InfoFooter";

const Home = () => {
  return (
    <div className="h-full bg-gradient-to-r from-sky-500 to-indigo-500">
      <section className="flex-start paddings mb-16 flex-col">
        <div id="ChessCourses">
          {" "}
          <ChessCourses />
        </div>
        <div id="VideoPlayer">
          {" "}
          <VideoPlayer />
        </div>
        <div id="ChessSubcription">
          <ChessSubcription />
        </div>
        <div id="Testimonials">
          {" "}
          <Testimonials />
        </div>
        <div id="InfoFooter">
          {" "}
          <InfoFooter />
        </div>
      </section>
    </div>
  );
};

export default Home;
