import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import szobaKep from "/img/ketagyas.jpg"
import Szobaktablazat from '../components/Szobaktablazat';
import axios from "axios"
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';

function Valasztottszoba() {
    const { id } = useParams()
    const [vendegek, setVendegek] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/valszobafoglaltsag/` + id)
            .then(function (response) {
                setVendegek(response.data);
                //console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    console.log(vendegek);
  return (
    <>
      <Container>
      <div>
        <Row>
            <Col>
            <article class="cf ph3 ph8-ns pv4">
                <header class="fn fl-ns w-90-ns pr4-ns">
                    <h3 class="mb3 mt0 lh-title">Falusi szálláshely fajtái</h3>
                </header>
                <div class="w-80-ns">
                    <p class="lh-copy measure mt4 mt0-ns">
                    <ul>
                    <li>Vendégszoba: a vendégek rendelkezésére bocsátható önálló lakóegység, amely egy lakóhelyiségből, és a minősítéstől függően a hozzátartozó mellékhelyiségekből áll.</li>
                    <li>Lakrész: önálló épület kettő, illetve több szobából álló lehatárolt része a minősítéstől függően hozzátartozó mellékhelyiségekkel együtt</li>
                    <li>Vendégház: önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel rendelkező lakó-, illetve üdülőegység, családok vagy kisebb csoportok elszállásolására.</li>
                    <li>Sátorozóhely: csak valamelyik falusi szálláshely típus mellett, mintegy azt kiegészítve üzemeltethető az előírt feltételek megléte esetén. Pl.: falusi vendégház sátorozóhellyel.</li>
                    </ul>
                        <img src={szobaKep} alt="Szoba képe"/>
                    </p>
                </div>
            </article>
            </Col>
            <Col>
            <article class="ph3 ph8-ns pv4 bg-yellow">
                <header class="fn fl-ns w-90-ns pr4-ns">
                    <h3 class="mb3 mt0 lh-title">A hét törpe fogadó</h3>
                </header>
                <div class="w-80-ns">
                    <p class="lh-copy measure mt4 mt0-ns">
                    <Szobaktablazat/>
                    <br/>
                    <b>Felszereltségük:</b>
                    <ol>
                        <li>Ruhásszekrény</li>
                        <li>Saját fürdőszoba zuhanytálca</li>
                        <li>WC (fürdőszobával egyben)</li>
                    </ol>
                    </p>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </article>
            </Col>
        </Row>
        <Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Szoba neve</th>
                    <th>Érkezés dátuma</th>
                    <th>Távozás dátuma</th>
                    </tr>
                </thead>
                <tbody>
                {vendegek.map(vendeg =>
                <tr>
                <td>{vendeg.vnev}</td>
                <td>{vendeg.erk}</td>
                <td>{vendeg.tav}</td>
                </tr>
                )}
                </tbody>
            </Table>
        </Row>
      </div>
      </Container>
    </>
  )
}

export default Valasztottszoba