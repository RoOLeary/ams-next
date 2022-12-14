import { useState } from 'react';
import FaqLayout from './FaqLayout';
import { IFaqs } from '../../interfaces/IFaq'

const Faq = ({ content }: IFaqs ) => {

    const [activeIndex, setActiveIndex] = useState(1);

    let faqs = [
      {
        "question": "What is the meaning of this?",
        "answer": "Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn."
      },
      {
        "question": "Does anyone know how to get to the bright side?",
        "answer": "Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher."
      },
      {
        "question": "Where will the series be taking place?",
        "answer": "Algarve in Portugal. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn."
      }
  ]

  return (
    <section className="text-white-600 body-font">
      <div className="container px-5 pb-24 mx-auto">
          <div className="accordionContainer">
          <br />
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