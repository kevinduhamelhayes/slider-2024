interface ArrowsProps {
  onClickPrev: () => void;
  onClickNext: () => void;
}

export const Arrows = ({onClickPrev, onClickNext}:ArrowsProps) => {
  return (
  <section className='absolute bottom-[260px] right-14 z-10 flex items-center gap-1'>
    <button onClick={onClickPrev} className=" bg-slate-300 fill-white font-mono w-10 h-10 flex items-center justify-center rounded-tl-lg rounded-bl-lg text-lg transition duration-500 hover:bg-white hover:fill-black translate-y-[30px] blur-[20px] opacity-0 animate-showContent">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth={2} d="M15 19l-7-7 7-7" />
</svg>
    </button>
    <button onClick={onClickNext} className=" bg-slate-300 fill-white font-mono w-10 h-10 flex items-center justify-center rounded-tr-lg rounded-br-lg text-lg transition duration-500 hover:bg-white hover:fill-black translate-y-[30px] blur-[20px] opacity-0 animate-showContent">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>
    </button>
   
  </section>

)
}