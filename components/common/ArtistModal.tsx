import { useEffect } from 'react'; 
import ModalContainer from './ModalContainer';
import ModalContent from './ModalContent';


interface ArtModal{
    artist: any,
    toggleVisibility: any,
    show: any
}

const ArtistModal = ({ artist, toggleVisibility, show }: ArtModal) => {
    return (
      <ModalContainer display={show} hide={toggleVisibility}>
        <article className="modal-article">
          <ModalContent modalInfo={artist} />
        </article>
      </ModalContainer>
    );
};
  
  export default ArtistModal;