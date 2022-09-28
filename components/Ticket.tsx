
import { ITickets } from '../interfaces/ITickets'

const Ticket = ({ title, description, price }: ITickets) => {
    return(
        <div className="singleTicket sm:mt-4">
            <div className="sm:w-full lg:w-full w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h1 className="text-white text-3xl title-font font-medium mb-4">{title ? title : 'Ticket Information'}</h1>
                <div className="h-1 overflow-hidden pb-8">
                    <div className="h-1 w-20 bg-goldenrod"></div>
                </div>
                <div className="flex mb-4">
                    <a className="flex-grow gold py-2 text-lg">Event Description</a>
                </div>
                <p className="leading-relaxed mb-4">{description ? description : 'Event Description to follow.'}</p>
                <div className="flex">
                    <span className="title-font font-medium text-2xl text-white">€{price ? price : 10}</span>
                    <button className="flex ml-auto text-white bg-goldenrod border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded">Buy Now</button>
                </div>
            </div>
        </div>
    )    
}

export default Ticket;