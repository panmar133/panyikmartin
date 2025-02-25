import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from "react-bootstrap"
import axios from "axios"
import Table from 'react-bootstrap/Table';

const Szobakihasznaltsag = (props) => {
    const [szobak, setSzobak] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/szobakfoglaltsaga`)
            .then(function (response) {
                setSzobak(response.data);
                //console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
  return (
    <>
      <div>
      <Table striped bordered hover>
        <thead>
            <tr>
            <th>Szoba neve</th>
            <th>Vendégek száma</th>
            <th>Vendégéjszakák száma</th>
            </tr>
        </thead>
        <tbody>
        {szobak.map(szoba =>
        <tr>
          <td>{szoba.sznev}</td>
          <td>{szoba.vendegekszama} fő</td>
          <td>{szoba.napokszama} éjszaka</td>
        </tr>
        )}
        </tbody>
    </Table>
      </div>
    </>
  )
}

export default Szobakihasznaltsag
