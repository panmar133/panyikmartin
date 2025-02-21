import React from "react";
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "tachyons"
import axios from "axios";



const Regiok = (props) => {
    const [regiok, setRegiok] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/regiok`)
            .then(function (response) {
                setRegiok(response.data);
                //console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        /*<div className="container-fluid bg-light-gray"> 
            <article className="row justify-content-center ">
                <h1 className="text-center display-4 mt-5 mb-5 bg-light-red">Régiók Select</h1>
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
        </div>*/
        <div class="pa4">
  <div class="overflow-auto">
    <table class="f6 w-100 mw8 center" cellspacing="0">
      <thead>
        <tr class="stripe-dark">
          <th class="fw6 tl pa3 bg-white">Rid</th>
          <th class="fw6 tl pa3 bg-white">Régió neve</th>
          <th class="fw6 tl pa3 bg-white">Régió típusa</th>
        </tr>
      </thead>
      <tbody class="lh-copy">
        {regiok.map(regio =>
        <tr class="stripe-dark">
          <td class="pa3">{regio.Rid}</td>
          <td class="pa3">{regio.regionev}</td>
          <td class="pa3">{regio.regio_tipusa}</td>
        </tr>
        )}
      </tbody>
    </table>
    <form id="regioSelect">
        <label for="cars">Válassz egy régiót:</label>
        <select name="regiok" id="regiok">
        {regiok.map(regio =>
        <option value={regio.Rid}>{regio.regionev}</option>
        )}
        </select>
        <button type="submit">Küldés</button>
    </form>
  </div>
</div>

    );
}

export default Regiok;