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
      <div>
      <footer class="bg-gray-900 text-white py-10 shadow-lg">
        <div class="container mx-auto text-center">
            <div class="mb-5 text-lg">
                <a href="index.html" class="mx-5 hover:text-orange-400 hover:translate-y-1 transition-all duration-300">Home</a>
                <a href="about.html" class="mx-5 hover:text-orange-400 hover:translate-y-1 transition-all duration-300">About</a>
                <a href="courses.html" class="mx-5 hover:text-orange-400 hover:translate-y-1 transition-all duration-300">Courses</a>
                <a href="contact.html" class="mx-5 hover:text-orange-400 hover:translate-y-1 transition-all duration-300">Contact</a>
            </div>
            <div class="mb-5">
                <a href="https://www.facebook.com" target="_blank" class="mx-4 inline-block">
                    <img src="https://th.bing.com/th/id/OIP.WE109lmuCjsw8asJparTPgHaHa?rs=1&pid=ImgDetMain " alt="Facebook" class="w-7 transition-transform duration-300 transform hover:scale-110 hover:brightness-110"/>
                </a>
                <a href="https://www.twitter.com" target="_blank" class="mx-4 inline-block">
                    <img src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" alt="Twitter" class="w-7 transition-transform duration-300 transform hover:scale-110 hover:brightness-110"/>
                </a>
                <a href="https://www.instagram.com" target="_blank" class="mx-4 inline-block">
                    <img src="https://th.bing.com/th/id/OIP.n9osEmzXnDugdLkt9W9awwHaHa?rs=1&pid=ImgDetMain" alt="Instagram" class="w-8 transition-transform duration-300 transform hover:scale-110 hover:brightness-110"/>
                </a>
            </div>
            <p class="text-sm text-gray-400 mt-5">&copy; 2025 Eduverse. All rights reserved.</p>
        </div>
    </footer>

      </div>
    </div>
  );
}

export default App;
