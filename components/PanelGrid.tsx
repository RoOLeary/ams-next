import Image from 'next/image';
import imageLoader from '../imageLoader';

interface IPanel {
    panelGridTitle?: string 
}

const PanelGrid = ({ panelGridTitle }: IPanel ) => {
    return(
   

<section className="text-white-600 body-font">

    <div className="bg-white py-10 sm:py-32">
    <div className="container px-5 pb-10 mx-auto">
          <h1 className="generalPageTitle">Sponsors 2023</h1>
          <div className="h-1 overflow-hidden pb-2">
              <div className="h-1 w-20 bg-goldenrod"></div>
          </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <a href="https://egideartes.pt/" target="_blank" rel="noreferrer">
                <img
                    className="col-span-2 w-full object-contain lg:col-span-1"
                    src="../assets/images/egide.jpeg"
                    alt="Reform"
                    width={300}
                    height={150}
                />
            </a>
            <a href="teatrodasfiguras.pt/pt/Default.aspx" target="_blank" rel="noreferrer">
                <img
                    className="col-span-2 w-full object-contain lg:col-span-1"
                    src="../assets/images/figuras.png"
                    alt="Transistor"
                    width={300}
                    height={150}
                />
          </a>
          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="../assets/images/faro-muno.png"
            alt="Reform"
            width={300}
            height={150}
          />
          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="../assets/images/loule.jpeg"
            alt="Reform"
            width={300}
            height={150}
          />
         
         <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="../assets/images/portugal.jpeg"
            alt="Reform"
            width={300}
            height={150}
          />

        <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="../assets/images/piano.jpeg"
            alt="Reform"
            width={300}
            height={150}
          />

        <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="../assets/images/ammf.jpeg"
            alt="Reform"
            width={200}
            height={100}
          />
       <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="../assets/images/kenke.png"
            alt="Reform"
            width={300}
            height={150}
          />
        
        
        </div>
      </div>
    </div>


        </section>

    )
}

export default PanelGrid; 