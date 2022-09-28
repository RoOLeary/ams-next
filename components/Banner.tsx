import Image from 'next/image';
import imageLoader from '../imageLoader';

export interface IBanner {
    title?: string 
}


const Banner = ( props: IBanner ): JSX.Element => {

    return(
        <Image loader={imageLoader} alt={props.title} src="/assets/images/banner-marius-masalar-rPOmLGwai2w-unsplash.jpg" className="relative block w-full h-full object-cover -mt-12" width={1600} height={480} layout="responsive" />     
    )
}; 

export default Banner; 