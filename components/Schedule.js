


import Link from 'next/link'

const Schedule = (props) => {
    console.log(props);
    let events = [
        {
            "id": 1,
            "category": "Guitar",
            "date": "04-10-22",
            "time": "21:00",
            "price": "free",
            "title":  "Cologne Guitar Quartet",
            "excerpt": "Bach, Vivaldi, traditional music",
            "detail": "",
            "location": "Igreja do Carmo, Faro",
            "slug": 'cologne-guitar-quartet'
        },
        {
            "id": 2,
            "category": "Piano",
            "date": "05-10-22",
            "time": "21:00",
            "price": "€10 / €8 - members",
            "title":  "Chopin Piano Concerto nr 1",
            "excerpt": "Bohuslav Martinu - Three Madrigals for violin and viola, Handel/Halvorsen - Passacaglia",
            "detail": "",
            "location": "Teatro Lethes, Faro",
            "slug": 'chopin-piano-concerto-1'
        },
        {
            "id": 3,
            "category": "Quartet",
            "date": "06-10-22",
            "time": "19:00",
            "price": "€10 / €8 - members",
            "title":  "SEFARAD PROJECT FILIPE RAPOSO and CORO ECCE",
            "excerpt": "Colégio do Alto",
            "detail": "",
            "location": "Colégio do Alto",
            "slug": 'sefarad-project-filipe-raposo-coro-ecce'
        },
        {
            "id": 4,
            "category": "Vocalist",
            "date": "07-10-22",
            "time": "21:00",
            "price": "€10 / €8 - members",
            "title":  "Variacoes Goldberg - J.S. Bach",
            "excerpt": "",
            "detail": "",
            "location": "Igreja de São Pedro, Faro",
            "slug": 'variacoes-goldberg'
        },
        {
            "id": 5,
            "category": "Piano",
            "date": "13-10-22",
            "time": "21:00",
            "price": "€10 / €8 - members",
            "title":  "Vasco Dantas Piano Recital",
            "excerpt": "",
            "detail": "Vasco Dantas Piano Recital",
            "location": "Club Farense, Faro",
            "slug": 'from-water-to-wine'
        },
        {
            "id": 6,
            "category": "Piano",
            "date": "14-10-22",
            "time": "21:00",
            "price": "€10 / €8 - members",
            "title":  "Piano Recital - Francisco Rita",
            "excerpt": "GProgram - own compositions by Francisco Rita in recital commented and also played by Francisco",
            "detail": "",
            "location": "Club Farense, Faro",
            "slug": 'heroes-of-the-sea'
        },
        {
            "id": 7,
            "category": "Piano",
            "date": "15-10-22",
            "time": "21:00",
            "price": "€8 / €5 - members",
            "title":  "Homage to Isolino Vaz - centenary 1922-2022",
            "excerpt": "",
            "detail": "",
            "location": "Ginásio Clube de Faro",
            "slug": 'homage-to-isolino-vaz-centenary'
        },
        {
            "id": 8,
            "category": "Piano",
            "date": "16-10-22",
            "time": "21:00",
            "price": "€10 / €8 - members",
            "title":  "Vasco Dantas, piano recital - From Water to Wine",
            "excerpt": "",
            "detail": "",
            "location": "Quintinha da Música, Tavira",
            "slug": 'from-water-to-wine'
        },
        {
            "id": 9,
            "category": "Piano",
            "date": "21-10-22",
            "time": "21:00",
            "price": "€10 / €8 - members",
            "title":  "Piano Recital - Heribert Koch",
            "excerpt": "Bach, Beethoven and Brahms",
            "detail": "",
            "location": "Club Farense, Faro",
            "slug": 'heribert-koch'
        }

    ]


    return(
        <section className="text-white-600 body-font overflow-hidden">
            <div className="container px-5 pb-24 mx-auto">
                <div className="mx-8 pb-12"></div>
                {/* <div className="h-1 overflow-hidden mb-8"><div className="h-1 w-20 bg-goldenrod"></div></div> */}
                <div className="-my-8 divide-y-2 divide-gray-100">

                {events.length && events.map(({id, category, date, time, price, title, excerpt, detail, location, slug}) => {
                    console.log(title)
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


                            {/* s<Link href={`schedule/event/${slug}`}><a><h2 className="text-2xl font-medium gold title-font mb-2">{title}</h2></a></Link> */}
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
                })}
                
                </div>
            </div>
        </section>
    )
}

export default Schedule;