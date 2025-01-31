import React from "react";
import Nav from "./components/Nav";
import Waves from "./animation/Waves";
import BlurText from "./animation/BlurText";
import PixelCard from "./animation/PixelCard";
import TextPressure from "./animation/TextPressure";

function App() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div>
      <div className="w-full h-screen text-white text-bold relative font-[Montserrat]">
        <Waves
          className="absolute -z-10"
          lineColor="#ffffff"
          backgroundColor="rgba(55,65,81,1)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />

        <BlurText
          text="For every student,every classroom."
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-[10vh] text-white absolute top-[50%] left-[50%] font-semibold -translate-x-1/2 -translate-y-1/2 leading-none mb-8"
        />

        <Nav />
        <div className="bg-amber-400 px-2 absolute w-[40%] top-[70%] left-[45%] font-semibold -translate-x-1/2 -translate-y-1/2">
          <h1>
            We're a nonprofit with the mission to provide a free, world-class
            education for anyone, anywhere.
          </h1>
        </div>
      </div>
      <div className="h-screen container mx-auto relative overflow-x-hidden">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full bg-[rgba(55,65,81,1)]">
          <div className="flex flex-col items-center justify-center px-56 ">
            <div className="leading-none" style={{ position: "relative", height: "300px" }}>
              <TextPressure
                text="Upskill By"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={310}
              />
            </div>
            <div className="flex gap-15 text-white rounded-4xl">
              <PixelCard variant="pink">
                <div className="absolute">
                  <h1 className="text-7xl">React</h1>
                </div>
              </PixelCard>
              <PixelCard variant="pink">
                <div className="absolute">
                  <h1 className="text-7xl">CSS</h1>
                </div>
              </PixelCard>
              <PixelCard variant="pink">
                <div className="absolute">
                  <h1 className="text-7xl">Tailwind</h1>
                </div>
              </PixelCard>
              
            </div>
          </div>
        </div>
      </div>
      <div className="h-56 bg-[rgba(55,65,81,1)]">

      </div>
    </div>
  );
}

export default App;
