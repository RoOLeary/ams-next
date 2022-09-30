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
            "price": "€10",
            "ticketLink": "https://www.bol.pt/Comprar/Bilhetes/113716/1137973/Sectores",
            "title":  "Chopin Piano Concerto no. 1, Congyu Wang",
            "excerpt": "Duos for violin and viola and an arrangement of the Piano Concerto no.1 by Chopin for string quintet.",
            "detail": "Duos for violin and viola and an arrangement of the Piano Concerto no.1 by Chopin for string quintet.",
            "location": "Teatro Lethes, Faro",
            "slug": 'chopin-piano-concerto-1'
        },
        {
            "id": 3,
            "category": "Quartet",
            "date": "06-10-22",
            "time": "19:00",
            "price": "Free, * Reservation required",
            "ticketLink": "https://docs.google.com/forms/d/e/1FAIpQLSfOiW4kAuZEqpV_3BoRFLztFFfhlqBxItnuajZxoCusPcbBAA/viewform?usp=send_form",
            "title":  "SEFARAD PROJECT Filipe Raposo, CORO ECCE and Paulo Lourenço",
            "excerpt": "Sephardi music for choir and piano",
            "detail": "Sephardi music for choir and piano",
            "location": "Colégio do Alto, Faro",
            "slug": 'sefarad-project-filipe-raposo-coro-ecce'
        },
        {
            "id": 4,
            "category": "Vocalist",
            "date": "07-10-22",
            "time": "21:00",
            "price": "free",
            "title":  "Goldberg Variations - J.S. Bach",
            "excerpt": "String trio: Tim Brackman, Floor Le Coultre, Isabel Vaz",
            "detail": "String trio: Tim Brackman, Floor Le Coultre, Isabel Vaz",
            "location": "Igreja de São Pedro, Faro",
            "slug": 'variacoes-goldberg'
        },
        {
            "id": 5,
            "category": "Piano",
            "date": "13-10-22",
            "time": "21:00",
            "price": "€10 / €8 - members",
            "ticketLink": "clubfarense@gmail.com",
            "title":  "Vasco Dantas, piano recital - From Water to Wine",
            "excerpt": "Piano recital by Vasco Dantas. Wine tasting with Carlos Alonso Douro Wines",
            "detail": "Piano recital by Vasco Dantas. Wine tasting with Carlos Alonso Douro Wines",
            "location": "Club Farense, Faro",
            "slug": 'from-water-to-wine'
        },
        {
            "id": 6,
            "category": "Piano",
            "date": "14-10-22",
            "time": "21:00",
            "price": "€8 / €5 - members",
            "ticketLink": "clubfarense@gmail.com",
            "title":  "Piano Recital - Francisco Rita",
            "excerpt": "Program - own compositions by Francisco Rita in recital commented and also played by himself",
            "detail": "Program - own compositions by Francisco Rita in recital commented and also played by himself",
            "location": "Club Farense, Faro",
            "slug": 'heroes-of-the-sea'
        },
        {
            "id": 7,
            "category": "Piano",
            "date": "15-10-22",
            "time": "21:00",
            "price": "€8 / €5 - members",
            "ticketLink": "ginasioclubefaro@gmail.com",
            "title":  "Homage to Isolino Vaz - centenary 1922-2022",
            "excerpt": "Cello and Piano recital by Isabel Vaz & Vasco Dantas",
            "detail": "Cello and Piano recital by Isabel Vaz & Vasco Dantas",
            "location": "Ginásio Clube de Faro",
            "slug": 'homage-to-isolino-vaz-centenary'
        },
        {
            "id": 8,
            "category": "Piano",
            "date": "16-10-22",
            "time": "16:00",
            "price": "€20",
            "ticketLink": "algarvemusicseries@gmail.com",
            "title":  "Vasco Dantas, piano recital - From Water to Wine",
            "excerpt": "Piano recital by Vasco Dantas, including wine reception and canapés",
            "detail": "Piano recital by Vasco Dantas, including wine reception and canapés",
            "location": "Quintinha da Música, Tavira",
            "slug": 'from-water-to-wine'
        },
        {
            "id": 9,
            "category": "Piano",
            "date": "21-10-22",
            "time": "21:00",
            "price": "€10 / €8 - members",
            "ticketLink": "clubfarense@gmail.com",
            "title":  "Piano Recital - Heribert Koch",
            "excerpt": "Music by Bach, Beethoven and Brahms",
            "detail": "Music by Bach, Beethoven and Brahms",
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

                    {events.length && events.map(({id, category, date, time, price, title, ticketLink, excerpt, detail, location, slug}) => {
                    
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
                            ticketLink={ticketLink}
                        />
                        )
                    })}
                
                </div>
            </div>
        </section>
    )
}

export default Schedule;