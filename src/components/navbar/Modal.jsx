import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FormularioBolsa from './FormularioBolsa';

function ModalNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      ¡Únete a Nosotros!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bolsa de Empleo ICA</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FormularioBolsa
            setShow={setShow}
          />
          {/* <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Jhon Doe"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@correo.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="00 0000 0000"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>CV</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL perfil de Linkedin"
                autoFocus
              />
            </Form.Group>

          </Form> */}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalNavbar;