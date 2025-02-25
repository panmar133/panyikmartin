import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from "react-bootstrap"
import axios from "axios"
import Table from 'react-bootstrap/Table';

const Szobaktablazat = (props) => {
    const [szobak, setSzobak] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/szobak`)
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
            <th>Ágyak száma</th>
            </tr>
        </thead>
        <tbody>
        {szobak.map(szoba =>
        <tr>
          <td>{szoba.sznev}</td>
          <td>{szoba.agy}</td>
        </tr>
        )}
        </tbody>
    </Table>
      </div>
    </>
  )
}

export default Szobaktablazat
