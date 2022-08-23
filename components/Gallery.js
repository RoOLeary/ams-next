const Gallery = () => {
    let content = `Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom. 
    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.`;
    return(
        <section className="text-white-600 body-font">
            <div className="container px-5 pb-24 mx-auto flex flex-wrap">
                {/* <div className="flex w-full mb-20 flex-wrap">
                <h1 className="sm:text-4xl text-4xl font-medium title-font text-white-900 lg:w-1/3 lg:mb-0 mb-4">Algarve Music Series</h1>
                <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: content }} />
                </div> */}
                <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-1/2">
                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://source.unsplash.com/500x300/?piano" />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://source.unsplash.com/500x300/?cello" />
                    </div>
                    <div className="md:p-2 p-1 w-full">
                    <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://source.unsplash.com/500x300/?string-quartet" />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-full">
                    <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://source.unsplash.com/500x300/?algarve" />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://source.unsplash.com/500x300/?violin" />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://source.unsplash.com/500x300/?concert" />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery; 