import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import f1 from "../Photos/f1.png"


const Sall =()=>{
    return(
        <div style={{backgroundColor:"black"}}>
            <Container>
                <div className="row  pt-5 d-flex justify-content-lg-between justify-content-center" >
                    <div className="position-relative mt-5" style={{width:"45rem", backgroundColor:"white"}}>
                        <img src={f1} style={{width: "100%" , height:"30rem"}}/>
                        <div className="text-center d-flex align-items-center justify-content-center position-absolute top-50 start-0" style={{width: "100%" , height:"15rem"}}>
                            <div>
                                <h5>MERRY</h5>
                                <h3>Christmass 40% Off</h3>
                                <Button variant="outline-success"><Link className="fw-bold text-decoration-none text-dark" to="/Shop">Shop Now</Link></Button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5" style={{width:"20rem", backgroundColor:"white"}}>
                        <div className="py-3 px-3">
                            <h6 style={{fontSize:"90px" , fontWeight:"100"}}>Your Next</h6>
                            <h1 style={{fontSize:"50px" , fontWeight:"900"}}>Purchase 10% Off</h1>
                            <Button className="my-4" variant="outline-success"><Link className="fw-bold text-decoration-none text-dark" to="/Shop">Shop Now</Link></Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Sall;