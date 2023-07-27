import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PrivacyNotice() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='text-light footer__privacyNotice' variant='' onClick={handleShow}>
        Aviso de Privacidad
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Aviso de Privacidad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repellat nostrum reiciendis repellendus tempora labore odit fugit soluta. Expedita esse veritatis, ipsum odit facere ea nihil quam ad animi libero!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repellat nostrum reiciendis repellendus tempora labore odit fugit soluta. Expedita esse veritatis, ipsum odit facere ea nihil quam ad animi libero!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repellat nostrum reiciendis repellendus tempora labore odit fugit soluta. Expedita esse veritatis, ipsum odit facere ea nihil quam ad animi libero!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary">Aceptar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PrivacyNotice;