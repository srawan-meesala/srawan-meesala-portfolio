import React, { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./components/Projects'));
const Links = lazy(() => import('./components/Links'));

function App() {
  let s1 = "<Software Development />".toUpperCase()
  let s2 = "<Full Stack Development />".toUpperCase()
  let s3 = "<Web3.0 Development />".toUpperCase()
  let s4 = "<Deep Learning, Python/>".toUpperCase()
  return (
    <div className="max-w-[100vw] min-h-screen h-auto flex flex-col font-bebas">

      {/* SECTION 1 */}
      <div className="h-screen w-full bg-black bg-card-1-pattern bg-cover bg-fixed flex flex-col items-center md:items-start justify-center relative overflow-hidden">
        <div className="w-full flex flex-col z-10 px-5 md:px-[100px] lg:px-[150px] mt-[-10vh]">
          <div className="text-[20px] md:text-[50px] text-[#666] animate-typing transition-all ease-in text-center md:text-left">
            Hello, I am
          </div>
          <div className="text-[#ccc] font-medium text-[45px] sm:text-[60px] md:text-[120px] lg:text-[170px] tracking-[2px] md:tracking-[5px] overflow-hidden whitespace-nowrap animate-typing transition-all ease-in text-center md:text-left mt-2">
            SRAWAN MEESALA
          </div>
        </div>
        <div className="w-full text-[#666] flex justify-center md:justify-end md:absolute md:bottom-[10%] md:right-[5%] z-10 px-5 mt-16 md:mt-0">
          <div className="text-[18px] md:text-[30px] text-center md:text-right font-bebas leading-relaxed whitespace-pre">
            {s1}<br /> {s2}<br /> {s3}<br /> {s4}
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="min-h-screen h-auto w-full flex flex-col relative bg-gradient-to-b from-card2-start to-card2-end">
        <div className="text-[60px] md:text-[100px] p-8 md:p-[50px] text-c-dark-text w-full z-10">
          Myself.
        </div>
        <div className="w-full flex-grow flex items-center justify-center p-8 md:px-[100px] lg:px-[200px] z-0 -mt-10 md:-mt-20">
          <div className="text-[20px] md:text-[30px] lg:text-[34px] text-c-primary leading-relaxed">
            Born in <span className="font-bebas text-[28px] md:text-[40px] lg:text-[48px] text-c-black line-clamp-none whitespace-normal">Vizianagaram, Andhra Pradesh, India.</span> 2004 july 7.<br className="hidden md:block" />
            Bachelor of Technology from <span className="font-bebas text-[28px] md:text-[40px] lg:text-[48px] text-c-black">Indian Institute Of Information Technology, Sri City.</span> 2021 - present.<br className="hidden md:block" />
            <div className="mt-6 md:mt-4">
              My mission is to bring <span className="font-bebas text-[28px] md:text-[40px] lg:text-[48px] text-c-black">innovation</span> to life, <span className="font-bebas text-[28px] md:text-[40px] lg:text-[48px] text-c-black">one line of code</span> at a time. <br className="hidden md:block" />
              I'm a firm believer in the endless possibilities that <span className="font-bebas text-[28px] md:text-[40px] lg:text-[48px] text-c-black">technology</span> can unlock, and I'm here to make those possibilities<span className="font-bebas text-[28px] md:text-[40px] lg:text-[48px] text-c-black"> a reality.</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="min-h-screen h-auto w-full flex flex-col relative bg-gradient-to-b from-card3-start to-card3-end">
        <div className="text-[60px] md:text-[100px] p-8 md:p-[50px] text-c-dark-text w-full z-10">
          Skills.
        </div>
        <div className="w-full flex-grow flex flex-col items-center justify-center p-8 md:px-[100px] lg:px-[200px] z-0 -mt-10 md:mt-0">
          <div className="text-[18px] md:text-[28px] text-c-primary w-full max-w-5xl flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col">
              <span className="text-gray-800 uppercase tracking-wide font-inter text-sm md:text-lg mb-1">Programming Languages</span>
              <span className="font-bebas text-[28px] md:text-[40px] text-[#2C3333]">C, C++, Python, Java, Javascript, Solidity</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 uppercase tracking-wide font-inter text-sm md:text-lg mb-1">Web Dev Frameworks</span>
              <span className="font-bebas text-[28px] md:text-[40px] text-[#2C3333]">ReactJS, NodeJS, EmbeddedJS, ExpressJS, Hardhat, EthersJS, Django</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 uppercase tracking-wide font-inter text-sm md:text-lg mb-1">Software</span>
              <span className="font-bebas text-[28px] md:text-[40px] text-[#2C3333]">Problem Solving, Git, OOPs, Operating System, Computer Networks</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 uppercase tracking-wide font-inter text-sm md:text-lg mb-1">Database Management</span>
              <span className="font-bebas text-[28px] md:text-[40px] text-[#2C3333]">MySQL, SQLite3, MongoDB</span>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-20 text-2xl font-inter">Loading...</div>}>
        <Projects />
        <Links />
      </Suspense>
    </div>
  );
}

export default App;