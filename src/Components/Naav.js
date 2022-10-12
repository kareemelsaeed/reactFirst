import React from "react";
import { Badge } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";


const Naav = (props)=>{
    
    return(
        <div className="mb-5">
            <Navbar bg="secondary" expand="lg" className="text-centter text-light fixed-top">
                <Container className="d-flex justify-content-between">
                  <div className="d-flex justify-content-start">
                    <div className="me-3">
                        <Link to="/" className="fw-bold text-decoration-none text-light">Home</Link>
                    </div>
                    <div className="me-3">
                      <Link to="/Shop" className="fw-bold text-decoration-none text-light">Shop</Link>
                    </div>
                  </div>
                  <div className="text-center">
                      <h3 className="fw-bold">Lusion</h3>
                  </div>
 
                  <div className="mx-4">
                    <nav className=" position-relative">
                      <Link to="/Cart">
                        <FaShoppingBag style={{color:"white", fontSize:"20px"}}/>
                      </Link>
                      <Badge bg={ props.count > 0 ? "success" : "danger"} className="position-absolute top-0 end" style={{fontSize:"10px"}}>{props.count}</Badge>
                    </nav>
                  </div>

                </Container>
            </Navbar>
        </div>
    )
}

export default Naav;