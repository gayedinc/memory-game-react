import { useRef, useEffect } from 'react';

// modal page componenti
export default function ModalPage({ onCloseModal, onRestartClick }) {
  const modalRef = useRef();

  // Modal dışına tıklanırsa kapat
  useEffect(() => {
    function handleOutsideClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onCloseModal(); // modalı kapat
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content" ref={modalRef}>
          <button onClick={onRestartClick} className='modal-restart'>Restart</button>
          <button onClick={onRestartClick} className='modal-new-game'>New Game</button>
          <button onClick={onCloseModal} className='modal-resume-game'>Resume Game</button>
        </div>
      </div>
    </>
  )
}