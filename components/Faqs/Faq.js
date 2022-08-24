import { useState } from 'react';
import FaqLayout from './FaqLayout';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    let faqs = [
      {
          "question": "What is the meaning of this?",
          "answer": "Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn."
      },
      {
        "question": "Does anyone know how to get to the bright side?",
        "answer": "Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher."
      }
  ]

  return (
    <section className="text-white-600 body-font">
      <div className="container px-5 pb-24 mx-auto">
          <div className="accordionContainer">
              {faqs.map(({ question, answer }, i) => {
                let idx = ++i; 
                return (
                  <FaqLayout 
                      key={i}
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
        </div>
    </section>
  );
};

export default Faq;