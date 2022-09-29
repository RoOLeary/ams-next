import Link from 'next/link';


interface ISched {
    id: number, 
    date?: string,
    time?: string,
    title?: string,
    excerpt?: string,
    detail?: string,
    price?: any,
    location?: string, 
    slug?: string
}

const ScheduleSlot = ({ id, title, date, time, price, excerpt, detail, location, slug }:ISched ) => {
    
    return(
       
        <div className="py-8 flex flex-wrap md:flex-nowrap" key={id}>
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white-700">{location}</span>
                <span className="mt-1 text-white-500 text-sm">{date}</span>
                <span className="mt-1 text-white-500 text-sm">{time}</span>
            </div>
            <div className="md:flex-grow">

            <Link href={`schedule/event/${slug}`}>
                <a><h2 className="text-2xl font-medium gold title-font mb-2">{title}</h2></a>
            </Link>

            <p className="leading-relaxed">{excerpt}</p>
            <Link href={`schedule/event/${slug}`}>
                <a className="gold inline-flex items-center mt-4">More Info
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </Link>
            </div>
        </div>

    )


}

export default ScheduleSlot;