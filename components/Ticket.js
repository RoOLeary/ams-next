const Ticket = (props) => {
    return(
        <section className="text-white body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h1 className="text-white text-3xl title-font font-medium mb-4">{props.title ? props.title : 'Piano Concerto'}</h1>
                <div className="flex mb-4">
                    <a className="flex-grow gold border-b-2 py-2 text-lg px-1">Description</a>
                    <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
                </div>
                <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
                
                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                    <span className="text-white">Quantity</span>
                    <span className="ml-auto text-white">4</span>
                </div>
                <div className="flex">
                    <span className="title-font font-medium text-2xl text-white">$58.00</span>
                    <button className="flex ml-auto text-white bg-goldenrod border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
                </div>
                </div>
                <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://source.unsplash.com/400x400/?piano" />
            </div>
            </div>
        </section>
    )    
}

export default Ticket;