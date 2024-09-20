import Image from "next/image"
export const Logo = () => {
	return (
		<div className="relative">
		<div className="opacity-60 w-full top-0 bottom-0 absolute bg-gradient-to-r from-slate-200 to-slate-300 blur-md"></div>
<div className="relative h-12 w-12 flex items-center justify-center rounded-md bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300">
			<Image className="h-4 w-auto" alt="logo" width="0" height="0" src={"https://img.logoipsum.com/282.svg"}/>
		</div>
		</div>
	)
}
