import React from "react";
import Naav from "./Naav";
import shop1 from "../Photos/Shop1.jpg"
import { Button, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";


const Shop = (props)=>{
    return(
        <div>

            <div className="position-relative" style={{height:"92vh"}}>
                <img style={{width: "100%" ,height:"100%"}} src={shop1}/>
                <div className="position-absolute top-50  start-0 d-flex justify-content-center align-items-center" style={{width:"100%" ,height:"30vh"}}>
                    <div className=" " >
                        <h1>Shop</h1>
                        <p className="fw-bold">
                            <span className="opacity-50 text-light">Home</span>
                            /Shop</p>
                    </div>
                </div>
            </div>

            <div className="pt-5" style={{backgroundColor:"black"}}>
                <Container>
                    <div className="row d-flex justify-content-lg-between justify-content-center">
                        {props.shop.map((e)=>(
                            <Card className="mt-5" style={{ width: '16rem' }} key={e.id}>
                                <Card.Img variant="top" src={e.photo} />
                                <Card.Body>
                                  <Card.Title>{e.type}</Card.Title>
                                  <div className="d-flex justify-content-between">
                                    <h5>${e.price}.00</h5>
                                    <Button variant="outline-danger" onClick={()=>props.add(e)}><Link to="" className="fw-bold text-dark text-decoration-none"><FaShoppingBag /></Link></Button>
                                  </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>
            </div>

            <div className="py-5 text-center" style={{backgroundColor:"black"}}>
                <Button variant="outline-danger"><Link to="/" className=" text-decoration-none text-light">Back Home</Link></Button>
            </div>
        </div>
    )
}

export default Shop;