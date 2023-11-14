import React, { useContext } from 'react'
import product from '../components/product'
import { MessageContext } from '../src/App'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import style from '../src/assets/Card.css'

function card1() {
  function ProductpriceHandler(val) {
    let n;
    let total;
    n = val.target.value;
    total = n * ProductPrice1;
  
    setProductPrice1(total);
  }
  
  const { Productname1,p1,Price,setPrice,Productname2,p,ProductPrice1,setProductPrice1} = useContext(MessageContext)
  return (
      <div>

        <Row id='container'>
        <Row id='advertise'>
          <Col className='col-3' id='img'>
             <img src={p} />
          </Col>
          <Col>
          <Row>
            <Col id='name' className='col-8' >
              <h1>{ Productname2}</h1>
              </Col>
            <Col  id='quantity' >
                <select onChange={(val) => {
                  ProductpriceHandler(val)
                }}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
              </Col>
              <Col id='Price' className='col-2'>
                <p>-${ProductPrice1 }</p>
              </Col>

            </Row>
            <Row id='description'>
              <Col className='col-7'>
                <p id='deschead'>Details & core</p>
                <p id='desc'>Children will love reading and listening to these timeless tales and their helpful morals, which have been brought to life by bright and bold illustrations.

</p>
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
              <p id='subtotalprice'>-${ ProductPrice1}</p>
              <p id='charge'>FREE</p>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
               <h3 id='tot'>TOTAL :</h3>
            </Col>
            <Col>
              <p id='pri'>-${ProductPrice1}</p>
              <p id='offer'>Get Daily Cash With Nespola Card</p>
            </Col>
          </Row>
        </Row>
        </Row>

    </div>
  )
}

export default card1