import React from "react";
import { Container } from "react-bootstrap";
import f1 from "../Photos/fifth1.jpg"
import f2 from "../Photos/fifth2.jpg"
import f3 from "../Photos/fifth3.jpg"
import f4 from "../Photos/fifth4.jpg"
import f5 from "../Photos/fifth5.jpg"
import f6 from "../Photos/fifth6.jpg"


const Footer = ()=>{
    return(
        <div style={{backgroundColor:"black"}}>
            <Container>
                <div className="row d-flex justify-content-lg-between justify-content-center">
                    <div className=" mt-5 text-center" style={{width:"35rem"}}>
                
                        <img style={{width:"16.5rem", height:"11.9rem"}} src={f1}/>
                        <img style={{width:"16.5rem", height:"11.9rem"}} src={f2}/>
        
                        <img style={{width:"16.5rem", height:"11.9rem"}} src={f3}/>
                        <img style={{width:"16.5rem", height:"11.9rem"}} src={f4}/>
        
                        <img style={{width:"16.5rem", height:"11.9rem"}} src={f5}/>
                        <img style={{width:"16.5rem", height:"11.9rem"}} src={f6}/>

                    </div>
                    <div className=" px-5 mt-5 text-light" style={{width:"30rem"}}>
                        <div className="text-center d-flex align-items-center justify-content-center" style={{height:"12rem"}}>
                            <h1>Vintage Style</h1>
                        </div>
                        <div className=" d-flex align-items-center justify-content-center" style={{height:"12rem"}}>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi est, cupiditate impedit porro cumque tempore aliquid officiis excepturi ab delectus incidunt esse dolor molestias veritatis, illo in magnam atque assumenda!</p>
                        </div>
                        <div className="text-center d-flex align-items-center justify-content-center" style={{height:"12rem"}}>
                            <h1>#Lusiontheme</h1>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;