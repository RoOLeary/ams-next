import Image from 'next/image';
import imageLoader from '../../imageLoader';

const ModalContent = ({ modalInfo }) => {
    
  
    
    
    return (
        <div className="c-modal-scroller scroller-next-fix" id="speaker-modal" style={{ color: 'rgb(80, 86, 102)' }}>
        <div className="c-modal-headliner">
          {modalInfo[0].speakerPosition
            ? <h3 className="c-modal-header-title" style={{ marginBottom: '8px', fontFamily: 'TNW Avalon' }}>{modalInfo[0].name}</h3>
            : <h1>{modalInfo[0].name}</h1>}
          {modalInfo[0].occupation
            ? (
              <h5 className="subtitle" style={{ marginBottom: '1em', fontWeight: '400' }}>
                {modalInfo[0].occupation}
                ,
                {' '}
                {modalInfo[0].occupation}
              </h5>
            )
            : (
              <span>
                <a className="subtitle" href={'#'} style={{ marginBottom: '1em', fontWeight: '400' }}>
                  {modalInfo[0].name}
                </a>
              </span>
            ) }
        </div>
        <div className="c-modal-body-container">
          <header className="c-modal-header">
            <div className="c-modal-header-image" style={{ background: `${modalInfo[0].companyLogoColor && 'transparent'}` }}>
              
              {modalInfo[0].image
                && (
                  <>
                    <Image loader={imageLoader} width={600} height={300} alt={modalInfo[0].name} className="" src={modalInfo[0].image} />
                    <noscript>
                      <img
                        alt={modalInfo[0].title}
                        src={modalInfo[0].image}
                        data-src={modalInfo[0].image}
                      />
                    </noscript>
                  </>
                )}
              
            </div>
          </header>
          <div className="c-modal-body">
              <>
                <h3>{modalInfo[0].name}</h3>
                <br />  
                <p
                  className="modal-bio"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: 
                    modalInfo[0].biography
                          ? (modalInfo[0].biography.length > 700 ? `${modalInfo[0].biography.slice(0, 700)}...` : modalInfo[0].biography)
                          : 'Speaker biography to follow...stay tuned',
                  }}
                />
            </>
              
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalContent;
  