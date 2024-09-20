import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQs = () => {
	return (

		<div className="bg-gradient-to-t from-black to-slate-800 py-20 sm:py-24">
		<div className="container ">
			<h2 className="max-w-xl mx-auto text-center text-5xl sm:text-6xl  tracking-tighter">Frequently asked questions</h2>
			<div className="max-w-2xl mx-auto mt-12 text-center">
				<div className="py-7">
				<div className="flex items-center border-b border-white/70">
					<div className="text-xl ">What payment methods do you accept?</div>
					<span className="text-end flex-1 text-2xl font-light">+</span>
				</div>
					<div className="hidden">qpoerjb qpeob qpoerbj qpoerbjqeopjirb qopejrbop qejrbo qpeorbj qoe</div>
				</div>
				<div className="py-7">
				<div className="flex items-center border-b border-white/70">
					<div className="text-xl ">What payment methods do you accept?</div>
					<span className="text-end flex-1 text-2xl font-light">+</span>
				</div>
					<div className="hidden">qpoerjb qpeob qpoerbj qpoerbjqeopjirb qopejrbop qejrbo qpeorbj qoe</div>
				</div>
				<div className="py-7">
				<div className="flex items-center border-b border-white/70">
					<div className="text-xl ">What payment methods do you accept?</div>
					<span className="text-end flex-1 text-2xl font-light">+</span>
				</div>
					<div className="hidden">qpoerjb qpeob qpoerbj qpoerbjqeopjirb qopejrbop qejrbo qpeorbj qoe</div>
				</div>
				<div className="py-7">
				<div className="flex items-center border-b border-white/70">
					<div className="text-xl ">What payment methods do you accept?</div>
					<span className="text-end flex-1 text-2xl font-light">+</span>
				</div>
					<div className="hidden">qpoerjb qpeob qpoerbj qpoerbjqeopjirb qopejrbop qejrbo qpeorbj qoe</div>
				</div>


				<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

			</div>
		</div>
		</div>
	)
}
