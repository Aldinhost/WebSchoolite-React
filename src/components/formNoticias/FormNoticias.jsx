import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const FormNoticias = ({ test }) => {

  const [nombre, setNombre] = useState('');
  const [url, setUrl] = useState('');

  // const handleNoticia = (e) =>{
  //   e.preventDefault();
  //   console.log(e.target.value)
  //   setNoticia([...noticia, e.target.value]);
  // }

  const handleInputNombre = (event) => {
    event.preventDefault();
    setNombre(event.target.value);
  }

  const handleInputUrl = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  }
    
  return (
    <div className="formNoticias__container">
        <h1>Formulario Noticias</h1>
      <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="formNoticias__label">Nombre de publicación</Form.Label>
          <Form.Control className="formNoticias__input" type="text" placeholder="Titulo Noticia" onChange={handleInputNombre}/>
        </Form.Group>

        <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
          <Form.Label className="formNoticias__label">Enlace de la publicación</Form.Label>
          <Form.Control className="formNoticias__input" type="text" placeholder="URL de Noticia" onChange={handleInputUrl}/>
        </Form.Group>
        <Button className="w-25 btnAddNoticia" as="input" type="submit" value="Agregar Noticia" />
      </Form>
      <div>

         {
            `Nombre: ${nombre}` 
         }
         <br/>
         {
            `URL: ${url}` 
         }

         {test}  
      </div>
    </div>
  );
};

export default FormNoticias;






// const [name, setName] = useState('');
// const [nombres, setNombres] = (['']);
// const [url, setUrl] = useState('');
// const [urlList, setUrlList] = (['']);

// const handleInputName = (event) => {
//   setName(event.target.value);
//   // setNombres(...nombres, name);
// }

// const handleInputUrl = (event) => {
//   setUrl(event.target.value);
//   // setUrlList(...urlList, url);
// }

// const sendData = (event) => {
//   event.preventDefault()
//   setNombres([...nombres, name]);
//   setUrlList([...urlList, url]);
// }
// console.log(nombres);
// console.log(urlList);