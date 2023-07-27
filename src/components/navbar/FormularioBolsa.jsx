import {useState, useRef} from "react";
import emailjs from '@emailjs/browser';

const FormularioBolsa = ({setShow}) => {
  const form = useRef();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [urlPerfil, setUrlPerfil] = useState('');
  const [vacante, setVacante] = useState('');

  const [error, setError] = useState('');



    const handleNombre = (event) => {
    event.preventDefault();
    setNombre(event.target.value);
  }
  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  }
  const handleTelefono = (event) => {
    event.preventDefault();
    setTelefono(event.target.value);
  }
  const handleUrlLinkedin = (event) => {
    event.preventDefault();
    setUrlPerfil(event.target.value);
  }
  const handleVacante = (event) => {
    event.preventDefault();
    setVacante(event.target.value);
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Desde Handle Submit');

        const dataEmail = {
            nombreTutor: {nombre},
            correo: {email},
            telefono: {telefono},
            urlPerfil: {urlPerfil},
            vacante: {vacante}
        }
        console.log(dataEmail);


        if([nombre,email,telefono,vacante].includes('')){
          setError(true);

          setTimeout(() => {
            setError(false);
          }, 3000);

          return

      }else{

        emailjs.sendForm('service_2ma143c', 'template_l63r3kd', form.current, 'mfZb4vVD-VO06M_t6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      }


        setShow(false);
    }


  return (
    <form ref={form} onSubmit={handleSubmit}>
      {error && <h5 className="alert alert-danger">Error: Existen campos vacíos.</h5>}
      <div className="mb-3">
        <p className="text-danger"> (*) Campos obligatorios</p>
        <label htmlFor="exampleInputEmail1" className="form-label text-primary fw-semibold fs-6 mb-2">
          Nombre *
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Jhon Doe"
          autoFocus
          name="nombre"
          onChange={handleNombre}
          
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label text-primary fw-semibold fs-6 mb-2">
          Correo electrónico *
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="correo@correo.com"
          autoFocus
          name="email"
          onChange={handleEmail}
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputTelefono1" className="form-label text-primary fw-semibold fs-6 mb-2">
            Teléfono *
            </label>
            <input
            type="tel"
            className="form-control"
            placeholder="02123-456-789"
            autoFocus
            name="telefono"
            onChange={handleTelefono}
            
            />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputUrlLinkedin1" className="form-label text-primary fw-semibold fs-6 mb-2">
            Vacante * 
        </label>
        <input
            type="text"
            className="form-control"
            placeholder="Vacante a cubrir"
            autoFocus
            name="vacante"
            onChange={handleVacante}
            
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputUrlLinkedin1" className="form-label text-primary fw-semibold fs-6 mb-2">
            Perfil Profesional (opcional)
        </label>
        <input
            type="text"
            className="form-control"
            placeholder="URL perfil de Linkedin"
            autoFocus
            name="urlLinkedin"
            onChange={handleUrlLinkedin}
            
        />
      </div>
      
      <button type="submit" className="btn btn-primary w-25">
        Enviar
      </button>
    </form>
  );
};

export default FormularioBolsa;
