import React, { useContext } from 'react'
import product from '../components/product'
import { MessageContext } from '../src/App'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import style from '../src/assets/Card.css'

function card() {
  function priceHandler(val,Price) {
    let n;
    let total;
    n = val.target.value;
    total = n * Price;
  
    setPrice(total);
    n = 0;
  }
  
  const { Productname1,p1,Price,setPrice} = useContext(MessageContext)
  return (
    <div>

        <Row id='container'>
        <Row id='advertise'>
          <Col className='col-3' id='img'>
             <img src={p1} />
          </Col>
          <Col>
          <Row>
            <Col id='name' className='col-8' >
              <h1>{ Productname1}</h1>
              </Col>
            <Col  id='quantity' >
                <select onChange={(val) => {
                  setPrice(Price);
                  priceHandler(val,Price)
                }}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
              </Col>
              <Col id='Price' className='col-2'>
                <p>-${Price }</p>
              </Col>

            </Row>
            <Row id='description'>
              <Col className='col-7'>
                <p id='deschead'>Details & core</p>
                <p id='desc'>A wolf that will not rest till he has had his revenge… Madhu, Gaurav and Sunil are on a school trip to the hills of Chikmagalur with their classmates and Rajesh sir, their teacher. All they are looking forward to are two days of fun and hikes</p>
                <p id='sus'>Sustainablity</p>
              </Col>
              <Col id='remove' className='col-3'>
                <p id='remele'>REMOVE</p>

              </Col>
            </Row>
          </Col>
          
        </Row>
        <hr></hr>
        <Row > 
          <Row>
            <Col id='suandsh'>
              <h3 id='sub'>SUBTOTAL:</h3>
              <h3 id='ship'>SHIPPING :</h3>
            </Col>
            <Col>
              <p id='subtotalprice'>-${ Price}</p>
              <p id='charge'>FREE</p>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
               <h3 id='tot'>TOTAL :</h3>
            </Col>
            <Col>
              <p id='pri'>-${Price}</p>
              <p id='offer'>Get Daily Cash With Nespola Card</p>
            </Col>
          </Row>
        </Row>
        </Row>

    </div>
  )
}

export default card