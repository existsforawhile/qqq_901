import Image from "next/image";
import {Button} from "@/components/ui/button"
import {Banner} from "@/components/Banner"
import {Navbar} from "@/components/Navbar"
import {Hero} from "@/components/Hero"
import {LogoTicker} from "@/components/LogoTicker"
import {Features} from "@/components/Features"
import {Showcase} from "@/components/Showcase"
import {FAQs} from "@/components/FAQs"

export default function Home() {
  return (
	  <>
	  	<Banner />
		<Navbar />
		<Hero />
		<LogoTicker />
		<Features />
		<Showcase />
		<FAQs />
		<Button variant="outline">My Chemical Romance</Button>
	  </>
  );
}
