import Image from 'next/image';
import imageLoader from '../imageLoader';

export interface IBanner {
    title?: string 
}


const Banner = ( props: IBanner ): JSX.Element => {

    return(
        <Image loader={imageLoader} alt={props.title} src="https://algarvemusicseries.com/wp-content/uploads/2019/11/music.jpeg" className="relative block w-full h-full object-cover -mt-12" width={1600} height={480} />     
    )
}; 

export default Banner; 