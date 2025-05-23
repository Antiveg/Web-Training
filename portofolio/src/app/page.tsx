"use client"

export default function Home() {

  return (
    <div className="flex flex-col items-start justify-start w-full min-h-screen">
      <img 
      className="fixed left-0 top-0 w-full h-full z-[-1]"
      src="/assets/BG1.jpg" 
      alt="No Background"/>
      <div className="w-1/3 ml-30 mt-20 p-6 rounded-md bg-[rgba(255,255,255,0.6)]">
        <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans pt-2 pb-6 relative z-20 font-bold tracking-tight">
          Hello, <br /> Everyone.
        </h2>
        <p
        className="max-w-xl text-sm sm:text-xs md:text-lg text-neutral-700 dark:text-neutral-400 text-left min-h-48">
          Hi there! I'm <b>Stanic Dylan</b>, and welcome to my space. Here, you'll find a bit about me. I hope you enjoy exploring it in here. Feel free to reach out if you'd like to know more!
        </p>
      </div>
      <div className="w-1/3 ml-30 mt-4 p-2 rounded-md bg-[rgba(255,255,255,0.6)]"/>
    </div>
  )
}