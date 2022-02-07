import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const GifGridItem=({id, title, url})=>{
  
        return(
           
        <>
            <Card style={{ width: '18rem' }} bg='secondary' border='light' text='dark' className='prueba'>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Row  className='g-2'>
                    <Col>
                    <Button href={url} variant="outline-dark" target="_blank">Go Link</Button>
                    <Button href="/#" variant="outline-dark">Download</Button>
                    </Col>
                
               
                </Row>
                
            </Card.Body>
            </Card>

        </>
        
            
        );

}
export default GifGridItem;