import React from 'react'
import Card from './Card'

function All() {
  return (
    <div className='container-fluid d-flex justify-content-start'>
      <div className="row">
        <div className="col-md-3">
          <Card title='head' image='../career1.jpeg' />
        </div>
        <div className="col-md-3">
          <Card title='head' image='../fullstack1.png'/>
        </div>
        <div className="col-md-3">
          <Card title='head' image='../c1.jpg'/>
        </div>
        <div className="col-md-3">
          <Card title='head' image='../datascience1.webp'/>
        </div>
      </div>
      
    </div>

  )
}

export default All