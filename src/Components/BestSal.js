import React from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const BestSal = (props)=>{
    return(
        <div className="pt-5">
            <Container>
                <h1 className="text-danger">Best Selling</h1>
                <div className="row d-flex justify-content-lg-between justify-content-center">
                {props.bestSell.map((e)=>(
                    <Card className="mt-5" style={{ width: '16rem' }} key={e.id}>
                        <Card.Img variant="top" src={e.photo} />
                        <Card.Body>
                          <Card.Text className="fw-bold">
                                {e.type}
                          </Card.Text>
                          <div className="d-flex justify-content-between">
                          <h5>{e.price}.00$</h5>
                          <Button variant="outline-success"><Link to="/Shop" className="fw-bold text-dark text-decoration-none">Shop Now</Link></Button>
                          </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            </Container>
        </div>
    )
}

export default BestSal;