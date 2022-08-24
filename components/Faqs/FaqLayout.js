import React from 'react';

const FaqLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {

    const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);

    return (
        <>
            <div onClick={() => handleSetIndex(index)} className='flex w-1/2 justify-between p-2 mt-2 bg-gray-400'>
                <div className='flex'>
                    <h3 className='text-white font-bold'>{title}</h3>
                </div>
                <div className="flex items-center justify-center">
                    {
                    (activeIndex === index) 
                    ? '^'
                    : 'v'
                    }
                </div>
            </div>

            {(activeIndex === index) && (
                <div className="flex w-1/2 transition shadow-cyan-500/50 p-4 mb-6">
                    {children}
                </div>
            )}
        </>
    );
};

export default FaqLayout;