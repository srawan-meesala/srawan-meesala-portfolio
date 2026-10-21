import React from 'react'

const Links = () => {
  return (
    <footer id="contact" className="bg-footer text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_auto] md:items-end md:px-8 md:py-20">
        <div>
          <p className="mb-3 font-mono text-xs uppercase text-[#e9b09a]">Contact</p>
          <h2 className="font-display text-4xl font-semibold md:text-6xl">Let&apos;s talk systems.</h2>
          <a href="mailto:srawanviz@gmail.com" className="mt-5 inline-block break-all text-base text-white/75 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white md:text-lg">
            srawanviz@gmail.com
          </a>
        </div>
        <nav aria-label="Social links" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
          <a href="https://www.linkedin.com/in/srawan-m-35b3b3242/" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-4 hover:text-white">LinkedIn</a>
          <a href="https://github.com/srawan-meesala" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-4 hover:text-white">GitHub</a>
          <a href="https://leetcode.com/u/srawan_meesala/" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-4 hover:text-white">LeetCode</a>
          <a href="https://www.instagram.com/srawan_meesala/" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-4 hover:text-white">Instagram</a>
        </nav>
        <p className="border-t border-white/15 pt-5 text-xs text-white/50 md:col-span-2">Srawan Meesala · Backend Software Engineer</p>
      </div>
    </footer>
  )
}

export default Links