import {useState, useRef} from "react";
import emailjs from '@emailjs/browser';

const FormularioAdmision = ({setShow}) => {
  const form = useRef();

  const [nombreTutor, setNombreTutor] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nombreAlumno, setNombreAlumno] = useState('');
  const [visita, setVisita] = useState('');
  const [programa, setPrograma] = useState('');

  const [error, setError] = useState(false);



     const handleNombreTutor = (event) => {
    event.preventDefault();
    setNombreTutor(event.target.value);
  }
  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  }
  const handleTelefono = (event) => {
    event.preventDefault();
    setTelefono(event.target.value);
  }
  const handleNombreAlumno = (event) => {
    event.preventDefault();
    setNombreAlumno(event.target.value);
  }
  const handleVisita = (event) => {
    event.preventDefault();
    setVisita(event.target.value);
  }
  const handlePrograma = (event) => {
    event.preventDefault();
    setPrograma(event.target.value);
  }


    const handleSubmit = (e) => {
        e.preventDefault();

        const dataEmail = {
            nombreTutor: {nombreTutor},
            correo: {email},
            telefono: {telefono},
            nombreAlumno: {nombreAlumno},
            visita: {visita},
            programa: {programa}
        }
        console.log(dataEmail);

        if([nombreTutor,email,telefono,nombreAlumno,visita,programa].includes('')){
            setError(true);

            setTimeout(() => {
              setError(false);
            }, 3000);

            return

        }else{

          emailjs.sendForm('service_797v8um', 'template_vpgt71m', form.current, 'mfZb4vVD-VO06M_t6')
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
      <p className="text-danger"> * Campos obligatorios</p>
        <label htmlFor="InputEmail1" className="form-label text-primary fw-semibold fs-6 mb-2">
          Nombre Tutor <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Jhon Doe"
          autoFocus
          name="nombreTutor"
          onChange={handleNombreTutor}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="InputEmail1" className="form-label text-primary fw-semibold fs-6 mb-2">
          Correo electrónico <span className="text-danger">*</span>
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
        <label htmlFor="InputTelefono1" className="form-label text-primary fw-semibold fs-6 mb-2">
            Teléfono <span className="text-danger">*</span>
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
        <label htmlFor="exampleInputNombreAlumno1" className="form-label text-primary fw-semibold fs-6 mb-2">
            Nombre del Alumno <span className="text-danger">*</span>
            </label>
            <input
            type="text"
            className="form-control"
            placeholder="Jhon Doe"
            autoFocus
            name="nombreAlumno"
            onChange={handleNombreAlumno}
            
            />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputvisit1" className="form-label text-primary fw-semibold fs-6 mb-2">
            Visita <span className="text-danger">*</span>
            </label>
            <input
            type="date"
            className="form-control"
            autoFocus
            name="visit"
            onChange={handleVisita}
            
            />
      </div>

      <div className="mb-3">
      <label htmlFor="exampleInputvisit1" className="form-label text-primary fw-semibold fs-6 mb-2">
            Programa <span className="text-danger">*</span>
            </label>
        <select className="form-select" aria-label="Default select example" onChange={handlePrograma} name="programa" >
            <option value=''>Selecciona Programa Académico *</option>
            <option value="Preescolar">Preescolar</option>
            <option value="Primaria">Primaria</option>
            <option value="Secundaria">Secundaria</option>
            <option value="Preparatoria">Preparatoria</option>
            <option value="Universidad">Universidad</option>
        </select>
      </div>
      
      <button type="submit" className="btn btn-primary w-25">
        Enviar
      </button>
    </form>
  );
};

export default FormularioAdmision;
