import Link from 'next/link';
import { useScroll, useTransform, motion } from 'framer-motion';
import imageLoader from '../imageLoader';
import Image from 'next/image';

const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
};


const HeroGrid = () => {

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 200]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);
    const y3 = useTransform(scrollY, [0, 300], [0, -50]);
    const y4 = useTransform(scrollY, [0, 750], [0, -250]);
    const y5 = useTransform(scrollY, [0, 400], [0, -250]);
    const x1 = useTransform(scrollY, [500, 0], [-250, 0]);
    const x2 = useTransform(scrollY, [750, 0], [150, 0]);

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
                        <Link href={'/artists'}>
                            <a>
                                <Image loader={imageLoader} alt="gallery" className="w-full object-cover h-full object-center block" src="https://source.unsplash.com/500x300/?piano" width={500} height={300} priority={true} />
                            </a>
                        </Link>
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <Link href={'/about'}>
                            <a><Image loader={imageLoader} alt="gallery-image" className="w-full object-cover h-full object-center block" src="./../../assets/images/cellos.jpeg" width={500} height={300} priority={true}/></a>
                        </Link>
                    </div>
                    <div className="md:p-2 p-1 w-full">
                        <Link href={'/schedule'}>
                            <a><Image loader={imageLoader} alt="gallery-image" className="w-full h-full object-cover object-center block" src="./../../assets/images/classical3.jpeg" width={850} height={400} priority={true} /></a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-full">
                        <Link href={'/masterclasses'}>
                            <a><Image loader={imageLoader} alt="gallery-image" className="w-full h-full object-cover object-center block" src="./../../assets/images/ams-home3.jpeg" width={850} height={400} priority={true} /></a>
                        </Link>
                    </div>
                    
                    <div className="md:p-2 p-1 w-1/2">
                    <a><Image loader={imageLoader} alt="gallery-image" className="w-full object-cover h-full object-center block" src="./../../assets/images/vasco-dantas.jpeg" width={500} height={300} /></a>
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <a><Image loader={imageLoader} alt="gallery-image" className="w-full object-cover h-full object-center block" src="./../../assets/images/club-farense-faro.jpeg" width={500} height={300} /></a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default HeroGrid; 