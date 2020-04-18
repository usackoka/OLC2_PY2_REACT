import React, { Fragment, useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import {Link} from "react-router-dom"
import {baseUrlStrapi} from "../../../config/config"
import ViewDetalleNoticia from "../../../views/ViewEventosNoticias/ViewDetalleNoticia"

const CardNoticias = (props) => {
  var {data} = props;
  let i = 0;
  let lengthData = data.length;
  const [show, setShow] = useState( false);
  const [id, setId] = useState("")

    if (props.id !== undefined && id === ""){
      setId(props.id)
      setShow(true)
    }

  const handleclick = async (data) =>{
    if (show === true){
      await showupdate()
      setId(data.id)
      setShow(true)
      window.scrollTo(0, 0)
    }else {
      setId(data.id)
      setShow(true)
      window.scrollTo(0, 0)
    }
  }
  const showupdate = () =>{
    setShow(false)
  }

  return (
    <Fragment>
      {
        show ?
        <ViewDetalleNoticia id={id} /> : ""
      }

      {
        data.length>0?
        data.map(data => (
        i++>1 && i<lengthData?
        <Fragment key={data.id}>
          <Col lg={4}>
            <Card className={props.cardClass}>
              <Card.Header><Link to={"/home/noticia/edit/"+data.id} className="btn btn-primary">Editar</Link></Card.Header>

              {data.Foto ? (
                <Card.Img
                  variant="top"
                  src={baseUrlStrapi + data.Foto.url}
                />
              ) : (
                <span>No Image</span>
              )}
              <Card.Body>
                <Card.Title>{data.Encabezado} </Card.Title>
                <Card.Text>
                  {`${data.Contenido.substr(0, 60)} ...`}
                  <Button variant="link" onClick={() => handleclick(data)} >Saber mas </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Fragment>
        : <Fragment></Fragment>
      ))
    :
      <Fragment key={data.id}>
          <Card className={props.cardClass}>
            <Card.Header><Link to={"/home/noticia/edit/"+data.id} className="btn btn-primary">Editar</Link></Card.Header>
            {data.Foto ? (
              <Card.Img
                variant="top"
                src={baseUrlStrapi + data.Foto.url}
              />
            ) : (
              <span>No Image</span>
            )}
            <Card.Body>
              <Card.Title>{data.Encabezado} </Card.Title>
              <Card.Text>
                {//`${data.Contenido.substr(0, 60)} ...`
                }
                <Button variant="link" onClick={() => handleclick(data)} >Saber mas </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Fragment>
    }
    </Fragment>
  );
};

export default CardNoticias;
