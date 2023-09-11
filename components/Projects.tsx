import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Projects = () => {
  return (
    <div className="p-[2rem] border border-cream shadow rounded-[20px] md:w-[25.375rem] w-full">
      <p className="text-[2rem] font-bold text-center mb-[2rem]">
        Always evolving
      </p>
      <Accordion
        type="single"
        collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Improving safety and hygiene</AccordionTrigger>
          <AccordionContent className="text-gray">
            Every medical facility in our partnership program just underwent our
            third unannounced hygiene inspection this year. Thorough tests are
            also conducted weekly to ensure the best treatment possible can be
            provided to our clients
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Europe-wide insurance coverage</AccordionTrigger>
          <AccordionContent className="text-gray">
            We&apos;ve expanded our services to all members of the EU, and
            modified our coverage policy so you&apos;re always safe. No matter
            where you might be when you need them, our services are always
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Optimizing our software for the future
          </AccordionTrigger>
          <AccordionContent className="text-gray">
            Our engineers are always working on our systems. We ensure 24/7
            uptime, complete data privacy and with the new improvements, the
            best performance we have ever gotten.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default Projects;
