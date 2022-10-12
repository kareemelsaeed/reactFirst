import React from "react";
import logo1 from "../Photos/logoOne.png"
import logo2 from "../Photos/logoTwo.png"
import Carousel from 'react-bootstrap/Carousel';
import MainProd from "./MainProd";
import BestSal from "./BestSal";
import Sall from "./Sall";
import Footer from "./Footer";


const Home = (props)=>{

    return(
        <div>
            
            <Carousel>
                <Carousel.Item>
                  <img
                    style={{width:"100%", height:"92vh" }}
                    className="d-block w-100"
                    src={logo1}
                    alt="First slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{width:"100%",height:"92vh"}}
                    className="d-block w-100"
                    src={logo2}
                    alt="Second slide"
                  />
                </Carousel.Item>

            </Carousel>

            <MainProd mainProducts={props.mainProducts}/>
            <BestSal bestSell={props.bestSell}/>
            <Sall />
            <Footer />
        </div>
    )
}

export default Home;