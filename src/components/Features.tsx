import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'

export const Features = () => {
	return (
		<div className="container py-20 sm:py-24">
			<h2 className="tracking-tighter text-center font-bold text-5xl sm:text-6xl">Everything you need</h2>
			<div className="max-w-xl mx-auto">
			<p className="text-center mt-5 text-xl text-white/70">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
			</div>
			<div className="mt-16 flex flex-col sm:flex-row gap-4">
								<div className="flex-1 border border-white/30 px-5 py-10 text-center rounded-lg">
					<div className="inline-flex mx-auto h-14 text-black rounded-lg w-14 bg-white justify-center items-center">
						<FaceIcon />
					</div>
					<h3 className="mt-6 font-bold">Integration Ecosystem</h3>
					<p className="mt-2 text-white/70">Enhance your productivity by connecting with your tools, keeping your essentials in one place.</p>
				</div>
<div className="flex-1 border border-white/30 px-5 py-10 text-center rounded-lg">
					<div className="inline-flex mx-auto h-14 text-black rounded-lg w-14 bg-white justify-center items-center">
						<FaceIcon />
					</div>
					<h3 className="mt-6 font-bold">Integration Ecosystem</h3>
					<p className="mt-2 text-white/70">Enhance your productivity by connecting with your tools, keeping your essentials in one place.</p>
				</div>
<div className="flex-1 border border-white/30 px-5 py-10 text-center rounded-lg">
					<div className="inline-flex mx-auto h-14 text-black rounded-lg w-14 bg-white justify-center items-center">
						<FaceIcon />
					</div>
					<h3 className="mt-6 font-bold">Integration Ecosystem</h3>
					<p className="mt-2 text-white/70">Enhance your productivity by connecting with your tools, keeping your essentials in one place.</p>
				</div>
			</div>
		</div>
	)
}
