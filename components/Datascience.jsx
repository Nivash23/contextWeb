import React from 'react'
import Card from '../components/Card'

function Datascience() {
  return (
    <div className='container-fluid d-flex justify-content-start'>
      <div className="row">
        <div className="col-md-3">
          <Card title='Data Science' image='../datascience.webp' />
        </div>
        <div className="col-md-3">
          <Card title='Data Science' image='../datascience1.webp' />
        </div>
        <div className="col-md-3">
          <Card title='Data Science' image='../datascience2.webp'/>
        </div>
        <div className="col-md-3">
          <Card title='Data Science' image='../datascience3.webp'/>
        </div>
      </div>
      
    </div>
  )
}

export default Datascience