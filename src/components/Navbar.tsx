import {Button} from "@/components/ui/button"
import {Logo} from "@/components/ui/logo"
import {HamburgerMenuIcon} from "@radix-ui/react-icons"

export const Navbar = () => {
	return (
		<div className="px-7 flex items-center justify-between py-5">
			<Logo />
		<div className="md:hidden w-fit h-fit  text-slate-200 rounded p-2">
			<HamburgerMenuIcon className="scale-150" />
		</div>
		<nav className="hidden md:flex gap-4">
			<a className="text-opacity-60 text-white hover:text-opacity-100 transition" href="#">About</a>
			<a  className="text-opacity-60 text-white hover:text-opacity-100 transition" href="#">Features</a>
			<a  className="text-opacity-60 text-white hover:text-opacity-100 transition" href="#">Customers</a>
			<a className="text-opacity-60 text-white hover:text-opacity-100 transition"  href="#">Updates</a>
			<a className="text-opacity-60 text-white hover:text-opacity-100 transition"  href="#">Help</a>
		</nav>
		</div>
	)
}
