import React from "react";
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons'



const Termekek = (props) => {
    const [Termekek, setTermekek] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapiserver.reactbd.com/products`)
            .then(res => res.json())
            .then(data => setTermekek(data))
    }, []);
    return (
        <div className="container-fluid bg-light-gray"> 
            <article className="row justify-content-center ">
                <h1 className="text-center display-4 mt-5 mb-5 bg-light-red">Kollekciók</h1>
                <div className="row">
                        {Termekek.map(termek => (

                            <div className="col-md-4">
                                <div className="bg-light-blue br3 pa3 ma2 grow bw2 shadow-5 rounded" key={termek._id}>
                                    <h2 className="text-center">{termek.title}</h2>
                                    <img src={termek.image} alt="" />
                                    <h1>Ára: </h1>
                                    <p>{termek.price}$</p>
                                    <h1>Leírás:</h1>
                                    <p>{termek.description}</p>
                                    <h1>Kategória:</h1>
                                    <p>{termek.category}</p>
                                    <h1>Értékelés:</h1>
                                    <p>{termek.rating}</p>
                                </div>
                            </div>
                            
                        ))}
                </div>
            </article>
        </div>
    );
}

export default Termekek;