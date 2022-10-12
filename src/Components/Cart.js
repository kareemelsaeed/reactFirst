import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { FaTrash } from "react-icons/fa";


const Cart = (props)=>{
    return(
        <div>
            <div> 
                
                <div className="mt-5 pt-5 text-light">{props.count > 0 ? (<Container>
                    <div className="row d-flex justify-content-lg-between justify-content-center">
                        {props.addCart.map((e)=>(
                            <Card className="mt-5" style={{ width: '16rem' }} key={e.id}>
                                <Card.Img variant="top" style={{height: "15rem"}} src={e.photo} />
                                <Card.Body>
                                  <Card.Title className="text-dark">Name: {e.type}</Card.Title>
                                  <div className="d-flex justify-content-between text-dark">
                                    <h5>Price: {e.price}$</h5>
                                    <h5 className="text-danger">count: {e.buyQty}</h5>
                                  </div>
                                  <div className="d-flex justify-content-between text-dark mt-3">
                                    <Button variant="outline-success" className="rounded-circle" onClick={()=>props.plus(e)}>+</Button>
                                    <Button variant="outline-warning" className="rounded-circle text fs-6" onClick={()=>props.mines(e)}>-</Button>
                                    <Button variant="outline-danger" className="rounded-circle" onClick={()=>props.del(e)}><FaTrash /></Button>
                                  </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>) : (<div className="text-center d-flex justify-content-center pt-4 mt-5" style={{width: "100%"}}>
                    <div className="py-2 bg-light px-4 border rounded" >    
                            <span className="ms-3 text fs-2 text-danger">Your Cart is Empty</span>
                        </div> 
                </div>)} 

                </div>

                <div className="text-center d-flex justify-content-center" style={{width: "100%"}}>
                    <div>

                        <div className="py-2 bg-light px-4 border rounded mt-4" >
                            <Button variant="outline-danger" onClick={props.calc}>Get Total Price</Button>    
                            <span className="ms-3"> Total Price: {props.price}</span>
                        </div> 
                        <Button className="my-4 fs-3" variant="outline-danger"><Link to="/Shop" className=" text-decoration-none text-light">Continue Shopping</Link> </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart;