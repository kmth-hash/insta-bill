import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='container mt-2 text-light'>
        <Link to={'/new'}>
        <div className="card mt-2 p-2" style={{backgroundColor : '#54BAB9' , color : '#FFFFFF'}}>
            <div className="card-body">
                <h4>New Note</h4>
            </div>            
        </div>
        </Link>
        <Link to={'/all'}>
        <div className="card mt-2 p-2" style={{backgroundColor : '#E9DAC1', color : '#000000'}}>
            <div className="card-body">
                <h4>All Notes</h4>
            </div>            
        </div>
        </Link>
    </div>
  )
}

export default Home