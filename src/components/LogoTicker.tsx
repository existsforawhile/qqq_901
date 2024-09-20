import Image from "next/image"
export const LogoTicker = () => {
	return (
		<div className=" text-white py-20 sm:py-24">
			<div className="container">
				<h2 className="text-xl text-center text-white/70">Trusted by the world's most innovative teams.</h2>
				<div className="overflow-hidden flex gap-16 mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full before:w-20 after:h-full after:w-20 relative after:right-0 before:left-0 before:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
					<Image className="h-8" width="300" height="100" src="https://img.logoipsum.com/211.svg" alt="logo"/>
					<Image className="h-8" width="300" height="100" src="https://img.logoipsum.com/212.svg" alt="logo"/>
					<Image className="h-8" width="300" height="100" src="https://img.logoipsum.com/213.svg" alt="logo"/>
					<Image className="h-8" width="300" height="100" src="https://img.logoipsum.com/214.svg" alt="logo"/>
					<Image className="h-8" width="300" height="100" src="https://img.logoipsum.com/215.svg" alt="logo"/>
					<Image className="h-8" width="300" height="100" src="https://img.logoipsum.com/216.svg" alt="logo"/>
			</div>
			</div>
		</div>
	)
}
