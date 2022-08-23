import Link from 'next/link';
import Layout from './../../components/Layout';

export default function Artists() {
    let dummyTitle = `This Edition's Performers`;
    let dummy = `cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag`;
    return(
        <Layout>
            <div className="container px-5 py-24 mx-auto">
                <h1 className="generalPageTitle">Artists</h1>
            </div>
            <section className="text-black-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white-900" dangerouslySetInnerHTML={{ __html: dummyTitle }} />
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-white-500" dangerouslySetInnerHTML={{ __html: dummy }} />
                    </div>
                    <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <Link href={`/artists/chicen-itza`}><a><h2 className="text-lg text-black font-medium title-font mb-4">Chichen Itza</h2></a></Link>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-black font-medium title-font mb-4">Colosseum Roma</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-black font-medium title-font mb-4">Great Pyramid of Giza</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-black font-medium title-font mb-4">San Francisco</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-black font-medium title-font mb-4">San Francisco</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-black font-medium title-font mb-4">San Francisco</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-black font-medium title-font mb-4">San Francisco</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-black font-medium title-font mb-4">San Francisco</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>

                    </div>
                </div>
            </section>
        </Layout>
    ) 
}


