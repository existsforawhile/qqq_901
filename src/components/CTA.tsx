import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"

export const CTA = () => {
	return (
		<div className="text-center mx-auto flex flex-col items-center">
			<h3 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">Get instant access</h3>
			<p className="mt-8 mx-auto text-center text-xl tracking-tighter max-w-lg">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
			<div className="mt-8 flex gap-3 items-center justify-center max-w-xl">
				<Input className="w-fit" placeholder="your@email.com" />
				<button className="bg-white text-black py-2 px-4 rounded-md">Get access</button>
			</div>
		</div>
	)
}
