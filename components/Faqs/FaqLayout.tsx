import React from 'react';
import { motion } from 'framer-motion';
import { IFaqs } from '../../interfaces/IFaq'

interface IFaqLayout {
    title?: string,
    children?: any,
    index?: number,
    activeIndex?: number, 
    setActiveIndex?: Function
}


const FaqLayout = ({ title, children, index, activeIndex, setActiveIndex }: IFaqLayout) => {

    const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);

    return (
        <>
            <div onClick={() => handleSetIndex(index)} className={`flex w-full justify-between p-5 mt-2 ${activeIndex == index ? "bg-goldenrod" : "bg-gray-500"} hover:cursor-pointer`}>
                <div className='flex'>
                    <h3 className='text-white'>{title}</h3>
                </div>
                <div className="flex items-center justify-center">
                    {
                    (activeIndex === index) 
                    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  
                    }
                </div>
            </div>
            
            {(activeIndex === index) && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1] }}
                    transition={{ times: [0, 1], duration: 0.5 }}
                    className="flex w-full bg-lightgray-200 p-4 mb-6"
                >
                    {children}
                </motion.div>
            )}
        </>
    );
};

export default FaqLayout;