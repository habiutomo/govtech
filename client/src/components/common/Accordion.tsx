import { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
  defaultOpen?: boolean;
}

const Accordion = ({ title, content, defaultOpen = false }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggleAccordion = () => setIsOpen(!isOpen);
  
  // Generate a unique ID for the accordion content
  const id = `accordion-${title.replace(/\s+/g, '-').toLowerCase()}`;
  
  return (
    <div className="border border-neutral-light rounded-md">
      <button 
        className="flex justify-between items-center w-full p-4 text-left font-medium" 
        aria-expanded={isOpen} 
        aria-controls={id}
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <i className={`fas fa-${isOpen ? 'minus' : 'plus'} text-neutral-medium`}></i>
      </button>
      <div 
        id={id} 
        className={`${isOpen ? 'block' : 'hidden'} p-4 pt-0 border-t border-neutral-light`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
