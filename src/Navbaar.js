import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import EJE from './EJE White.png'

function Navbaar() {
    return (
        <div>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/" bg="dark">
                <img 
                 src={EJE}
                 width="120" 
                 style={{ marginRight: '1em' }}>
                </img>
            </Navbar.Brand>
            <br/>ENSI JUNIOR ENTREPRISE
        </Navbar>
 </div>
    )
}

export default Navbaar
