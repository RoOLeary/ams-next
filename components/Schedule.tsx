import ScheduleSlot from './ScheduleSlot';

const Schedule = (props) => {
    
    let events = [
        {
            "id": 1,
            "category": "Guitar",
            "date": "04-10-22",
            "time": "21:00",
            "price": "free",
            "title":  "Cologne Guitar Quartet",
            "excerpt": "Bach, Vivaldi, traditional music",
            "detail": "Bach, Vivaldi, Tradtional Music",
            "location": "Igreja do Carmo, Faro",
            "slug": 'cologne-guitar-quartet'
        },
        {
            "id": 2,
            "category": "Piano",
            "date": "05-10-22",
            "time": "21:00",
            "price": "€10 / €8 - members",
            "title":  "Chopin Piano Concerto no. 1",
            "excerpt": "Bohuslav Martinu - Three Madrigals for violin and viola, Handel/Halvorsen - Passacaglia",
            "detail": "Bohuslav Martinu - Three Madrigals for violin and viola, Handel/Halvorsen - Passacaglia",
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
            "detail": "GProgram - own compositions by Francisco Rita in recital commented and also played by Francisco",
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
                    
                    return(
                        <ScheduleSlot 
                            key={id} 
                            id={id} 
                            date={date} 
                            time={time} 
                            price={price} 
                            title={title}
                            location={location}
                            slug={slug} 
                            detail={detail}
                            excerpt={detail}
                        />
                        )
                    })}
                
                </div>
            </div>
        </section>
    )
}

export default Schedule;