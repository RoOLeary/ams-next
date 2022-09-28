


import Link from 'next/link'

const Schedule = () => {

    let events = [
        {
            "id": 1,
            "category": "Guitart",
            "date": "04-10-22",
            "time": "21:00",
            "title":  "Cologne Guitar Quartet",
            "excerpt": "Bach, Vivaldi, traditional music",
            "detail": "",
            "location": "Igreja do Carmo, Faro",
            "url": 'colonge-guitar-quartet'
        },
        {
            "id": 2,
            "category": "Piano",
            "date": "05-10-22",
            "time": "21:00",
            "title":  "Chopin Piano Concerto nr 1",
            "excerpt": "Bohuslav Martinu - Three Madrigals for violin and viola, Handel/Halvorsen - Passacaglia",
            "detail": "",
            "location": "Teatro Lethes, Faro",
            "url": 'chopin-piano-concerto-1'
        },
        {
            "id": 3,
            "category": "Quartet",
            "date": "06-10-22",
            "time": "21:00",
            "title":  "SEFARAD PROJECT FILIPE RAPOSO and CORO ECCE",
            "excerpt": "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.",
            "detail": "",
            "location": "Colégio do Alto",
            "url": 'quartet-exposition'
        },
        {
            "id": 4,
            "category": "Vocalist",
            "date": "07-10-22",
            "time": "21:00",
            "title":  "Variacoes Goldberg - J.S. Bach",
            "excerpt": "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.",
            "detail": "",
            "location": "Igreja de São Pedro, Faro",
            "url": 'variacoes-goldberg'
        },
        {
            "id": 5,
            "category": "Piano",
            "date": "13-10-22",
            "time": "21:00",
            "title":  "Vasco Dantes Piano Recital",
            "excerpt": "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.",
            "detail": "Vasco Dantes Piano Recital",
            "location": "Club Farense, Faro",
            "url": 'vasco-dantes'
        },
        {
            "id": 6,
            "category": "Piano",
            "date": "14-10-22",
            "time": "21:00",
            "title":  "Proposta Recital & Conversa – Francisco Rita",
            "excerpt": "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.",
            "detail": "",
            "location": "Club Farense, Faro",
            "url": 'proposta-recital-conversa-francisco-rita'
        },
        {
            "id": 7,
            "category": "Drums",
            "date": "21-10-22",
            "time": "21:00",
            "title":  "Percussion",
            "excerpt": "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.",
            "detail": "",
            "location": "Club Farense, Faro",
            "url": 'club-farense'
        }

    ]


    return(
        <section className="text-white-600 body-font overflow-hidden">
            <div className="container px-5 pb-24 mx-auto">
                <div className="mx-8 pb-12"></div>
                {/* <div className="h-1 overflow-hidden mb-8"><div className="h-1 w-20 bg-goldenrod"></div></div> */}
                <div className="-my-8 divide-y-2 divide-gray-100">

                {events.length && events.map(({id, category, date, title, excerpt, detail, location, url}) => {
                    console.log(title)
                    return(
                        <div className="py-8 flex flex-wrap md:flex-nowrap" key={id}>
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-white-700">{location}</span>
                            <span className="mt-1 text-white-500 text-sm">{date}</span>
                            </div>
                            <div className="md:flex-grow">

                            <Link href={{ pathname: `schedule/event/${url}`, query: { title: title, detail: detail } }}>
                                <a><h2 className="text-2xl font-medium gold title-font mb-2">{title}</h2></a>
                            </Link>


                            {/* s<Link href={`schedule/event/${url}`}><a><h2 className="text-2xl font-medium gold title-font mb-2">{title}</h2></a></Link> */}
                            <p className="leading-relaxed">{excerpt}</p>
                            <Link href={{ pathname: `schedule/event/${url}`, query: { title: title, detail: detail } }}>
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
                })}
                
                </div>
            </div>
        </section>
    )
}

export default Schedule;