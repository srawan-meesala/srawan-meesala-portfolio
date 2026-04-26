import React from 'react'

const Links = () => {
  return (
    <>
      <div className="min-h-screen h-auto w-full bg-[#AAAAAA] bg-card-5-pattern bg-cover bg-fixed flex flex-col relative">
        <div className="text-[60px] md:text-[100px] p-8 md:p-[50px] text-c-dark-text absolute left-0 w-full z-10">
          Links.
        </div>
        <div className="w-full flex-grow flex items-center justify-center p-8 md:px-[100px] lg:px-[200px] z-0 pt-32">
          <div className="text-[20px] md:text-[30px] text-c-primary flex flex-col gap-6 w-full max-w-4xl">
            <a href="mailto:srawanviz@gmail.com" className="no-underline text-c-primary group flex flex-col md:flex-row md:items-baseline md:gap-4 transition-all" aria-label="Email">
              <span className="min-w-[120px] md:min-w-[150px]">E-Mail</span>
              <span className="font-bebas text-[28px] md:text-[40px] text-c-black group-hover:text-[#395B64] transition-colors leading-none">srawanviz@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/srawan-m-35b3b3242/" target="_blank" rel="noopener noreferrer" className="no-underline text-c-primary group flex flex-col md:flex-row md:items-baseline md:gap-4 transition-all" aria-label="LinkedIn profile">
              <span className="min-w-[120px] md:min-w-[150px]">LinkedIn</span>
              <span className="font-bebas text-[28px] md:text-[40px] text-c-black group-hover:text-[#395B64] transition-colors leading-none">srawan meesala</span>
            </a>
            <a href="https://github.com/srawan-meesala" target="_blank" rel="noopener noreferrer" className="no-underline text-c-primary group flex flex-col md:flex-row md:items-baseline md:gap-4 transition-all" aria-label="GitHub profile">
              <span className="min-w-[120px] md:min-w-[150px]">GitHub</span>
              <span className="font-bebas text-[28px] md:text-[40px] text-c-black group-hover:text-[#395B64] transition-colors leading-none">@srawan-meesala</span>
            </a>
            <a href="https://www.instagram.com/srawan_meesala/" target="_blank" rel="noopener noreferrer" className="no-underline text-c-primary group flex flex-col md:flex-row md:items-baseline md:gap-4 transition-all" aria-label="Instagram profile">
              <span className="min-w-[120px] md:min-w-[150px]">Instagram</span>
              <span className="font-bebas text-[28px] md:text-[40px] text-c-black group-hover:text-[#395B64] transition-colors leading-none">@srawan_meesala</span>
            </a>
            <a href="https://leetcode.com/u/srawan_meesala/" target="_blank" rel="noopener noreferrer" className="no-underline text-c-primary group flex flex-col md:flex-row md:items-baseline md:gap-4 transition-all" aria-label="LeetCode profile">
              <span className="min-w-[120px] md:min-w-[150px]">LeetCode</span>
              <span className="font-bebas text-[28px] md:text-[40px] text-c-black group-hover:text-[#395B64] transition-colors leading-none">@srawan_meesala</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Links