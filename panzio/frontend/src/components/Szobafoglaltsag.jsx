import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from "react-bootstrap"
import axios from "axios"
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Szobaktablazat = (props) => {
    const [szobak, setSzobak] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState('');
    let navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:3001/selectSzobak`)
            .then(function (response) {
                setSzobak(response.data);
                //console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    const oldalAtiranyit = (event) => {
        event.preventDefault();
        navigate('/valasztottszoba/' + selectedRoom);
      }
  return (
    <>
      <div>
        <form onSubmit={oldalAtiranyit}>
      <select value={selectedRoom} onChange={e => setSelectedRoom(e.target.value)}>
      {szobak.map(szoba =>
            <option value={szoba.szazon}>{szoba.sznev}</option>
        )}
    </select>
    <button type="submit">Küldés</button>
    </form>
      </div>
    </>
  )
}

export default Szobaktablazat