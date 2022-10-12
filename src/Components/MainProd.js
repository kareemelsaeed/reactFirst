import React from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const MainProd = (props)=> {
    
    return(
        <div className="pt-5">
            <Container>
            <div className="row d-flex justify-content-lg-between justify-content-center">
                {props.mainProducts.map((e)=>(
                    <div className="col-lg-3 col-sm-12 d-flex justify-content-center " key={e.id}>
                        <Card className="mt-5" style={{ width: '16rem' }} >
                            <Card.Img variant="top" src={e.photo} />
                            <Card.Body>
                              <Card.Title> {e.type}</Card.Title>
                              <Card.Text>
                                {e.items}
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            </Container>
        </div>
    )
}

export default MainProd;