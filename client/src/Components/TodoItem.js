import React from 'react';
import { Card } from 'react-bootstrap'
const NoteItem = props =>{
    return (
    <>
        {/* <li>{props.todo.name}</li> */}

    <Card style={{ width: '18rem', margin: '0.5rem' }}>
        <Card.Body>
            {/* <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            <Card.Text>
                {props.todo.name}
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
    </Card>

    </>

        
    )
}

export default NoteItem;