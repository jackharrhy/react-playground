import React, {useState} from 'react'
import './Modal.css'

const Modal = () => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    };
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

  return (
    <div className="container">
      <h2>Modal Test</h2>
      <p>On button click user should see popup overlay showing overlay page with information</p>
      <button onClick={() => setModal(true)}>Click Here</button>
      {modal && (
        <div className="Modal">
          <div onClick={toggleModal} className="Overlay">
            <div className="ModalContent">
              <h2>Michael Miller</h2>
              <button onClick={toggleModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal