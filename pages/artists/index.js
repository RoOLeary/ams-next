import { useRouter } from 'next/router'
import useModal from './../../hooks/useModal';
import ArtistModal from './../../components/common/ArtistModal';
import Link from 'next/link';
import Layout from './../../components/Layout';
import PageHeader from '../../components/PageHeader';

export default function Artists() {
    const { show, toggleVisibility } = useModal();
    const { locale, locales, asPath } = useRouter();

    let artist = [
        {
            "locale": "en-US",
            "name": "Isabel Vaz",
            "occupation": "Cellist",
            "biography": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet nisi iaculis, congue risus ut, ultricies purus. Aliquam interdum mauris enim, eu lacinia enim suscipit non.",
            "image": "https://source.unsplash.com/600x300/?violinist"
        },
    ]

    let dummyTitle = [
        {
            "locale": "en-US",
            'editionTitle': `This Edition's Performers`
        },
        {
            "locale": "pt-PT",
            'editionTitle': `Artistas desta Edição`
        }
    ]

    let dummy = [
        
        {
            "locale": "en",
            "title": "Artists",
            "content": `Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn`
        },
        {
            "locale": "pt",
            "title": "Artistas",
            "content": "Esta es la primera entrada del blog en español publicada en el blog. Meggings portland fingerstache lyftao",
        }
    ];

    let l18n = dummy.filter((h) => h.locale === locale); 

    // console.log(l18n);

    return(
        <Layout>
            <PageHeader title="Artists" headerContent={l18n} />
            <section className="text-black-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white-900" dangerouslySetInnerHTML={{ __html: dummyTitle[0].editionTitle }} />
                        <br />
                        <div className="h-1 w-20 bg-goldenrod"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-white-500" dangerouslySetInnerHTML={{ __html: l18n[0].content }} />
                    </div>
                    <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?violinist" alt="content"  onClick={toggleVisibility} />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/isabel-vaz`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Isabel Vaz</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                    <ArtistModal
                                        artist={artist}
                                        show={show}
                                        toggleVisibility={toggleVisibility}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?cellist" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Vasco Dantes</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?flutist" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Natahsha Grujic</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?percussionist" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Ketevan Roninishvilli</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?clarinet" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Chichen Itza</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?trumpet" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Chichen Itza</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?accordion" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Chichen Itza</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?violinist" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Chichen Itza</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?cellist" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Chichen Itza</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?singer" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Chichen Itza</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?opera" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Chichen Itza</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?musician" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Chichen Itza</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                       
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?musician" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Chichen Itza</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?musician" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Chichen Itza</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?musician" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Chichen Itza</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100">
                            <img className="h-40 w-full object-cover object-center mb-6" src="https://source.unsplash.com/600x450/?musician" alt="content" />
                                <div className="px-6 pb-6">
                                    <h3 className="tracking-widest gold text-xs font-medium title-font">SUBTITLE</h3>
                                    <Link href={`/artists/chicen-itza`}><a className="gold hover:text-red"><h2 className="text-lg text-black font-medium title-font mb-4">Chichen Itza</h2></a></Link>
                                    <p className="leading-relaxed text-gray-500">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    ) 
}


