import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormularioAdmision from "./FormularioAdmision";


const FormGeneral = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button className="formGeneral__btn" onClick={handleShow}>
        Formulario de Admisión
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario Admisión</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FormularioAdmision
            setShow={setShow}
            handleClose={handleClose}
          />


        </Modal.Body>
        <Modal.Footer>
          <Button className='w-25' variant="secondary" onClick={handleClose}>
            cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormGeneral;
