const Ticket = (props) => {
    return(
        <div class="singleTicket sm:mt-4">
            <div class="sm:w-full lg:w-full w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h1 class="text-white text-3xl title-font font-medium mb-4">{props.title ? props.title : 'Concert Ticket'}</h1>
                <div class="h-1 overflow-hidden pb-8">
                    <div class="h-1 w-20 bg-goldenrod"></div>
                </div>
                <div class="flex mb-4">
                    <a class="flex-grow gold py-2 text-lg">Description</a>
                </div>
                <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
                <div class="flex">
                    <span class="title-font font-medium text-2xl text-white">$58.00</span>
                    <button class="flex ml-auto text-white bg-goldenrod border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
                </div>
            </div>
        </div>
    )    
}

export default Ticket;