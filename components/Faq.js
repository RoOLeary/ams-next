import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Faq = ({ content }) => { 

    const [isHidden, setIsHidden ] = useState(true);

    const faqs = [
        {
            "question": 'Why are we alive?',
            "answer": "to party",
            "isHidden": false
        },
        {
            "question": 'Who shot the Sheriff?',
            "answer": "I did.",
            "isHidden": true
        },
        {
            "question": 'Why did you shot them?',
            "answer": "Because I wanted to.",
            "isHidden": true
        }
    ]

    let faqHeading, faqLeadtext;
    // console.log(content);
    faqHeading = 'FAQs';
    faqLeadtext = 'Leadtext here';

    const selectorAnswerInner = '.js-faqAnswerInner';
    
    const onQuestionClick = (e) => {
        console.log(e.currentTarget.id);
        const active = faqs.filter(f => f.id === e.currentTarget.id);
        setIsHidden(!isHidden);
    };

    useEffect(() => {
        document.querySelectorAll(selectorAnswerInner).forEach(answerInner => {
            answerInner.parentElement.style.setProperty('--height', answerInner.offsetHeight + 'px')
        })
    },[]);

    return(
        <section className="text-white-600 mb-24 body-font">
            <div className="container px-5 py-24 mx-auto">
                {faqs.map((faq, i) => {
                    let inc = ++i; 
                    return(
                        <div key={inc} id="accordion-collapse" data-accordion="collapse">
                            <h2 id={`accordion-collapse-heading-${inc}`}>
                                <button type="button" id={inc} className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" data-accordion-target={`accordion-collapse-heading-${inc}`} aria-expanded={faq.isHidden} aria-controls={`accordion-collapse-heading-${inc}`} onClick={(e) => onQuestionClick(e)}>
                                <span>{faq.question}</span>
                                <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id={`accordion-collapse-body-${inc}`} className={isHidden ? "hidden" : null} aria-labelledby={`accordion-collapse-heading-${inc}`}>
                                <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Faq;