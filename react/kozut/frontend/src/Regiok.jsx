import React from "react";
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "tachyons"



const Regiok = (props) => {
    const [regiok, setRegiok] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/regiok`)
            .then(res => res.json())
            .then(data => setRegiok(data))
    }, []);
    return (
        <div className="container-fluid bg-light-gray"> 
            <article className="row justify-content-center ">
                <h1 className="text-center display-4 mt-5 mb-5 bg-light-red">Régiók</h1>
                <div className="row">
                        {regiok.map(regio => (

                            <div className="col-md-4">
                                <div className=" bg-light-red br3 pa3 ma2 grow bw2 shadow-5" key={regio.Rid}>
                                    <h2 className="text-center">{regio.regionev}</h2>
                                    <p>Régió típusa: {regio.regio_tipusa}</p>
                                    <p>Régió ID-je: {regio.Rid}</p>
                                </div>
                            </div>
                            
                        ))}
                </div>
            </article>
        </div>
    );
}

export default Regiok;