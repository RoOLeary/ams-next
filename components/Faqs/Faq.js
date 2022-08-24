import { useState } from 'react';
import FaqLayout from './FaqLayout';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    let faqs = [
      {
          "question": "What is the meaning of this?",
          "answer": "The kids, they don't got no respect no more!"
      },
      {
        "question": "Does anyone know how to get to the bright side?",
        "answer": "Smoke some more weed."
      }
  ]

  return (
    <section className="text-white-600 body-font">
      <div className="container px-5 pb-24 mx-auto">
            {faqs.map(({ question, answer }, i) => {
              let idx = ++i; 
              return (
                <FaqLayout 
                    title={question}
                    index={idx}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  >
                  {answer}  
                </FaqLayout>
              )
            })}
        </div>
    </section>
  );
};

export default Faq;