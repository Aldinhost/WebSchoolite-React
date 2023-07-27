import Dropdown from 'react-bootstrap/Dropdown';

function SubMenu() {
  return (
    <>

      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          Oferta Educativa
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/preescolar">Preescolar</Dropdown.Item>
          <Dropdown.Item href="/primaria">Primaria</Dropdown.Item>
          <Dropdown.Item href="/secundaria">Secundaria</Dropdown.Item>
          <Dropdown.Item href="/preparatoria">Preparatoria</Dropdown.Item>
          <Dropdown.Item href="/universidad">Universidad</Dropdown.Item>
          <Dropdown.Item href="/ingles">Inglés</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default SubMenu;