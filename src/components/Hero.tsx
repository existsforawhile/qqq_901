import {Logo} from "@/components/ui/logo"
import {ArrowRightIcon} from "@radix-ui/react-icons"
export const Hero = () => {
	return (
		<div className="relative overflow-clip bg-gradient-to-b from-black to-slate-500 py-[72px] sm:py-24">
				<div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 border border-slate-200/40 bg-[radial-gradient(closest-side,#000_70%,#94a3b8)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
		<div className="relative container flex items-center justify-center gap-8 flex-col">
			<a href="#" className="border py-1 px-2 rounded-lg border-slate-300/30 inline-flex gap-1"><span className="">Version 2.0 is here. </span><span className="inline-flex items-center gap-1"><span>Read More</span><span><ArrowRightIcon /></span></span></a>
			<div className="inline-flex relative">
			<h1 className="text-6xl max-w-sm sm:text-8xl sm:max-w-xl tracking-tighter text-center">Super Cool Cool Slogan</h1>
			<div className="absolute scale-150 left-7 -rotate-6  hidden sm:inline">
				<Logo />
			</div>		
			<div className="right-0 scale-150 top-28 absolute rotate-12  hidden sm:inline">
				<Logo />
			</div>
			</div>
			<p className="text-center text-xl tracking-tighter max-w-md">At the time, my life just seemed too complete, and maybe we have to break everything to make something better out of ourselves.</p>
			<button className="bg-slate-200 text-black px-5 py-3 rounded-md font-medium">Get for free</button>
		</div>
		</div>
	)
}
