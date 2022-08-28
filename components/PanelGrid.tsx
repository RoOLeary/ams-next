import Image from 'next/image';
import imageLoader from '../imageLoader';

interface Panel{
    panelGridTitle?: string 
}


const PanelGrid = ({ panelGridTitle }:Panel) => {
    return(
        <section className="text-white-600 body-font">
            <div className="container px-5 pb-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{panelGridTitle}</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400 text-base"></p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 sm:w-1/2 p-2">
                        <div className="flex relative">
                            <Image loader={imageLoader} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x450/?cello" layout="fill"  />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity hover:cursor-pointer">
                                <h2 className="tracking-widest text-sm title-font font-medium gold mb-1">THE SUBTITLE</h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3">Shooting Stars</h1>
                                <p className="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-2">
                        <div className="flex relative">
                            <Image loader={imageLoader} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x450/?violin" layout="fill"  />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity hover:cursor-pointer">
                                <h2 className="tracking-widest text-sm title-font font-medium gold mb-1">THE SUBTITLE</h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3">The Catalyzer</h1>
                                <p className="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-2">
                        <div className="flex relative">
                            <Image loader={imageLoader} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x450/?viola" layout="fill"  />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity hover:cursor-pointer">
                                <h2 className="tracking-widest text-sm title-font font-medium gold mb-1">THE SUBTITLE</h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3">The 400 Blows</h1>
                                <p className="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-2">
                        <div className="flex relative">
                            <Image loader={imageLoader} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x450/?flute" layout="fill"  />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity hover:cursor-pointer">
                                <h2 className="tracking-widest text-sm title-font font-medium gold mb-1">THE SUBTITLE</h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3">Neptune</h1>
                                <p className="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-2">
                        <div className="flex relative">
                            <Image loader={imageLoader} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x450/?piano" layout="fill"  />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity hover:cursor-pointer">
                                <h2 className="tracking-widest text-sm title-font font-medium gold mb-1">THE SUBTITLE</h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3">Holden Caulfield</h1>
                                <p className="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-2">
                        <div className="flex relative">
                            <Image loader={imageLoader} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x450/?classical?music" layout="fill"  />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity hover:cursor-pointer">
                                <h2 className="tracking-widest text-sm title-font font-medium gold mb-1">THE SUBTITLE</h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3">Alper Kamu</h1>
                                <p className="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-2">
                        <div className="flex relative">
                            <Image loader={imageLoader} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x450/?flute" layout="fill"  />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity hover:cursor-pointer">
                                <h2 className="tracking-widest text-sm title-font font-medium gold mb-1">THE SUBTITLE</h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3">Neptune</h1>
                                <p className="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-2">
                        <div className="flex relative">
                            <Image loader={imageLoader} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x450/?piano" layout="fill"  />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity hover:cursor-pointer">
                                <h2 className="tracking-widest text-sm title-font font-medium gold mb-1">THE SUBTITLE</h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3">Holden Caulfield</h1>
                                <p className="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-2">
                        <div className="flex relative">
                            <Image loader={imageLoader} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x450/?classical?music" layout="fill"  />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity hover:cursor-pointer">
                                <h2 className="tracking-widest text-sm title-font font-medium gold mb-1">THE SUBTITLE</h2>
                                <h1 className="title-font text-lg font-medium text-black mb-3">Alper Kamu</h1>
                                <p className="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PanelGrid; 